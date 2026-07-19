import { betHistoryPreviewRows } from "@/lib/sample-model-data";

export default function BetHistoryPreview() {
  return (
    <section className="workspace-panel" aria-label="Bet history preview">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Future feature preview</p>
        <h3>Your betting record, in market context</h3>
      </header>

      <div className="workspace-table-wrap">
        <table className="workspace-table compact">
          <thead>
            <tr>
              <th>Date</th>
              <th>Fixture</th>
              <th>Market</th>
              <th>Price taken</th>
              <th>Closing price</th>
              <th>CLV</th>
              <th>Result</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {betHistoryPreviewRows.map((row) => (
              <tr key={`${row.date}-${row.fixture}`}>
                <td>{row.date}</td>
                <td>{row.fixture}</td>
                <td>{row.market}</td>
                <td>{row.priceTaken}</td>
                <td>{row.closingPrice}</td>
                <td className={row.clv.startsWith("+") ? "positive" : row.clv.startsWith("-") ? "negative" : undefined}>{row.clv}</td>
                <td>{row.result}</td>
                <td>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
