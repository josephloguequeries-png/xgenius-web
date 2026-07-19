import DecisionBadge from "@/components/dashboard/DecisionBadge";
import type { DashboardFixture } from "@/lib/sample-model-data";

type SelectedMatchPanelProps = {
  fixture: DashboardFixture;
};

export default function SelectedMatchPanel({ fixture }: SelectedMatchPanelProps) {
  return (
    <section className="workspace-panel workspace-panel-main" aria-label="Selected match intelligence">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Selected Match Intelligence</p>
        <h3>{fixture.fixture}</h3>
      </header>

      <dl className="intelligence-grid">
        <div>
          <dt>Market</dt>
          <dd>{fixture.market}</dd>
        </div>
        <div>
          <dt>Model probability</dt>
          <dd className="data-indicator data-cyan">{fixture.modelProbability}</dd>
        </div>
        <div>
          <dt>Fair odds</dt>
          <dd className="data-indicator data-blue">{fixture.fairOdds}</dd>
        </div>
        <div>
          <dt>Best price</dt>
          <dd className="data-indicator data-yellow">{fixture.bestPrice}</dd>
        </div>
        <div>
          <dt>EV</dt>
          <dd className={fixture.ev.startsWith("+") ? "positive" : "negative"}>{fixture.ev}</dd>
        </div>
        <div>
          <dt>Min playable</dt>
          <dd className="data-indicator data-orange">{fixture.minPlayablePrice}</dd>
        </div>
        <div>
          <dt>Confidence</dt>
          <dd>{fixture.confidence}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>
            <DecisionBadge decision={fixture.decision} />
          </dd>
        </div>
      </dl>
      <p className="table-note">Preview mode · Sample data only</p>
    </section>
  );
}
