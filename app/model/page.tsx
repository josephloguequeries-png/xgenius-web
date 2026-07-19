import AnalyticsPageView from "@/components/analytics-page-view";
import DecisionEnginePanel from "@/components/DecisionEnginePanel";
import MarketTable from "@/components/market-table";
import MatchIntelligencePanel from "@/components/MatchIntelligencePanel";
import ModelWorkflowSteps from "@/components/ModelWorkflowSteps";
import PageShell from "@/components/page-shell";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/section-header";
import { selectedWorkspaceFixture, workspaceFixtures } from "@/lib/sample-model-data";

const modelRows = workspaceFixtures.map((row) => ({
  fixture: row.fixture,
  market: row.market,
  modelProbability: row.modelProbability,
  fairOdds: row.fairOdds,
  bestPrice: row.bestPrice,
  ev: row.ev,
  riskLabel: row.riskFlags[0] ?? "Risk review",
  riskLevel: row.decision === "No Bet" ? ("high" as const) : row.decision === "Watch" ? ("medium" as const) : ("low" as const),
  decision: row.decision,
}));

export default function ModelPage() {
  return (
    <PageShell>
      <AnalyticsPageView page="/model" />

      <section className="marketing-hero">
        <p className="section-label">Model notebook</p>
        <h1>Model process shown like a working terminal notebook.</h1>
        <p>
          xGenie keeps the model workflow explicit: fixture inputs, probability, fair odds, market comparison, risk filter,
          and final status. Sample data only.
        </p>
      </section>

      <RevealOnScroll>
        <section className="marketing-section workspace-section">
        <SectionHeader
          eyebrow="Workflow"
          title="From market price to decision"
          description="Each stage logs rationale so users can review why a market becomes Qualified, Watch, or No Bet."
        />
        <ModelWorkflowSteps />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="marketing-section model-grid-section">
        <MatchIntelligencePanel selected={selectedWorkspaceFixture} />
        <DecisionEnginePanel selected={selectedWorkspaceFixture} />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="marketing-section workspace-section">
        <SectionHeader
          eyebrow="Sample output"
          title="Qualification table"
          description="Sample model workspace - live outputs coming later."
        />
        <MarketTable rows={modelRows} />
        </section>
      </RevealOnScroll>
    </PageShell>
  );
}
