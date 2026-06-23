import MetricCard from "@/components/metric-card";
import PageShell from "@/components/page-shell";
import SectionHeader from "@/components/section-header";

export default function ResultsPage() {
  return (
    <PageShell>
      <section className="marketing-hero">
        <p className="section-label">Results placeholder</p>
        <h1>Professional reporting shell for transparent performance tracking.</h1>
        <p>
          This dashboard placeholder reflects the reporting framework xGenie will publish: tracked picks, CLV, ROI,
          drawdown, and market-level attribution with no deleted losses.
        </p>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Core metrics"
          title="Reporting dashboard"
          description="Values below are placeholders for layout and methodology only."
        />

        <div className="metric-grid">
          <MetricCard label="Tracked picks" value="1,284" trend="Timestamped archive" />
          <MetricCard label="ROI" value="6.9%" trend="Flat stake basis" />
          <MetricCard label="CLV" value="+1.7%" trend="Vs closing line" />
          <MetricCard label="Hit rate" value="53.8%" trend="Qualified picks only" />
          <MetricCard label="Max drawdown" value="-8.4%" trend="Rolling 12 months" />
          <MetricCard label="Deleted losses" value="0" trend="Full audit policy" />
        </div>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Market breakdown"
          title="By market type"
          description="Placeholder table structure for future reporting exports."
        />

        <p className="table-note">Example data only. Live tracked reporting will replace these placeholders.</p>
        <div className="market-table-wrap">
          <table className="market-table">
            <thead>
              <tr>
                <th>Market</th>
                <th className="number-col">Picks</th>
                <th className="number-col">ROI</th>
                <th className="number-col">CLV</th>
                <th className="number-col">Hit Rate</th>
                <th className="number-col">Drawdown</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1X2</td>
                <td className="number-col">406</td>
                <td className="number-col positive">+7.2%</td>
                <td className="number-col positive">+1.9%</td>
                <td className="number-col">54.4%</td>
                <td className="number-col negative">-7.1%</td>
              </tr>
              <tr>
                <td>Totals</td>
                <td className="number-col">358</td>
                <td className="number-col positive">+5.4%</td>
                <td className="number-col positive">+1.3%</td>
                <td className="number-col">52.1%</td>
                <td className="number-col negative">-8.0%</td>
              </tr>
              <tr>
                <td>BTTS</td>
                <td className="number-col">214</td>
                <td className="number-col positive">+4.8%</td>
                <td className="number-col positive">+1.1%</td>
                <td className="number-col">53.0%</td>
                <td className="number-col negative">-8.4%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="table-hint">On mobile, swipe horizontally to review all columns.</p>
      </section>

      <section className="marketing-section">
        <article className="content-card">
          <h3>Transparency policy</h3>
          <p>
            xGenie reporting will preserve full pick history, including losing runs. Performance claims are presented with
            drawdown context and market-level decomposition rather than headline snapshots.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
