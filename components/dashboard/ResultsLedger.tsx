type LedgerRow = {
  date: string;
  fixture: string;
  market: string;
  price: string;
  closingPrice: string;
  clv: string;
  decision: "Qualified" | "Watch" | "No Bet";
  result: string;
  notes: string;
};

type ResultsLedgerProps = {
  rows: LedgerRow[];
};

export default function ResultsLedger({ rows }: ResultsLedgerProps) {
  return (
    <section className="workspace-panel" aria-label="Results ledger">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Results ledger</p>
        <h3>Sample tracked outcomes</h3>
      </header>

      <div className="workspace-table-wrap" role="region" aria-label="Results ledger table" tabIndex={0}>
        <table className="workspace-table compact">
          <thead>
            <tr>
              <th>Date</th>
              <th>Fixture</th>
              <th>Market</th>
              <th className="number-col">Price</th>
              <th className="number-col">Closing</th>
              <th className="number-col">CLV</th>
              <th>Decision</th>
              <th>Result</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.date}-${row.fixture}-${row.market}`}>
                <td>{row.date}</td>
                <td>{row.fixture}</td>
                <td>{row.market}</td>
                <td className="number-col">{row.price}</td>
                <td className="number-col">{row.closingPrice}</td>
                <td className={`number-col ${row.clv.startsWith("+") ? "positive" : row.clv.startsWith("-") ? "negative" : ""}`}>{row.clv}</td>
                <td>{row.decision}</td>
                <td>{row.result}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">Sample results only · No live performance tracking.</p>
    </section>
  );
}
