import PageShell from "@/components/page-shell";
import SectionHeader from "@/components/section-header";

const safeguards = [
  "18+ only: xGenie is intended for adult users.",
  "Informational analytics only: model outputs are not guarantees or certain outcomes.",
  "No guaranteed profit: football markets remain uncertain and variance can be substantial.",
  "Use strict limits: only stake amounts you can afford to lose.",
  "If betting is causing harm, stop immediately and seek local support services.",
];

export default function ResponsibleGamblingPage() {
  return (
    <PageShell>
      <section className="marketing-hero">
        <p className="section-label">Responsible gambling</p>
        <h1>Risk management applies to betting behavior as well as market decisions.</h1>
        <p>
          xGenie is designed to support disciplined analysis. It should never be used as a promise of return or a substitute
          for personal financial limits.
        </p>
      </section>

      <section className="marketing-section">
        <SectionHeader
          eyebrow="Policy"
          title="Core safeguards"
          description="These principles apply across all plans and all model outputs."
        />

        <article className="content-card policy-card">
          <ul>
            {safeguards.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>
      </section>
    </PageShell>
  );
}
