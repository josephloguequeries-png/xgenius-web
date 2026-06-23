import { simulationStats } from "@/lib/sample-model-data";

const variancePoints = [
  { week: "W1", value: 101.8 },
  { week: "W2", value: 104.1 },
  { week: "W3", value: 99.4 },
  { week: "W4", value: 102.3 },
  { week: "W5", value: 106.5 },
  { week: "W6", value: 103.7 },
  { week: "W7", value: 98.8 },
  { week: "W8", value: 101.2 },
  { week: "W9", value: 102.9 },
];

const bankrollTicks = [96, 98, 100, 102, 104, 106, 108];

function yToPlot(value: number) {
  const top = 24;
  const bottom = 174;
  const min = 96;
  const max = 108;
  return bottom - ((value - min) / (max - min)) * (bottom - top);
}

function xToPlot(index: number) {
  return 74 + index * 38;
}

export default function SimulationPreview() {
  return (
    <section className="workspace-panel" aria-label="Simulation preview">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Simulation preview</p>
        <h3>Stress-test the process before scaling it</h3>
      </header>

      <div className="simulation-grid">
        {simulationStats.map((stat) => (
          <article key={stat.label} className="simulation-stat-card">
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </div>

      <div className="variance-track" aria-label="Variance path preview">
        <div className="chart-head">
          <p>Variance Path Preview</p>
          <span>Sample data</span>
        </div>
        <p className="chart-subtitle">Simulated bankroll index path across nine sample weeks.</p>
        <ul className="chart-legend" aria-label="Variance chart legend">
          <li>
            <span className="chart-legend-swatch market-drift" aria-hidden="true" />
            Market drift context
          </li>
          <li>
            <span className="chart-legend-swatch variance" aria-hidden="true" />
            Variance path
          </li>
        </ul>
        <svg viewBox="0 0 440 222" role="img" aria-label="Simulated variance path with x and y axes">
          {bankrollTicks.map((tick) => {
            const y = yToPlot(tick);
            return (
              <g key={tick}>
                <line x1="62" y1={y} x2="392" y2={y} className="edge-grid-line" />
                <line x1="62" y1={y} x2="67" y2={y} className="chart-tick" />
                <text x="52" y={y + 4} className="edge-axis-label" textAnchor="end">
                  {tick}
                </text>
              </g>
            );
          })}

          <line x1="62" y1="24" x2="62" y2="174" className="chart-axis" />
          <line x1="62" y1="174" x2="392" y2="174" className="chart-axis" />

          <polyline
            points={variancePoints.map((point, index) => `${xToPlot(index)},${yToPlot(point.value)}`).join(" ")}
            className="edge-line variance-line"
            fill="none"
          />

          {variancePoints.map((point, index) => {
            const x = xToPlot(index);
            const y = yToPlot(point.value);
            return (
              <g key={point.week}>
                <line x1={x} y1="174" x2={x} y2="179" className="chart-tick" />
                <circle cx={x} cy={y} r="3.5" className="edge-node" />
                <text x={x} y="194" className="edge-axis-label" textAnchor="middle">
                  {point.week}
                </text>
                {index % 2 === 0 ? (
                  <text x={x} y={y - 8} className="edge-value-label" textAnchor="middle">
                    {point.value.toFixed(1)}
                  </text>
                ) : null}
              </g>
            );
          })}

          <text x="225" y="212" className="chart-axis-title" textAnchor="middle">
            Week
          </text>
          <text x="18" y="99" className="chart-axis-title" transform="rotate(-90 18 99)" textAnchor="middle">
            Bankroll index
          </text>
        </svg>
      </div>
    </section>
  );
}
