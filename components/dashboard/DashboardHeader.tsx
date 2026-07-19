type DashboardHeaderProps = {
  title: string;
  subtitle: string;
};

export default function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <header className="dashboard-header">
      <div>
        <p className="section-label">xGenie dashboard</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <span className="dashboard-preview-badge">Preview mode · Sample data only</span>
    </header>
  );
}
