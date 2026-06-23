import AnalyticsPageView from "@/components/analytics-page-view";
import MarketingFooter from "@/components/marketing-footer";
import MarketingNav from "@/components/marketing-nav";
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

      <section className="marketing-section form-section">
        <WaitlistForm />
      </section>

      <MarketingFooter />
    </main>
  );
}
