"use client";

import type { AnalyticsEventName } from "@/lib/analytics/events";

type ClientAnalyticsEvent = {
  eventName: AnalyticsEventName;
  page?: string;
  metadata?: Record<string, unknown>;
};

export function trackAnalyticsEvent(event: ClientAnalyticsEvent) {
  return fetch("/api/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
    body: JSON.stringify({
      event_name: event.eventName,
      page: event.page,
      metadata: event.metadata ?? {},
    }),
  }).catch(() => undefined);
}
