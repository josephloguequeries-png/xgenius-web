import AnalyticsPageView from "@/components/analytics-page-view";
import MarketingFooter from "@/components/marketing-footer";
import MarketingNav from "@/components/marketing-nav";
import ProductModuleCard from "@/components/ProductModuleCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/section-header";

const modules = [
  {
    title: "Edge Board",
    description: "Opportunity queue ranked by model edge, fair price and execution status.",
  },
  {
    title: "Match Intelligence",
    description: "Fixture-level context for market, probability, confidence and threshold decisions.",
  },
  {
    title: "Decision Engine",
    description: "Assistant-style rationale showing how fair odds and risk controls interact.",
  },
  {
    title: "Risk Queue",
    description: "Lineup uncertainty, volatility and liquidity flags organized by priority.",
  },
  {
    title: "Results Ledger",
    description: "Transparent archive of decisions, outcomes and notes for long-term process review.",
  },
  {
    title: "CLV Tracker",
    description: "Closing-line movement visibility to monitor whether pricing process is improving.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="marketing-main">
      <div className="background-grid" />
      <AnalyticsPageView page="/features" />
      <MarketingNav />

      <section className="marketing-hero">
        <p className="section-label">Product modules</p>
        <h1>Feature set designed for football market decision workflows.</h1>
        <p>
          xGenie packages pricing, risk and decision support into reusable modules so users can run a disciplined process
          instead of chasing isolated picks.
        </p>
      </section>

      <RevealOnScroll>
        <section className="marketing-section">
        <SectionHeader
          eyebrow="Workspace map"
          title="Core modules in the terminal"
          description="Every module is built around fair price, market comparison, and no-bet discipline."
        />

        <div className="workspace-module-grid">
          {modules.map((module, index) => (
            <RevealOnScroll key={module.title} delay={index * 80}>
              <ProductModuleCard title={module.title} description={module.description} />
            </RevealOnScroll>
          ))}
        </div>
        </section>
      </RevealOnScroll>

      <MarketingFooter />
    </main>
  );
}
