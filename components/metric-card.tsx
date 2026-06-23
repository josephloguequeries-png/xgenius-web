type MetricCardProps = {
  label: string;
  value: string;
  trend?: string;
  sample?: boolean;
};

export default function MetricCard({ label, value, trend, sample = true }: MetricCardProps) {
  const metricClass = value.startsWith("+") || value === "6.9%" || value === "53.8%" ? "metric-value positive" : value.startsWith("-") ? "metric-value negative" : "metric-value";

  return (
    <article className="metric-card">
      {sample && <span className="sample-tag">Sample data</span>}
      <p className="metric-label">{label}</p>
      <strong className={metricClass}>{value}</strong>
      {trend && <span className="metric-trend">{trend}</span>}
    </article>
  );
}
