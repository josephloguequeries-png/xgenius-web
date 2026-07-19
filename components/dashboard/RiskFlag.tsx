type RiskLevel = "low" | "medium" | "high";

type RiskFlagProps = {
  label: string;
  level: RiskLevel;
};

export default function RiskFlag({ label, level }: RiskFlagProps) {
  return <span className={`risk-flag risk-${level}`}>{label}</span>;
}
