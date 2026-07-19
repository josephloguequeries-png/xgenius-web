import DashboardChartCard from "@/components/dashboard/DashboardChartCard";

const stages = ["Open", "Drift", "Model", "Risk", "Final"];
const edgePoints = [1.8, 3.2, 5.6, 4.1, 8.5];
const driftPoints = [2.1, 3.0, 4.5, 3.9, 4.7];
const yTicks = [0, 2, 4, 6, 8, 10];

function yToPlot(value: number) {
  const top = 28;
  const bottom = 176;
  return bottom - (value / 10) * (bottom - top);
}

function xToPlot(index: number) {
  return 78 + index * 76;
}

export default function ModelSignalChart() {
  return (
    <DashboardChartCard
      title="Model Edge Signal"
      subtitle="Expected value progression across signal stages."
      legend={
        <ul className="chart-legend" aria-label="Model signal legend">
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
      }
      footer="Preview mode · Sample model data only"
    >
      <svg viewBox="0 0 440 228" role="img" aria-label="Model edge signal chart with x and y axes">
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
          +4.0% Minimum qualification threshold
        </text>

        <polyline points={edgePoints.map((point, index) => `${xToPlot(index)},${yToPlot(point)}`).join(" ")} className="edge-line model-edge" fill="none" />
        <polyline points={driftPoints.map((point, index) => `${xToPlot(index)},${yToPlot(point)}`).join(" ")} className="edge-line market-drift" fill="none" />

        {edgePoints.map((point, index) => {
          const x = xToPlot(index);
          const y = yToPlot(point);
          return (
            <g key={stages[index]}>
              <line x1={x} y1="176" x2={x} y2="181" className="chart-tick" />
              <circle cx={x} cy={y} r="4" className="edge-node" />
              <text x={x} y="196" className="edge-axis-label" textAnchor="middle">
                {stages[index]}
              </text>
              <text x={x} y={y - 9} className="edge-value-label" textAnchor="middle">
                +{point}%
              </text>
            </g>
          );
        })}

        <text x="228" y="216" className="chart-axis-title" textAnchor="middle">
          Signal stage
        </text>
        <text x="18" y="104" className="chart-axis-title" transform="rotate(-90 18 104)" textAnchor="middle">
          Expected value %
        </text>
      </svg>
    </DashboardChartCard>
  );
}
