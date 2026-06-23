import AnalyticsPageView from "@/components/analytics-page-view";
import PageShell from "@/components/page-shell";
import SectionHeader from "@/components/section-header";

const tabs = ["Edge Board", "Match Board", "Model Output", "Risk Queue", "Results Ledger", "Account"];

export default function DashboardPage() {
  return (
    <PageShell>
      <AnalyticsPageView
        page="/dashboard"
        additionalEvents={[
          {
            eventName: "dashboard_preview_click",
            metadata: { location: "dashboard_page" },
          },
        ]}
      />
      <section className="marketing-hero">
        <p className="section-label">Dashboard placeholder</p>
        <h1>Future workspace for disciplined football market operations.</h1>
        <p>
          This shell shows the intended module structure for an institutional decision workflow. Live data and account logic
          will be added in future implementation stages.
        </p>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Workspace modules"
          title="Terminal navigation"
          description="Module access reflects how qualified opportunities move from review to ledger."
        />

        <div className="terminal-tabs-strip">
          {tabs.map((tab, index) => (
            <span key={tab} className={index === 0 ? "tab-chip active" : "tab-chip"}>
              {tab}
            </span>
          ))}
        </div>
      </section>

      <section className="marketing-section">
        <div className="dashboard-shell">
          <article className="dashboard-module">
            <h2>Edge board</h2>
            <p>Qualified opportunities with EV threshold and minimum price gates.</p>
          </article>
          <article className="dashboard-module">
            <h2>Match board</h2>
            <p>Fixture-level pricing context, line movement, and market depth checks.</p>
          </article>
          <article className="dashboard-module">
            <h2>Model output</h2>
            <p>Probability stack, fair odds transform, and confidence segmentation.</p>
          </article>
          <article className="dashboard-module">
            <h2>Risk queue</h2>
            <p>Lineup uncertainty, volatility warnings, and exposure concentration alerts.</p>
          </article>
          <article className="dashboard-module">
            <h2>Results ledger</h2>
            <p>Timestamped picks, CLV progression, ROI, and drawdown monitoring.</p>
          </article>
          <article className="dashboard-module">
            <h2>Account & billing</h2>
            <p>Plan access control, team settings, and future audit export tooling.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
