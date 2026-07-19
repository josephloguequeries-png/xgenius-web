type Decision = "Qualified" | "Watch" | "No Bet";

type DecisionBadgeProps = {
  decision: Decision;
};

export default function DecisionBadge({ decision }: DecisionBadgeProps) {
  const className = `decision-badge ${decision.toLowerCase().replace(" ", "-")}`;

  return <span className={className}>{decision}</span>;
}
