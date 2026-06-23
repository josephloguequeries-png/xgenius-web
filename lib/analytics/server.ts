import "server-only";

import { ANALYTICS_EVENT_NAMES, type AnalyticsEventName } from "@/lib/analytics/events";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type AnalyticsEventInput = {
  eventName: AnalyticsEventName;
  page?: string;
  metadata?: Record<string, unknown>;
};

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

export async function logAnalyticsEvent(input: AnalyticsEventInput) {
  const supabase = getSupabaseServerClient();

  const row = {
    event_name: input.eventName,
    page: normalizeText(input.page, 160) || null,
    metadata: normalizeMetadata(input.metadata),
  };

  const { error } = await supabase.from("analytics_events").insert(row);

  if (error) {
    throw error;
  }
}
