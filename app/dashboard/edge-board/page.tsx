import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EdgeBoardTable from "@/components/dashboard/EdgeBoardTable";
import ModelSignalChart from "@/components/dashboard/ModelSignalChart";
import { dashboardFixtures } from "@/lib/sample-model-data";

export default function EdgeBoardPage() {
  return (
    <>
      <AnalyticsPageView page="/dashboard/edge-board" />
      <DashboardHeader
        title="Edge board"
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-split-grid" aria-label="Edge board view">
        <EdgeBoardTable rows={dashboardFixtures} />
        <ModelSignalChart />
      </section>
    </>
  );
}
