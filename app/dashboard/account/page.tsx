import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";

const accountMetrics = [
  { label: "Plan", value: "Pro Preview", hint: "Sample account mode" },
  { label: "Seats", value: "3", hint: "Team seats in preview" },
  { label: "Exports", value: "Locked", hint: "Live data exports later" },
  { label: "Billing status", value: "Sample", hint: "No live Stripe wiring" },
];

export default function AccountPage() {
  return (
    <>
      <AnalyticsPageView page="/dashboard/account" />
      <DashboardHeader
        title="Account"
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-metrics-grid" aria-label="Account summary metrics">
        {accountMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} hint={metric.hint} />
        ))}
      </section>

      <section className="dashboard-split-grid" aria-label="Account preview settings">
        <article className="workspace-panel">
          <header className="workspace-panel-header">
            <p className="panel-kicker">Team settings</p>
            <h3>Workspace controls</h3>
          </header>
          <ul className="account-list">
            <li>Role access matrix: sample only</li>
            <li>Audit trail export: coming later</li>
            <li>Notification routing: preview mode</li>
            <li>API keys: disabled for prototype</li>
          </ul>
          <p className="table-note">No authentication changes in this prototype.</p>
        </article>

        <article className="workspace-panel">
          <header className="workspace-panel-header">
            <p className="panel-kicker">Billing</p>
            <h3>Commercial controls</h3>
          </header>
          <ul className="account-list">
            <li>Usage metering: sample counters</li>
            <li>Invoice history: placeholder records</li>
            <li>Plan upgrade actions: disabled</li>
            <li>Stripe integration: not connected</li>
          </ul>
          <p className="table-note">Live billing flows coming in a later milestone.</p>
        </article>
      </section>
    </>
  );
}
