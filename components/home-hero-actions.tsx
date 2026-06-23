"use client";

import Link from "next/link";
import { trackAnalyticsEvent } from "@/lib/analytics/client";

export default function HomeHeroActions() {
  function handleJoinWaitlistClick() {
    void trackAnalyticsEvent({
      eventName: "cta_click",
      page: "/",
      metadata: {
        label: "Join waitlist",
        location: "homepage_hero",
      },
    });
  }

  function handleReviewModelClick() {
    void trackAnalyticsEvent({
      eventName: "cta_click",
      page: "/",
      metadata: {
        label: "Review model process",
        location: "homepage_hero",
      },
    });

    void trackAnalyticsEvent({
      eventName: "model_page_click",
      page: "/",
      metadata: {
        label: "Review model process",
        location: "homepage_hero",
      },
    });
  }

  return (
    <div className="hero-actions">
      <Link className="primary-action" href="/waitlist" onClick={handleJoinWaitlistClick}>
        Join waitlist
      </Link>
      <Link className="secondary-action" href="/model" onClick={handleReviewModelClick}>
        Review model process
      </Link>
    </div>
  );
}
