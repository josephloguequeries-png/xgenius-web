import AnalyticsPageView from "@/components/analytics-page-view";
import BetHistoryPreview from "@/components/BetHistoryPreview";
import HomeHeroActions from "@/components/home-hero-actions";
import MarketCoverageGrid from "@/components/MarketCoverageGrid";
import ModelWorkflowSteps from "@/components/ModelWorkflowSteps";
import PageShell from "@/components/page-shell";
import PricingCard from "@/components/pricing-card";
import ProductModuleCard from "@/components/ProductModuleCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import RotatingBrandSignal from "@/components/rotating-brand-signal";
import SectionHeader from "@/components/section-header";
import SimulationPreview from "@/components/SimulationPreview";
import TerminalWorkspacePreview from "@/components/TerminalWorkspacePreview";
import WaitlistForm from "@/components/waitlist-form";

const productModules = [
  {
    title: "Edge board",
    description: "Ranked opportunities by fair price gap, EV profile and execution readiness.",
  },
  {
    title: "Fixture intelligence",
    description: "Match context, market setup and key inputs collected in one panel.",
  },
  {
    title: "Risk flags",
    description: "Lineups, volatility and liquidity context surfaced before any bet decision.",
  },
  {
    title: "No-bet discipline",
    description: "Systematic rejection of low-quality prices to protect process integrity.",
  },
  {
    title: "Results tracking",
    description: "Structured history designed for auditability instead of selective reporting.",
  },
  {
    title: "CLV tracking",
    description: "Measure whether your process is beating market closes over time.",
  },
];

const pricingPlans = [
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

export default function Home() {
  return (
    <PageShell navMode="home">
      <AnalyticsPageView page="/" />

      <section className="terminal-home-hero">
        <div className="hero-copy">
          <p className="terminal-kicker">Football market intelligence, built like a terminal.</p>
          <h1>
            Price the game.
            <br />
            <em>Don&apos;t chase it.</em>
          </h1>
          <p>
            xGenie turns fixture data, model probability, market price and risk context into clear football betting
            decisions.
          </p>
          <HomeHeroActions />
          <RotatingBrandSignal />
        </div>

        <TerminalWorkspacePreview />
      </section>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Product workspace"
          title="One workspace for football market decisions"
          description="xGenie is designed as a decision-support terminal, with pricing, risk and rationale visible in one view."
        />
        <div className="workspace-module-grid">
          {productModules.map((module, index) => (
            <RevealOnScroll key={module.title} delay={index * 80}>
              <ProductModuleCard title={module.title} description={module.description} />
            </RevealOnScroll>
          ))}
        </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Market coverage"
          title="Built around the markets that matter first"
          description="xGenie starts with high-liquidity football markets before expanding into more fragile props."
        />
        <MarketCoverageGrid />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Model workflow"
          title="From market price to decision"
          description="Each step is tracked so users can understand why a market is qualified, watched, or rejected."
        />
        <ModelWorkflowSteps />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Future feature preview"
          title="Your betting record, in market context"
          description="Future xGenie tools will let users analyse their betting history by market, price, closing-line movement, risk profile and result quality."
        />
        <BetHistoryPreview />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Discipline simulation"
          title="Stress-test the process before scaling it"
          description="Sample outputs show drawdown preview, no-bet rate and variance context. These are examples only, not performance claims."
        />
        <SimulationPreview />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Pricing"
          title="Choose your market intelligence tier"
          description="Start with a lightweight view of the model, then upgrade for full boards, tracking and advanced workflow tools."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll key={plan.name} delay={index * 80}>
              <PricingCard {...plan} />
            </RevealOnScroll>
          ))}
        </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="content-section workspace-section">
        <SectionHeader
          eyebrow="Waitlist"
          title="Join the xGenie rollout queue"
          description="Sample model workspace - live outputs coming later. Join the waitlist for phased access updates."
        />
        <div className="waitlist-home-grid">
          <WaitlistForm />
          <article className="workspace-panel">
            <header className="workspace-panel-header">
              <p className="panel-kicker">Preview access notes</p>
              <h3>What to expect next</h3>
            </header>
            <ul className="preview-note-list">
              <li>Edge board modules arrive in staged beta waves.</li>
              <li>Model workflow and risk queue evolve with user feedback.</li>
              <li>All outputs remain decision support with no guaranteed outcomes.</li>
            </ul>
          </article>
        </div>
        </section>
      </RevealOnScroll>
    </PageShell>
  );
}
