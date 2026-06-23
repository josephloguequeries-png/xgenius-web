type MetricCardProps = {
  label: string;
  value: string;
  trend?: string;
  sample?: boolean;
};

export default function MetricCard({ label, value, trend, sample = true }: MetricCardProps) {
  return (
    <article className="metric-card">
      {sample && <span className="sample-tag">Sample data</span>}
      <p className="metric-label">{label}</p>
      <strong className="metric-value">{value}</strong>
      {trend && <span className="metric-trend">{trend}</span>}
    </article>
  );
}
