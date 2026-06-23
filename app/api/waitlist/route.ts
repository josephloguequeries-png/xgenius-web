import { NextResponse } from "next/server";
import { logAnalyticsEvent } from "@/lib/analytics/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type WaitlistPayload = {
  email?: string;
  user_type?: string;
  betting_experience?: string;
  main_interest?: string;
  preferred_markets?: string[];
  pricing_interest?: string;
  source_page?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function normalizeMarkets(value: unknown) {
  if (!Array.isArray(value)) {
    return [] as string[];
  }

  return value
    .map((item) => normalizeText(item))
    .filter(Boolean)
    .slice(0, 12);
}

export async function POST(request: Request) {
  let payload: WaitlistPayload;

  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const email = normalizeText(payload.email).toLowerCase();

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const row = {
    email,
    user_type: normalizeText(payload.user_type),
    betting_experience: normalizeText(payload.betting_experience),
    main_interest: normalizeText(payload.main_interest),
    preferred_markets: normalizeMarkets(payload.preferred_markets),
    pricing_interest: normalizeText(payload.pricing_interest),
    source_page: normalizeText(payload.source_page) || "/waitlist",
  };

  try {
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("waitlist").insert(row);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "This email is already on the xGenie beta list." }, { status: 409 });
      }

      return NextResponse.json({ error: "Unable to save waitlist signup right now. Please try again." }, { status: 500 });
    }

    try {
      await logAnalyticsEvent({
        eventName: "waitlist_submit",
        page: row.source_page,
        metadata: {
          pricing_interest: row.pricing_interest,
          main_interest: row.main_interest,
          user_type: row.user_type,
        },
      });
    } catch {
      // Keep waitlist submission resilient if analytics logging is unavailable.
    }

    // TODO(admin): Add internal admin analytics endpoints for total signups, signup source,
    // pricing interest distribution, preferred markets breakdown, and CSV export.
    return NextResponse.json({ message: "You’re on the xGenie beta list. We’ll contact you when early access opens." });
  } catch {
    return NextResponse.json({ error: "Waitlist service is not configured yet." }, { status: 500 });
  }
}
