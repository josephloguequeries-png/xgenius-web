import Link from "next/link";
import DecisionBadge from "@/components/dashboard/DecisionBadge";
import type { DashboardFixture } from "@/lib/sample-model-data";

type FixtureQueueProps = {
  fixtures: DashboardFixture[];
};

export default function FixtureQueue({ fixtures }: FixtureQueueProps) {
  return (
    <section className="workspace-panel" aria-label="Fixture queue">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Fixture Queue</p>
        <h3>Market queue</h3>
      </header>

      <div className="fixture-queue">
        <div className="fixture-queue-list">
          {fixtures.map((fixture) => (
            <article key={fixture.id} className="fixture-queue-item">
              <div className="fixture-row-top">
                <DecisionBadge decision={fixture.decision} />
                <span className={fixture.ev.startsWith("+") ? "positive" : "negative"}>{fixture.ev}</span>
              </div>
              <p className="fixture-name" title={fixture.fixture}>
                {fixture.fixture}
              </p>
              <p className="fixture-meta">
                {fixture.competition} · {fixture.kickoff}
              </p>
              <p className="fixture-market">Market: {fixture.market}</p>
              <Link href={`/dashboard/matches/${fixture.id}`} className="table-link-inline">
                Open fixture detail
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
