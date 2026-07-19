import AnalyticsPageView from "@/components/analytics-page-view";
import DashboardChartCard from "@/components/dashboard/DashboardChartCard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ResultsLedger from "@/components/dashboard/ResultsLedger";
import { resultsLedgerRows, sampleClvTrend } from "@/lib/sample-model-data";

function clvY(value: number) {
  const min = 0;
  const max = 2.5;
  const top = 26;
  const bottom = 150;
  return bottom - ((value - min) / (max - min)) * (bottom - top);
}

function clvX(index: number) {
  return 70 + index * 40;
}

export default function ResultsPage() {
  return (
    <>
      <AnalyticsPageView page="/dashboard/results" />
      <DashboardHeader
        title="Results ledger"
        subtitle="Preview mode. Sample data only. Live model outputs coming later."
      />

      <section className="dashboard-split-grid" aria-label="Results and CLV trend">
        <ResultsLedger rows={resultsLedgerRows} />

        <DashboardChartCard
          title="Sample CLV trend"
          subtitle="Illustrative closing line value progression by pick sequence."
          footer="Sample data only · Live performance tracking coming later"
        >
          <div className="mini-chart">
            <svg viewBox="0 0 400 184" role="img" aria-label="Sample CLV trend chart">
              {[0, 0.5, 1, 1.5, 2, 2.5].map((tick) => {
                const y = clvY(tick);
                return (
                  <g key={tick}>
                    <line x1="58" y1={y} x2="366" y2={y} className="edge-grid-line" />
                    <text x="50" y={y + 4} className="edge-axis-label" textAnchor="end">
                      +{tick.toFixed(1)}%
                    </text>
                  </g>
                );
              })}

              <line x1="58" y1="26" x2="58" y2="150" className="chart-axis" />
              <line x1="58" y1="150" x2="366" y2="150" className="chart-axis" />

              <polyline
                points={sampleClvTrend.map((point, index) => `${clvX(index)},${clvY(point.value)}`).join(" ")}
                className="edge-line model-edge"
                fill="none"
              />

              {sampleClvTrend.map((point, index) => {
                const x = clvX(index);
                const y = clvY(point.value);
                return (
                  <g key={point.pick}>
                    <circle cx={x} cy={y} r="4" className="edge-node" />
                    <text x={x} y="166" className="edge-axis-label" textAnchor="middle">
                      {point.pick}
                    </text>
                    <text x={x} y={y - 9} className="edge-value-label" textAnchor="middle">
                      +{point.value.toFixed(1)}%
                    </text>
                  </g>
                );
              })}

              <text x="212" y="178" className="chart-axis-title" textAnchor="middle">
                Pick sequence
              </text>
              <text x="16" y="90" className="chart-axis-title" transform="rotate(-90 16 90)" textAnchor="middle">
                CLV %
              </text>
            </svg>
          </div>
        </DashboardChartCard>
      </section>
    </>
  );
}
