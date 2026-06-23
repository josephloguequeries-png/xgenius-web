import AnalyticsPageView from "@/components/analytics-page-view";
import PageShell from "@/components/page-shell";
import PricingCard from "@/components/pricing-card";
import SectionHeader from "@/components/section-header";

const plans = [
  {
    name: "Basic",
    price: "£5.99",
    summary: "Core model view for disciplined weekly checks.",
    included: [
      "Daily model snapshot",
      "Limited edge board access",
      "Core markets only (1X2, O/U 2.5, BTTS)",
      "Weekly results summary",
    ],
    excluded: [
      "Full edge board",
      "Full results ledger",
      "CLV tracking",
      "Extended markets, player stats, and 150+ competitions",
    ],
  },
  {
    name: "Premium",
    price: "£19.99",
    summary: "Full edge workflow with extended markets and player-level context.",
    included: [
      "Full edge board access",
      "Data across 150+ competitions",
      "Extended betting markets coverage",
      "Individual player statistics view",
      "Fair odds and EV view",
      "Match-level model breakdowns",
      "Full results ledger",
    ],
    excluded: ["CLV tracking", "Advanced workflow filters"],
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Professional",
    price: "£49.99",
    summary: "Power-user execution tier with advanced monitoring and workflow controls.",
    included: [
      "Everything in Premium",
      "CLV tracking",
      "Price movement alerts",
      "Advanced filters",
      "Enhanced results analytics",
      "Priority access to new features",
      "Deep workflow tools across 150+ competitions",
    ],
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <AnalyticsPageView page="/pricing" />
      <section className="marketing-hero">
        <p className="section-label">Pricing</p>
        <h1>Choose your market intelligence tier</h1>
        <p>
          Start with a lightweight view of the model, then upgrade for full boards, tracking and advanced workflow tools.
        </p>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Plan comparison"
          title="Choose by analysis needs"
          description="All tiers follow the same responsible product policy with no guaranteed profit claims."
        />

        <div className="pricing-grid">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
