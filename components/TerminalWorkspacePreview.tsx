import FixtureListPanel from "@/components/FixtureListPanel";
import MatchIntelligencePanel from "@/components/MatchIntelligencePanel";
import RevealOnScroll from "@/components/RevealOnScroll";
import { selectedWorkspaceFixture, workspaceFixtures } from "@/lib/sample-model-data";

const LANDING_FIXTURE_QUEUE_LIMIT = 6;

export default function TerminalWorkspacePreview() {
  return (
    <section className="terminal-workspace-shell" aria-label="xGenie sample model workspace">
      <div className="workspace-shell-head">
        <p className="panel-kicker">Football market intelligence, built like a terminal.</p>
        <span className="workspace-sample-label">Sample model workspace - live outputs coming later.</span>
      </div>

      <div className="workspace-columns">
        <RevealOnScroll delay={0}>
          <FixtureListPanel
            fixtures={workspaceFixtures.slice(0, LANDING_FIXTURE_QUEUE_LIMIT)}
            selectedFixture={selectedWorkspaceFixture.fixture}
          />
        </RevealOnScroll>
        <RevealOnScroll delay={80}>
          <MatchIntelligencePanel selected={selectedWorkspaceFixture} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
