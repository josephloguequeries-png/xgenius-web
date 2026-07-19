import type { WorkspaceFixture } from "@/lib/sample-model-data";
import TerminalChatPanel from "@/components/TerminalChatPanel";

type DecisionEnginePanelProps = {
  selected: WorkspaceFixture;
};

export default function DecisionEnginePanel({ selected }: DecisionEnginePanelProps) {
  return (
    <section className="workspace-panel workspace-panel-copilot" aria-label="xGenie copilot and decision engine panel">
      <header className="workspace-panel-header">
        <p className="panel-kicker">xGenie Copilot</p>
        <h3>Decision engine</h3>
      </header>

      <TerminalChatPanel question="Why is BTTS qualified here?" answer={selected.explanation} />

      <div className="risk-queue">
        <p className="risk-queue-title">Risk flags</p>
        <ul>
          {selected.riskFlags.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>
      </div>

      <div className="decision-summary">
        <p>
          Decision: <strong>{selected.decision}</strong>
        </p>
        <p>Stake: Preview only</p>
        <p>Reason: Price clears model threshold</p>
      </div>
    </section>
  );
}
