import AnalyticsPageView from "@/components/analytics-page-view";
import MarketTable from "@/components/market-table";
import ModelDecisionCard from "@/components/model-decision-card";
import PageShell from "@/components/page-shell";
import SectionHeader from "@/components/section-header";

const processRows = [
  {
    fixture: "Man City vs Aston Villa",
    market: "Man City Win",
    modelProbability: "58.4%",
    fairOdds: "1.71",
    bestPrice: "1.82",
    ev: "+6.4%",
    riskLabel: "Lineups pending",
    riskLevel: "medium" as const,
    decision: "Bet" as const,
  },
  {
    fixture: "Arsenal vs Newcastle",
    market: "Over 2.5 Goals",
    modelProbability: "54.3%",
    fairOdds: "1.84",
    bestPrice: "1.91",
    ev: "+3.8%",
    riskLabel: "Low risk",
    riskLevel: "low" as const,
    decision: "Bet" as const,
  },
  {
    fixture: "Inter vs AC Milan",
    market: "BTTS Yes",
    modelProbability: "57.1%",
    fairOdds: "1.75",
    bestPrice: "1.74",
    ev: "-0.6%",
    riskLabel: "Derby volatility",
    riskLevel: "high" as const,
    decision: "No Bet" as const,
  },
];

export default function ModelPage() {
  return (
    <PageShell>
      <AnalyticsPageView page="/model" />
      <section className="marketing-hero">
        <p className="section-label">Model framework</p>
        <h1>How xGenie turns probability into a bet or no-bet decision.</h1>
        <p>
          Every market follows the same logic chain: model probability, fair odds, market comparison, EV test, minimum price
          gate, risk flags, and a final decision status.
        </p>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Process map"
          title="Decision sequence"
          description="Only markets passing all gates reach execution status."
        />

        <div className="content-card-grid">
          <article className="content-card">
            <h3>1. Model probability</h3>
            <p>Estimate event likelihood from team strength, chance creation profile, and contextual adjustments.</p>
          </article>
          <article className="content-card">
            <h3>2. Fair odds</h3>
            <p>Convert probability into fair odds to create a neutral valuation baseline for each market.</p>
          </article>
          <article className="content-card">
            <h3>3. EV and minimum price</h3>
            <p>Compare best available odds to fair value and reject prices that sit below execution thresholds.</p>
          </article>
          <article className="content-card">
            <h3>4. Risk flags and decision</h3>
            <p>Apply lineup, liquidity, and volatility flags before finalizing Bet or No Bet.</p>
          </article>
        </div>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Sample output"
          title="Current qualification table"
          description="Illustrative model output for upcoming fixtures."
        />
        <MarketTable rows={processRows} />
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Decision cards"
          title="Readable rationale for execution"
          description="Each card captures thresholds, risk state, and final status."
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
            rationale="Edge remains above threshold after lineup uncertainty buffer."
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
            rationale="Price and volatility fail execution policy despite acceptable baseline probability."
          />
        </div>
      </section>
    </PageShell>
  );
}
