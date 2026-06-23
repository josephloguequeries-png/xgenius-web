import RiskFlag from "@/components/risk-flag";

type RiskLevel = "low" | "medium" | "high";

type MarketRow = {
  fixture: string;
  market: string;
  modelProbability: string;
  fairOdds: string;
  bestPrice: string;
  ev: string;
  riskLabel: string;
  riskLevel: RiskLevel;
  decision: "Bet" | "No Bet" | "Watch" | "Qualified";
};

type MarketTableProps = {
  rows: MarketRow[];
  caption?: string;
};

export default function MarketTable({ rows, caption = "Example market data only. Not live tracking." }: MarketTableProps) {
  return (
    <div className="table-block">
      <p className="table-note">{caption}</p>
      <div className="market-table-wrap" role="region" aria-label="Market qualification table" tabIndex={0}>
        <table className="market-table">
          <caption className="sr-only">Market table with fixture pricing, risk, and decision columns</caption>
          <thead>
            <tr>
              <th>Fixture</th>
              <th>Market</th>
              <th className="number-col">Model %</th>
              <th className="number-col">Fair</th>
              <th className="number-col">Best</th>
              <th className="number-col">EV</th>
              <th>Risk</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const positiveEv = row.ev.startsWith("+");

              return (
                <tr key={`${row.fixture}-${row.market}`}>
                  <td>{row.fixture}</td>
                  <td>{row.market}</td>
                  <td className="number-col">{row.modelProbability}</td>
                  <td className="number-col">{row.fairOdds}</td>
                  <td className="number-col">{row.bestPrice}</td>
                  <td className={`number-col ${positiveEv ? "positive" : "negative"}`}>{row.ev}</td>
                  <td>
                    <RiskFlag level={row.riskLevel} label={row.riskLabel} />
                  </td>
                  <td>
                    <span className={`decision-badge ${row.decision.toLowerCase().replace(" ", "-")}`}>{row.decision}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="table-hint">On mobile, swipe horizontally to review all columns.</p>
    </div>
  );
}
