"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackAnalyticsEvent } from "@/lib/analytics/client";

type PricingCardProps = {
  name: string;
  price: string;
  summary: string;
  included: string[];
  excluded?: string[];
  featured?: boolean;
  badge?: string;
};

export default function PricingCard({
  name,
  price,
  summary,
  included,
  excluded = [],
  featured = false,
  badge,
}: PricingCardProps) {
  const pathname = usePathname();

  const featureRows = [
    ...included.map((label) => ({ label, available: true })),
    ...excluded.map((label) => ({ label, available: false })),
  ];

  function handlePlanClick() {
    void trackAnalyticsEvent({
      eventName: "pricing_plan_click",
      page: pathname,
      metadata: {
        plan: name,
        price: price.replace(/[^\d.]/g, ""),
      },
    });

    void trackAnalyticsEvent({
      eventName: "cta_click",
      page: pathname,
      metadata: {
        label: "Join waitlist",
        location: "pricing_card",
        plan: name,
      },
    });
  }

  return (
    <article className={featured ? "pricing-card featured" : "pricing-card"}>
      {featured && <span className="plan-badge">{badge ?? "Most Popular"}</span>}
      <h3>{name}</h3>
      <p>{summary}</p>
      <div className="plan-price">
        {price}
        <span>/month</span>
      </div>
      <ul className="plan-feature-list">
        {featureRows.map((feature) => (
          <li key={`${feature.available ? "in" : "out"}-${feature.label}`} className={feature.available ? "feature-row" : "feature-row unavailable"}>
            <span className={feature.available ? "feature-icon included" : "feature-icon excluded"} aria-hidden="true">
              {feature.available ? "✓" : "✕"}
            </span>
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
      <Link href="/waitlist" onClick={handlePlanClick}>
        Join waitlist
      </Link>
    </article>
  );
}
