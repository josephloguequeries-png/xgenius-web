import AnalyticsPageView from "@/components/analytics-page-view";
import MarketingFooter from "@/components/marketing-footer";
import MarketingNav from "@/components/marketing-nav";
import RevealOnScroll from "@/components/RevealOnScroll";
import WaitlistForm from "@/components/waitlist-form";

export default function WaitlistPage() {
  return (
    <main className="marketing-main">
      <div className="background-grid" />
      <AnalyticsPageView page="/waitlist" />
      <MarketingNav />

      <section className="marketing-hero">
        <p className="section-label">Waitlist</p>
        <h1>Join the xGenie rollout queue.</h1>
        <p>
          Enter your profile and preferences to secure early beta access. We are onboarding in controlled phases.
        </p>
      </section>

      <RevealOnScroll>
        <section className="marketing-section form-section">
        <div className="waitlist-page-grid">
          <WaitlistForm />
          <article className="workspace-panel">
            <header className="workspace-panel-header">
              <p className="panel-kicker">Sample model workspace</p>
              <h3>Live outputs coming later</h3>
            </header>
            <p>
              Early access waves focus on core football markets, model workflow visibility, and responsible process
              tooling.
            </p>
            <ul className="preview-note-list">
              <li>Edge board updates arrive in phased releases.</li>
              <li>Risk and decision modules will evolve during beta.</li>
              <li>Waitlist position is used for onboarding sequence planning.</li>
            </ul>
          </article>
        </div>
        </section>
      </RevealOnScroll>

      <MarketingFooter />
    </main>
  );
}
