import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DecisionEnginePanel from "@/components/dashboard/DecisionEnginePanel";
import EdgeBoardTable from "@/components/dashboard/EdgeBoardTable";
import FixtureQueue from "@/components/dashboard/FixtureQueue";
import MetricCard from "@/components/dashboard/MetricCard";
import ModelSignalChart from "@/components/dashboard/ModelSignalChart";
import RiskQueue from "@/components/dashboard/RiskQueue";
import SelectedMatchPanel from "@/components/dashboard/SelectedMatchPanel";
import {
  dashboardFixtures,
  dashboardRiskQueue,
  dashboardSelectedFixture,
  dashboardSummaryMetrics,
} from "@/lib/sample-model-data";

export default function DashboardPage() {
  return (
    <>
      <AnalyticsPageView page="/dashboard" />
      <DashboardHeader
        title="Terminal overview"
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-metrics-grid" aria-label="Dashboard summary metrics">
        {dashboardSummaryMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} hint={metric.hint} />
        ))}
      </section>

      <section className="dashboard-overview-grid" aria-label="Dashboard workspace overview">
        <div className="dashboard-column-stack">
          <FixtureQueue fixtures={dashboardFixtures.slice(0, 6)} />
          <RiskQueue items={dashboardRiskQueue} />
        </div>

        <div className="dashboard-column-stack">
          <SelectedMatchPanel fixture={dashboardSelectedFixture} />
          <DecisionEnginePanel fixture={dashboardSelectedFixture} />
        </div>

        <div className="dashboard-column-stack">
          <EdgeBoardTable rows={dashboardFixtures.slice(0, 8)} compact />
          <ModelSignalChart />
        </div>
      </section>
    </>
  );
}
