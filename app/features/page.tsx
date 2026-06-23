import MarketingFooter from "@/components/marketing-footer";
import MarketingNav from "@/components/marketing-nav";

const featureDetails = [
  {
    title: "Fair odds engine",
    text: "xGenie converts model probabilities into fair odds so users can compare market pricing against a disciplined baseline.",
  },
  {
    title: "EV-first decisioning",
    text: "Recommendations are ranked by expected value with threshold rules so short-term noise does not override process quality.",
  },
  {
    title: "Risk flags before stake",
    text: "Lineup uncertainty, rotation risk, market drift, and liquidity constraints are surfaced before any position is considered.",
  },
  {
    title: "CLV monitoring",
    text: "Closing-line movement is tracked to measure whether the process is beating market consensus over time.",
  },
  {
    title: "Transparent tracking",
    text: "Picks, timing, and outcomes are logged with consistent methodology so results can be audited by market and by period.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="marketing-main">
      <div className="background-grid" />
      <MarketingNav />

      <section className="marketing-hero">
        <p className="section-label">Product capabilities</p>
        <h1>Features built for disciplined value betting analysis.</h1>
        <p>
          xGenie is designed for users who want measurable process quality, not headline picks. Every module supports clear
          price reasoning and risk-aware execution.
        </p>
      </section>

      <section className="marketing-section">
        <div className="content-card-grid">
          {featureDetails.map((item) => (
            <article key={item.title} className="content-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
