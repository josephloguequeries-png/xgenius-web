import type { ReactNode } from "react";

type DashboardChartCardProps = {
  title: string;
  subtitle: string;
  legend?: ReactNode;
  children: ReactNode;
  footer?: string;
};

export default function DashboardChartCard({ title, subtitle, legend, children, footer }: DashboardChartCardProps) {
  return (
    <section className="workspace-panel dashboard-chart-card" aria-label={title}>
      <div className="chart-head">
        <p>{title}</p>
        <span>Sample data</span>
      </div>
      <p className="chart-subtitle">{subtitle}</p>
      {legend}
      {children}
      {footer ? <p className="table-note">{footer}</p> : null}
    </section>
  );
}
