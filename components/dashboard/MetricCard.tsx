type MetricCardProps = {
  label: string;
  value: string;
  hint: string;
};

export default function MetricCard({ label, value, hint }: MetricCardProps) {
  const valueClass = value.startsWith("+") ? "metric-value positive" : value.startsWith("-") ? "metric-value negative" : "metric-value";

  return (
    <article className="metric-card dashboard-metric-card">
      <p className="metric-label">{label}</p>
      <strong className={valueClass}>{value}</strong>
      <span className="metric-trend">{hint}</span>
    </article>
  );
}
