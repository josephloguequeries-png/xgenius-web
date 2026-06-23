import { marketCoverageItems } from "@/lib/sample-model-data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function MarketCoverageGrid() {
  return (
    <div className="market-coverage-grid" aria-label="Market coverage">
      {marketCoverageItems.map((item, index) => (
        <RevealOnScroll key={item.market} delay={index * 80}>
          <article className="market-coverage-card">
            <h3>{item.market}</h3>
            <p>{item.status === "Core" ? "Current focus market" : "Planned expansion"}</p>
            <span className={item.status === "Core" ? "status-pill core" : "status-pill later"}>{item.status}</span>
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
