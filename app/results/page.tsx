import AnalyticsPageView from "@/components/analytics-page-view";
import BetHistoryPreview from "@/components/BetHistoryPreview";
import MetricCard from "@/components/metric-card";
import PageShell from "@/components/page-shell";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/section-header";
import SimulationPreview from "@/components/SimulationPreview";

export default function ResultsPage() {
  return (
    <PageShell>
      <AnalyticsPageView page="/results" />

      <section className="marketing-hero">
        <p className="section-label">Results workspace</p>
        <h1>Transparent tracking preview for football market process quality.</h1>
        <p>
          xGenie reporting is designed for auditability across ROI, CLV, hit rate, drawdown and no-bet discipline. Sample
          values below are placeholder previews.
        </p>
      </section>

      <RevealOnScroll>
        <section className="marketing-section workspace-section">
        <SectionHeader
          eyebrow="Performance preview"
          title="Core reporting modules"
          description="Sample data only. Live tracked reporting will be released later."
        />

        <div className="metric-grid six-col">
          <RevealOnScroll delay={0}>
            <MetricCard label="ROI" value="6.9%" trend="Sample output" />
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <MetricCard label="CLV" value="+1.7%" trend="Vs closing line" />
          </RevealOnScroll>
          <RevealOnScroll delay={160}>
            <MetricCard label="Hit rate" value="53.8%" trend="Qualified picks only" />
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <MetricCard label="Drawdown" value="-8.4%" trend="Rolling preview" />
          </RevealOnScroll>
          <RevealOnScroll delay={320}>
            <MetricCard label="No-bet rate" value="41%" trend="Discipline metric" />
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <MetricCard label="Sample ledger rows" value="1,284" trend="Preview archive" />
          </RevealOnScroll>
        </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="marketing-section workspace-section">
        <SectionHeader
          eyebrow="Sample ledger"
          title="Decision-by-decision review"
          description="Includes market, taken price, close, CLV and annotated result context."
        />
        <BetHistoryPreview />
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="marketing-section workspace-section">
        <SectionHeader
          eyebrow="Stress testing"
          title="Variance and risk context"
          description="Use simulated variance preview before increasing exposure."
        />
        <SimulationPreview />
        </section>
      </RevealOnScroll>
    </PageShell>
  );
}
