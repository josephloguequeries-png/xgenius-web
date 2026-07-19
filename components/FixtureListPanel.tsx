import type { WorkspaceFixture } from "@/lib/sample-model-data";

type FixtureListPanelProps = {
  fixtures: WorkspaceFixture[];
  selectedFixture: string;
};

export default function FixtureListPanel({ fixtures, selectedFixture }: FixtureListPanelProps) {
  return (
    <section className="workspace-panel" aria-label="Market workspace panel">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Market Workspace</p>
        <h3>Fixture queue</h3>
      </header>

      <div className="fixture-queue">
        <div className="fixture-queue-list">
          {fixtures.map((row) => {
            const selected = row.fixture === selectedFixture;
            return (
              <article
                key={`${row.fixture}-${row.market}`}
                className={selected ? "fixture-queue-item selected" : "fixture-queue-item"}
                aria-label={`${row.fixture} ${row.market} ${row.decision}`}
              >
                <div className="fixture-row-top">
                  <span className={`decision-badge fixture-status ${row.decision.toLowerCase().replace(" ", "-")}`}>
                    {row.decision}
                  </span>
                </div>
                <p className="fixture-name" title={row.fixture}>
                  {row.fixture}
                </p>
                <p className="fixture-meta">
                  {row.competition} · {row.kickoff}
                </p>
                <p className="fixture-market">Market: {row.market}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
