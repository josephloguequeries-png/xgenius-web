import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";

type WaitlistSummaryRow = {
  user_type: string | null;
  main_interest: string | null;
  pricing_interest: string | null;
  preferred_markets: string[] | null;
};

type LatestSignupRow = {
  email: string;
  user_type: string | null;
  main_interest: string | null;
  pricing_interest: string | null;
  created_at: string;
};

type AnalyticsEventRow = {
  event_name: string;
  page: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type InternalWaitlistPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function toSafeKey(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

function countBy(items: Array<string | null | undefined>) {
  const counts: Record<string, number> = {};

  items.forEach((item) => {
    const key = (item ?? "Unspecified").trim() || "Unspecified";
    counts[key] = (counts[key] ?? 0) + 1;
  });

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function countMarkets(rows: WaitlistSummaryRow[]) {
  const counts: Record<string, number> = {};

  rows.forEach((row) => {
    (row.preferred_markets ?? []).forEach((market) => {
      const key = market.trim();

      if (!key) {
        return;
      }

      counts[key] = (counts[key] ?? 0) + 1;
    });
  });

  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatMetadata(metadata: Record<string, unknown> | null) {
  if (!metadata) {
    return "{}";
  }

  try {
    const json = JSON.stringify(metadata);
    return json.length > 120 ? `${json.slice(0, 117)}...` : json;
  } catch {
    return "{}";
  }
}

export const dynamic = "force-dynamic";

export default async function InternalWaitlistPage({ searchParams }: InternalWaitlistPageProps) {
  const params = await searchParams;
  const adminAccessKey = process.env.ADMIN_ACCESS_KEY;
  const providedKey = toSafeKey(params.key);

  if (!adminAccessKey) {
    return (
      <main className="marketing-main">
        <div className="background-grid" />
        <section className="marketing-hero">
          <p className="section-label">Internal insights</p>
          <h1>Admin access is not configured.</h1>
          <p>Set ADMIN_ACCESS_KEY in the server environment to enable this page.</p>
        </section>
      </main>
    );
  }

  if (providedKey !== adminAccessKey) {
    return (
      <main className="marketing-main">
        <div className="background-grid" />
        <section className="marketing-hero">
          <p className="section-label">Internal insights</p>
          <h1>Restricted access</h1>
          <p>Provide the admin key to view waitlist and analytics data.</p>
        </section>

        <section className="marketing-section">
          <article className="content-card internal-auth-card">
            <form method="GET" className="internal-auth-form">
              <label htmlFor="key">Admin access key</label>
              <input id="key" name="key" type="password" autoComplete="off" required />
              <button type="submit">Open insights</button>
            </form>
            <p className="table-hint">TODO: Replace this temporary key gate with proper authenticated admin access.</p>
            <p className="table-hint">
              Return to the public site: <Link href="/">Home</Link>
            </p>
          </article>
        </section>
      </main>
    );
  }

  const supabase = getSupabaseServerClient();

  const [totalResult, summaryResult, latestSignupsResult, latestEventsResult] = await Promise.all([
    supabase.from("waitlist").select("id", { count: "exact", head: true }),
    supabase.from("waitlist").select("user_type, main_interest, pricing_interest, preferred_markets"),
    supabase
      .from("waitlist")
      .select("email, user_type, main_interest, pricing_interest, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("analytics_events")
      .select("event_name, page, metadata, created_at")
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const waitlistRows = (summaryResult.data ?? []) as WaitlistSummaryRow[];
  const latestSignups = (latestSignupsResult.data ?? []) as LatestSignupRow[];
  const latestEvents = (latestEventsResult.data ?? []) as AnalyticsEventRow[];

  const pricingCounts = countBy(waitlistRows.map((row) => row.pricing_interest));
  const userTypeCounts = countBy(waitlistRows.map((row) => row.user_type));
  const mainInterestCounts = countBy(waitlistRows.map((row) => row.main_interest));
  const marketCounts = countMarkets(waitlistRows);

  return (
    <main className="marketing-main">
      <div className="background-grid" />

      <section className="marketing-hero">
        <p className="section-label">Internal insights</p>
        <h1>Waitlist and analytics overview</h1>
        <p>Operational snapshot for demand capture activity and key interaction signals.</p>
      </section>

      <section className="marketing-section">
        <div className="metric-grid">
          <article className="metric-card">
            <p>Total waitlist signups</p>
            <strong>{totalResult.count ?? 0}</strong>
            <span>All recorded rows</span>
          </article>
          <article className="metric-card">
            <p>Latest signups loaded</p>
            <strong>{latestSignups.length}</strong>
            <span>Most recent 10 rows</span>
          </article>
          <article className="metric-card">
            <p>Analytics events loaded</p>
            <strong>{latestEvents.length}</strong>
            <span>Most recent 20 rows</span>
          </article>
        </div>
      </section>

      <section className="marketing-section">
        <div className="content-card-grid">
          <article className="content-card internal-summary-card">
            <h3>Count by pricing interest</h3>
            <ul className="internal-count-list">
              {pricingCounts.map(([label, count]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{count}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card internal-summary-card">
            <h3>Count by user type</h3>
            <ul className="internal-count-list">
              {userTypeCounts.map(([label, count]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{count}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card internal-summary-card">
            <h3>Count by main interest</h3>
            <ul className="internal-count-list">
              {mainInterestCounts.map(([label, count]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{count}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card internal-summary-card">
            <h3>Preferred markets summary</h3>
            <ul className="internal-count-list">
              {marketCounts.map(([label, count]) => (
                <li key={label}>
                  <span>{label}</span>
                  <strong>{count}</strong>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="marketing-section">
        <h2 className="internal-section-heading">Latest 10 signups</h2>
        <div className="market-table-wrap">
          <table className="market-table internal-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>User type</th>
                <th>Main interest</th>
                <th>Pricing interest</th>
                <th className="number-col">Created</th>
              </tr>
            </thead>
            <tbody>
              {latestSignups.map((row) => (
                <tr key={`${row.email}-${row.created_at}`}>
                  <td>{row.email}</td>
                  <td>{row.user_type ?? "-"}</td>
                  <td>{row.main_interest ?? "-"}</td>
                  <td>{row.pricing_interest ?? "-"}</td>
                  <td className="number-col">{formatDate(row.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="marketing-section">
        <h2 className="internal-section-heading">Latest 20 analytics events</h2>
        <div className="market-table-wrap">
          <table className="market-table internal-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Page</th>
                <th>Metadata</th>
                <th className="number-col">Created</th>
              </tr>
            </thead>
            <tbody>
              {latestEvents.map((row, index) => (
                <tr key={`${row.event_name}-${row.created_at}-${index}`}>
                  <td>{row.event_name}</td>
                  <td>{row.page ?? "-"}</td>
                  <td className="internal-metadata">{formatMetadata(row.metadata)}</td>
                  <td className="number-col">{formatDate(row.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
