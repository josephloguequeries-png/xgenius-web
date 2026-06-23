import RiskFlag from "@/components/risk-flag";

type RiskLevel = "low" | "medium" | "high";

type ModelDecisionCardProps = {
  fixture: string;
  market: string;
  modelProbability: string;
  fairOdds: string;
  bestPrice: string;
  ev: string;
  minimumPrice: string;
  riskLabel: string;
  riskLevel: RiskLevel;
  decision: "Bet" | "No Bet";
  rationale: string;
};

export default function ModelDecisionCard({
  fixture,
  market,
  modelProbability,
  fairOdds,
  bestPrice,
  ev,
  minimumPrice,
  riskLabel,
  riskLevel,
  decision,
  rationale,
}: ModelDecisionCardProps) {
  const positiveDecision = decision === "Bet";

  return (
    <article className="model-decision-card">
      <div className="decision-top">
        <p className="section-label">{fixture}</p>
        <span className={positiveDecision ? "decision-badge yes" : "decision-badge no"}>{decision}</span>
      </div>

      <h3>{market}</h3>

      <dl className="decision-stats">
        <div>
          <dt>Model %</dt>
          <dd>{modelProbability}</dd>
        </div>
        <div>
          <dt>Fair odds</dt>
          <dd>{fairOdds}</dd>
        </div>
        <div>
          <dt>Best price</dt>
          <dd>{bestPrice}</dd>
        </div>
        <div>
          <dt>EV</dt>
          <dd className={ev.startsWith("+") ? "positive" : "negative"}>{ev}</dd>
        </div>
        <div>
          <dt>Min price</dt>
          <dd>{minimumPrice}</dd>
        </div>
      </dl>

      <div className="decision-risk-row">
        <RiskFlag level={riskLevel} label={riskLabel} />
      </div>

      <p>{rationale}</p>
    </article>
  );
}
