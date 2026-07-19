import { notFound } from "next/navigation";
import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DecisionEnginePanel from "@/components/dashboard/DecisionEnginePanel";
import ModelSignalChart from "@/components/dashboard/ModelSignalChart";
import RiskQueue from "@/components/dashboard/RiskQueue";
import SelectedMatchPanel from "@/components/dashboard/SelectedMatchPanel";
import { dashboardFixtures, dashboardRiskQueue } from "@/lib/sample-model-data";

type MatchDetailPageProps = {
  params: Promise<{
    fixtureId: string;
  }>;
};

export default async function MatchDetailPage({ params }: MatchDetailPageProps) {
  const { fixtureId } = await params;
  const fixture = dashboardFixtures.find((item) => item.id === fixtureId);

  if (!fixture) {
    notFound();
  }

  return (
    <>
      <AnalyticsPageView page={`/dashboard/matches/${fixtureId}`} />
      <DashboardHeader
        title={fixture.fixture}
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-split-grid" aria-label="Selected fixture detail view">
        <SelectedMatchPanel fixture={fixture} />
        <DecisionEnginePanel fixture={fixture} />
      </section>

      <section className="dashboard-split-grid" aria-label="Fixture diagnostics and risk queue">
        <ModelSignalChart />
        <RiskQueue items={dashboardRiskQueue} />
      </section>
    </>
  );
}
