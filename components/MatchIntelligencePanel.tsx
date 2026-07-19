import type { WorkspaceFixture } from "@/lib/sample-model-data";

type MatchIntelligencePanelProps = {
  selected: WorkspaceFixture;
};

const edgeCurvePoints = [
  { label: "Open", value: 1.8 },
  { label: "Drift", value: 3.2 },
  { label: "Model", value: 5.6 },
  { label: "Risk", value: 4.1 },
  { label: "Final", value: 8.5 },
];

const marketDriftPoints = [2.2, 3.0, 4.4, 3.7, 4.6];

const yTicks = [0, 2, 4, 6, 8, 10];

function yToPlot(value: number) {
  const top = 28;
  const bottom = 176;
  const range = bottom - top;
  return bottom - (value / 10) * range;
}

function xToPlot(index: number) {
  return 78 + index * 76;
}

export default function MatchIntelligencePanel({ selected }: MatchIntelligencePanelProps) {
  return (
    <section className="workspace-panel workspace-panel-main" aria-label="Selected match intelligence panel">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Selected Match Intelligence</p>
        <h3>{selected.fixture}</h3>
      </header>

      <dl className="intelligence-grid">
        <div>
          <dt>Market</dt>
          <dd>{selected.market}</dd>
        </div>
        <div>
          <dt>Model probability</dt>
          <dd className="data-indicator data-cyan">{selected.modelProbability}</dd>
        </div>
        <div>
          <dt>Fair odds</dt>
          <dd className="data-indicator data-blue">{selected.fairOdds}</dd>
        </div>
        <div>
          <dt>Best price</dt>
          <dd className="data-indicator data-yellow">{selected.bestPrice}</dd>
        </div>
        <div>
          <dt>EV</dt>
          <dd className="positive">{selected.ev}</dd>
        </div>
        <div>
          <dt>Minimum playable price</dt>
          <dd className="data-indicator data-orange">{selected.minPlayablePrice}</dd>
        </div>
        <div>
          <dt>Confidence</dt>
          <dd>{selected.confidence}</dd>
        </div>
        <div>
          <dt>Decision</dt>
          <dd>
            <span className={`decision-badge ${selected.decision.toLowerCase().replace(" ", "-")}`}>{selected.decision}</span>
          </dd>
        </div>
      </dl>

      <div className="mini-chart" aria-label="Model edge curve preview">
        <div className="chart-head">
          <p>Model Edge Curve</p>
          <span>Sample data</span>
        </div>
        <p className="chart-subtitle">Expected value progression across signal stages.</p>
        <ul className="chart-legend" aria-label="Model edge legend">
          <li>
            <span className="chart-legend-swatch model-edge" aria-hidden="true" />
            Model edge
          </li>
          <li>
            <span className="chart-legend-swatch threshold" aria-hidden="true" />
            Qualification threshold
          </li>
          <li>
            <span className="chart-legend-swatch market-drift" aria-hidden="true" />
            Market drift
          </li>
        </ul>
        <svg viewBox="0 0 440 228" role="img" aria-label="Model edge curve with x and y axes">
          {yTicks.map((tick) => {
            const y = yToPlot(tick);
            return (
              <g key={tick}>
                <line x1="64" y1={y} x2="390" y2={y} className="edge-grid-line" />
                <line x1="64" y1={y} x2="69" y2={y} className="chart-tick" />
                <text x="54" y={y + 4} className="edge-axis-label" textAnchor="end">
                  {tick === 0 ? "0%" : `+${tick}%`}
                </text>
              </g>
            );
          })}

          <line x1="64" y1="28" x2="64" y2="176" className="chart-axis" />
          <line x1="64" y1="176" x2="390" y2="176" className="chart-axis" />

          <line x1="64" y1={yToPlot(4)} x2="390" y2={yToPlot(4)} className="chart-threshold-line" />
          <text x="392" y={yToPlot(4) - 4} className="chart-threshold-label" textAnchor="end">
            Minimum qualification threshold
          </text>

          <polyline
            points={edgeCurvePoints.map((point, index) => `${xToPlot(index)},${yToPlot(point.value)}`).join(" ")}
            className="edge-line model-edge"
            fill="none"
          />

          <polyline
            points={marketDriftPoints.map((value, index) => `${xToPlot(index)},${yToPlot(value)}`).join(" ")}
            className="edge-line market-drift"
            fill="none"
          />

          {edgeCurvePoints.map((point, index) => {
            const x = xToPlot(index);
            const y = yToPlot(point.value);
            return (
              <g key={point.label}>
                <line x1={x} y1="176" x2={x} y2="181" className="chart-tick" />
                <circle cx={x} cy={y} r="4" className="edge-node" />
                <text x={x} y="196" className="edge-axis-label" textAnchor="middle">
                  {point.label}
                </text>
                <text x={x} y={y - 9} className="edge-value-label" textAnchor="middle">
                  +{point.value}%
                </text>
              </g>
            );
          })}

          {marketDriftPoints.map((value, index) => {
            const x = xToPlot(index);
            const y = yToPlot(value);
            return <circle key={`drift-${edgeCurvePoints[index]?.label ?? index}`} cx={x} cy={y} r="2.8" className="edge-node market-drift" />;
          })}

          <text x="228" y="216" className="chart-axis-title" textAnchor="middle">
            Signal stage
          </text>
          <text x="18" y="104" className="chart-axis-title" transform="rotate(-90 18 104)" textAnchor="middle">
            Expected value %
          </text>
        </svg>
      </div>
    </section>
  );
}
