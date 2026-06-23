"use client";

import { useEffect, useRef } from "react";
import type { AnalyticsEventName } from "@/lib/analytics/events";
import { trackAnalyticsEvent } from "@/lib/analytics/client";

type AnalyticsPageViewProps = {
  page: string;
  metadata?: Record<string, unknown>;
  additionalEvents?: Array<{
    eventName: AnalyticsEventName;
    metadata?: Record<string, unknown>;
  }>;
};

export default function AnalyticsPageView({ page, metadata, additionalEvents = [] }: AnalyticsPageViewProps) {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;
    void trackAnalyticsEvent({ eventName: "page_view", page, metadata });

    additionalEvents.forEach((event) => {
      void trackAnalyticsEvent({ eventName: event.eventName, page, metadata: event.metadata });
    });
  }, [additionalEvents, metadata, page]);

  return null;
}
