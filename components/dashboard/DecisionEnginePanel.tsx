import DecisionBadge from "@/components/dashboard/DecisionBadge";
import type { DashboardFixture } from "@/lib/sample-model-data";

type DashboardDecisionEnginePanelProps = {
  fixture: DashboardFixture;
};

export default function DecisionEnginePanel({ fixture }: DashboardDecisionEnginePanelProps) {
  return (
    <section className="workspace-panel" aria-label="Decision engine">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Decision Engine</p>
        <h3>Risk-adjusted recommendation</h3>
      </header>

      <p className="dashboard-explanation">{fixture.explanation}</p>

      <div className="decision-summary">
        <p>
          Decision: <DecisionBadge decision={fixture.decision} />
        </p>
        <p>Action: Watch lineups</p>
        <p>Stake: Preview only</p>
        <p>Reason: Price clears model threshold</p>
      </div>

      <p className="table-note">Live model outputs coming later</p>
    </section>
  );
}
