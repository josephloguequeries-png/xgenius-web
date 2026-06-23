import AnalyticsPageView from "@/components/analytics-page-view";
import HomeHeroActions from "@/components/home-hero-actions";
import MarketTable from "@/components/market-table";
import MetricCard from "@/components/metric-card";
import ModelDecisionCard from "@/components/model-decision-card";
import PageShell from "@/components/page-shell";
import PricingCard from "@/components/pricing-card";
import RotatingBrandSignal from "@/components/rotating-brand-signal";
import SectionHeader from "@/components/section-header";

const homeRows = [
  {
    fixture: "Man City vs Aston Villa",
    market: "Home Win",
    modelProbability: "58.4%",
    fairOdds: "1.71",
    bestPrice: "1.82",
    ev: "+6.4%",
    riskLabel: "Lineups pending",
    riskLevel: "medium" as const,
    decision: "Watch" as const,
  },
  {
    fixture: "Arsenal vs Newcastle",
    market: "Over 2.5 Goals",
    modelProbability: "52.1%",
    fairOdds: "1.92",
    bestPrice: "1.83",
    ev: "-4.7%",
    riskLabel: "Price short",
    riskLevel: "high" as const,
    decision: "No Bet" as const,
  },
  {
    fixture: "Inter vs Milan",
    market: "BTTS Yes",
    modelProbability: "56.8%",
    fairOdds: "1.76",
    bestPrice: "1.91",
    ev: "+8.5%",
    riskLabel: "Derby volatility",
    riskLevel: "medium" as const,
    decision: "Qualified" as const,
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
      <section className="hero-section terminal-hero">
        <div className="hero-left">
          <div className="hero-copy">
            <p className="terminal-kicker">Model-led football market intelligence</p>
            <h1>
              Price the game.
              <br />
              <em>Don&apos;t chase it.</em>
            </h1>
            <p>
              xGenie turns football market data, model probability and risk context into clear pricing intelligence.
            </p>

            <HomeHeroActions />
          </div>

          <div className="hero-metrics sample-metrics">
            <MetricCard label="Qualified EV" value="+4.2%" trend="Average across accepted picks" />
            <MetricCard label="No Bet rate" value="41%" trend="When price or risk gates fail" />
            <MetricCard label="Tracked CLV" value="+1.7%" trend="Rolling 90-day sample" />
          </div>

          <article className="edge-curve-card model-edge-card">
            <p className="section-label">Model edge curve</p>
            <h3>Signal path from raw price to decision</h3>
            <p className="edge-curve-desc">Sample signal path showing how xGenie moves from raw market price to qualified decision.</p>

            <div className="edge-curve-chart" aria-label="Model edge curve sample chart">
              <svg viewBox="0 0 540 164" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <linearGradient id="edgeFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d6f3" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#00d6f3" stopOpacity="0.01" />
                  </linearGradient>
                </defs>

                <line x1="50" y1="18" x2="490" y2="18" className="edge-grid-line" />
                <line x1="50" y1="44" x2="490" y2="44" className="edge-grid-line" />
                <line x1="50" y1="70" x2="490" y2="70" className="edge-grid-line" strokeDasharray="4 4" />
                <line x1="50" y1="96" x2="490" y2="96" className="edge-grid-line" />
                <line x1="50" y1="122" x2="490" y2="122" className="edge-grid-line" />

                <text x="44" y="21" className="edge-axis-label" textAnchor="end">+8%</text>
                <text x="44" y="47" className="edge-axis-label" textAnchor="end">+6%</text>
                <text x="44" y="73" className="edge-axis-label edge-threshold-label" textAnchor="end">+4%</text>
                <text x="44" y="99" className="edge-axis-label" textAnchor="end">+2%</text>
                <text x="44" y="125" className="edge-axis-label" textAnchor="end">0%</text>

                <text x="496" y="68" className="edge-threshold-annotation">threshold</text>

                <polygon points="50,98 160,80 270,50 380,70 490,40 490,122 50,122" fill="url(#edgeFill)" />

                <polyline points="50,98 160,80 270,50 380,70 490,40" className="edge-line" fill="none" />

                <circle cx="50" cy="98" r="4" className="edge-node" />
                <circle cx="160" cy="80" r="4" className="edge-node" />
                <circle cx="270" cy="50" r="4" className="edge-node" />
                <circle cx="380" cy="70" r="4" className="edge-node" />
                <circle cx="490" cy="40" r="5" className="edge-node edge-node-final" />

                <text x="50" y="92" className="edge-value-label" textAnchor="middle">+1.8%</text>
                <text x="160" y="74" className="edge-value-label" textAnchor="middle">+3.2%</text>
                <text x="270" y="44" className="edge-value-label" textAnchor="middle">+5.6%</text>
                <text x="380" y="64" className="edge-value-label" textAnchor="middle">+4.1%</text>
                <text x="490" y="34" className="edge-value-label edge-value-final" textAnchor="middle">+6.4%</text>

                <text x="50" y="142" className="edge-axis-label" textAnchor="middle">Opening</text>
                <text x="160" y="142" className="edge-axis-label" textAnchor="middle">Drift</text>
                <text x="270" y="142" className="edge-axis-label" textAnchor="middle">Reprice</text>
                <text x="380" y="142" className="edge-axis-label" textAnchor="middle">Risk</text>
                <text x="490" y="142" className="edge-axis-label edge-label-final" textAnchor="middle">Qualified</text>
              </svg>
            </div>

            <dl className="edge-curve-stats">
              <div>
                <dt>Edge threshold</dt>
                <dd>+4.0%</dd>
              </div>
              <div>
                <dt>Sample edge</dt>
                <dd className="positive">+6.4%</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  <span className="decision-badge qualified">Qualified</span>
                </dd>
              </div>
              <div>
                <dt>Risk state</dt>
                <dd>
                  <span className="decision-badge watch">Watch</span>
                </dd>
              </div>
            </dl>

            <p className="edge-curve-footer">Sample data only. Live model outputs use fixture, market and odds data.</p>
          </article>
        </div>

        <div className="hero-right">
          <RotatingBrandSignal />

          <div className="terminal-card terminal-table-card">
            <SectionHeader
              eyebrow="Live board snapshot"
              title="Current market qualification view"
              description="Prices and decisions are examples of xGenie workflow output."
            />
            <MarketTable rows={homeRows} />
          </div>

          <article className="model-objective-card">
            <p className="section-label">Model objective</p>
            <h3>Built to identify value. Also built to say no.</h3>
            <p>
              xGenie converts team strength, chance creation, market movement and risk context into fair odds, then compares
              against bookmaker lines to identify where price and edge align.
            </p>

            <div className="model-objective-grid">
              <div className="model-feature">
                <p className="model-feature-label">Probability engine</p>
                <p className="model-feature-copy">Estimates true outcome probability across core football markets.</p>
              </div>
              <div className="model-feature">
                <p className="model-feature-label">Fair odds conversion</p>
                <p className="model-feature-copy">Turns model probability into a minimum acceptable price.</p>
              </div>
              <div className="model-feature">
                <p className="model-feature-label">Risk filter</p>
                <p className="model-feature-copy">Flags lineup uncertainty, volatility, weak liquidity and fragile markets.</p>
              </div>
              <div className="model-feature">
                <p className="model-feature-label">No-bet discipline</p>
                <p className="model-feature-copy">Rejects markets where price, risk or confidence fails the threshold.</p>
              </div>
            </div>

            <div className="model-pills" aria-label="Model output descriptors">
              <span className="model-pill">1X2 / O-U 2.5 / BTTS</span>
              <span className="model-pill">EV / Fair price / Risk</span>
              <span className="model-pill">Qualified / Watch / No Bet</span>
            </div>
          </article>
        </div>
      </section>

      <section id="features" className="content-section">
        <SectionHeader
          eyebrow="Decision architecture"
          title="Structured for pricing discipline, not volume betting"
          description="Each recommendation passes valuation, minimum price, and risk controls before reaching the edge board."
        />

        <div className="content-card-grid">
          <article className="content-card">
            <h3>Fair odds engine</h3>
            <p>Model probabilities are converted into fair odds before comparing against bookmaker prices.</p>
          </article>
          <article className="content-card">
            <h3>Expected value filter</h3>
            <p>Markets below EV threshold stay out of the board even if team-level narrative looks attractive.</p>
          </article>
          <article className="content-card">
            <h3>Risk flagging</h3>
            <p>Lineup uncertainty, market drift, and liquidity concerns are surfaced before any staking decision.</p>
          </article>
          <article className="content-card">
            <h3>Transparent records</h3>
            <p>Accepted and rejected opportunities are logged with timestamped pricing context.</p>
          </article>
        </div>
      </section>

      <section id="model" className="content-section">
        <SectionHeader
          eyebrow="Model decisions"
          title="Recommendations include rationale and execution boundaries"
          description="No Bet is a valid model output when risk or price conditions are not met."
        />

        <div className="decision-grid">
          <ModelDecisionCard
            fixture="Premier League · Sat 17:30"
            market="Man City Win"
            modelProbability="58.4%"
            fairOdds="1.71"
            bestPrice="1.82"
            ev="+6.4%"
            minimumPrice="1.78"
            riskLabel="Lineups pending"
            riskLevel="medium"
            decision="Bet"
            rationale="Price clears minimum threshold and EV remains positive after risk adjustments."
          />
          <ModelDecisionCard
            fixture="Serie A · Sun 19:45"
            market="BTTS Yes"
            modelProbability="57.1%"
            fairOdds="1.75"
            bestPrice="1.74"
            ev="-0.6%"
            minimumPrice="1.80"
            riskLabel="Derby volatility"
            riskLevel="high"
            decision="No Bet"
            rationale="Offered price fails minimum gate and volatility profile increases downside variance."
          />
        </div>
      </section>

      <section id="pricing" className="content-section">
        <SectionHeader
          eyebrow="Pricing"
          title="Choose your market intelligence tier"
          description="Start with a lightweight view of the model, then upgrade for full boards, tracking and advanced workflow tools."
        />
        <p className="pricing-note">All plans billed monthly. Cancel anytime.</p>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section id="results" className="results-band">
        <SectionHeader
          eyebrow="Results policy"
          title="Transparent reporting with no deleted losses"
          description="Performance reporting is process-first: CLV, ROI, drawdown, and market-level attribution remain visible."
        />

        <div className="results-stats">
          <MetricCard label="Tracked picks" value="1,284" trend="All timestamped" />
          <MetricCard label="CLV vs close" value="+1.7%" trend="Rolling 90-day" />
          <MetricCard label="Loss policy" value="0 deletions" trend="Full audit trail" />
        </div>
      </section>
    </PageShell>
  );
}
