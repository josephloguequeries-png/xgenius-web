import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EdgeBoardTable from "@/components/dashboard/EdgeBoardTable";
import FixtureQueue from "@/components/dashboard/FixtureQueue";
import SelectedMatchPanel from "@/components/dashboard/SelectedMatchPanel";
import { dashboardFixtures, dashboardSelectedFixture } from "@/lib/sample-model-data";

export default function MatchesPage() {
  return (
    <>
      <AnalyticsPageView page="/dashboard/matches" />
      <DashboardHeader
        title="Match board"
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-overview-grid" aria-label="Match board layout">
        <div className="dashboard-column-stack">
          <FixtureQueue fixtures={dashboardFixtures} />
        </div>

        <div className="dashboard-column-stack">
          <SelectedMatchPanel fixture={dashboardSelectedFixture} />
        </div>

        <div className="dashboard-column-stack">
          <EdgeBoardTable rows={dashboardFixtures.slice(0, 10)} compact />
        </div>
      </section>
    </>
  );
}
