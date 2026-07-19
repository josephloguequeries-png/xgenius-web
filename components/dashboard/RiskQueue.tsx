type RiskQueueItem = {
  flag: string;
  count: number;
  level: "low" | "medium" | "high";
};

type RiskQueueProps = {
  items: RiskQueueItem[];
};

export default function RiskQueue({ items }: RiskQueueProps) {
  return (
    <section className="workspace-panel" aria-label="Risk queue">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Risk Queue</p>
        <h3>Open model flags</h3>
      </header>

      <ul className="risk-queue-list">
        {items.map((item) => (
          <li key={item.flag}>
            <div>
              <p>{item.flag}</p>
              <span className={`risk-flag risk-${item.level}`}>{item.level}</span>
            </div>
            <strong>{item.count}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
