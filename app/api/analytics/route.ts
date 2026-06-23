import { NextResponse } from "next/server";
import { ANALYTICS_EVENT_NAMES, type AnalyticsEventName } from "@/lib/analytics/events";
import { logAnalyticsEvent } from "@/lib/analytics/server";

type AnalyticsPayload = {
  event_name?: string;
  page?: string;
  metadata?: unknown;
};

const ALLOWED_EVENTS = new Set<string>(ANALYTICS_EVENT_NAMES);

function normalizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function normalizeMetadata(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {} as Record<string, unknown>;
  }

  return value as Record<string, unknown>;
}

export async function POST(request: Request) {
  let payload: AnalyticsPayload;

  try {
    payload = (await request.json()) as AnalyticsPayload;
  } catch {
    return NextResponse.json({ error: "Invalid analytics payload." }, { status: 400 });
  }

  const eventName = normalizeText(payload.event_name, 64);

  if (!ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json({ error: "Unsupported analytics event." }, { status: 400 });
  }

  try {
    await logAnalyticsEvent({
      eventName: eventName as AnalyticsEventName,
      page: normalizeText(payload.page, 160),
      metadata: normalizeMetadata(payload.metadata),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to record analytics event." }, { status: 500 });
  }
}