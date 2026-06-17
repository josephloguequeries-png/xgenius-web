const edgeBoard = [
  {
    match: "Man City vs Aston Villa",
    market: "Man City to Win",
    price: "1.82",
    fair: "1.68",
    edge: "+8.3%",
    confidence: "High",
  },
  {
    match: "Arsenal vs Newcastle",
    market: "Over 2.5 Goals",
    price: "1.91",
    fair: "1.76",
    edge: "+7.9%",
    confidence: "Medium",
  },
  {
    match: "Inter vs AC Milan",
    market: "BTTS — Yes",
    price: "1.74",
    fair: "1.63",
    edge: "+6.7%",
    confidence: "Medium",
  },
];

const featureCards = [
  {
    label: "01",
    title: "Fair odds engine",
    text: "Convert model probabilities into a clean price so users can see whether the market is overpaying or underpaying.",
  },
  {
    label: "02",
    title: "EV-first recommendations",
    text: "Every pick is judged by expected value, not vibes, fan bias or bookmaker headline odds.",
  },
  {
    label: "03",
    title: "Risk flags before staking",
    text: "Lineups, rotation, market drift, low-liquidity leagues and fragile bet-builder legs are surfaced clearly.",
  },
  {
    label: "04",
    title: "Transparent results",
    text: "Timestamped picks, closing-line value and performance by market keep the product honest.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "£0",
    text: "For users testing the model.",
    bullets: ["Limited edge board", "Delayed results", "Basic model notes"],
    cta: "Join free",
    featured: false,
  },
  {
    name: "Premium",
    price: "£24.99",
    text: "The core xGenius subscription.",
    bullets: ["Full daily edge board", "Fair odds & EV", "Risk flags", "Results archive"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Pro",
    price: "£59.99",
    text: "For advanced bettors and analysts.",
    bullets: ["CLV dashboard", "Custom filters", "Bankroll tracker", "Early line alerts"],
    cta: "Join waitlist",
    featured: false,
  },
];

function Logo() {
  return (
    <div className="logo" aria-label="xGenius">
      <div className="logo-mark">
        <svg viewBox="0 0 120 86" role="img">
          <defs>
            <linearGradient id="logoMint" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#54ffd5" />
              <stop offset="100%" stopColor="#0ec99a" />
            </linearGradient>
            <linearGradient id="logoBlue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2fe1ff" />
              <stop offset="100%" stopColor="#166bff" />
            </linearGradient>
          </defs>

          <path
            d="M8 14h25l17 20 19-20h24L64 43l31 30H69L50 54 31 73H7l30-30L8 14Z"
            fill="url(#logoMint)"
          />
          <path
            d="M60 12h47v18H77c-11 0-18 6-18 15s7 15 18 15h14v-9H76V37h33v37H76c-24 0-40-12-40-30 0-17 13-32 24-32Z"
            fill="url(#logoBlue)"
          />
          <path
            d="M15 68 40 43l18 12 37-38"
            fill="none"
            stroke="#64ffd8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M89 18h15v15"
            fill="none"
            stroke="#64ffd8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="40" cy="43" r="5" fill="#06101f" stroke="#64ffd8" strokeWidth="4" />
          <circle cx="58" cy="55" r="5" fill="#06101f" stroke="#64ffd8" strokeWidth="4" />
        </svg>
      </div>
      <span>
        <strong>x</strong>Genius
      </span>
    </div>
  );
}

function MiniLogo() {
  return (
    <div className="mini-logo" aria-hidden="true">
      <Logo />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="terminal-card">
      <div className="terminal-top">
        <MiniLogo />
        <div className="terminal-tabs">
          <span className="active">Edge Board</span>
          <span>Matches</span>
          <span>Model</span>
          <span>Results</span>
        </div>
        <div className="user-dot">JG</div>
      </div>

      <div className="terminal-grid">
        <div className="panel edge-panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">Live model slate</p>
              <h3>Today&apos;s strongest edges</h3>
            </div>
            <span className="live-pill">Live</span>
          </div>

          <div className="edge-list">
            {edgeBoard.map((row) => (
              <article className="edge-item" key={row.match}>
                <div>
                  <h4>{row.match}</h4>
                  <p>{row.market}</p>
                </div>
                <div className="edge-price">
                  <span>{row.price}</span>
                  <strong>{row.edge}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="panel probability-panel">
          <p className="eyebrow">Probability split</p>
          <h3>Man City vs Aston Villa</h3>
          <div className="prob-bars">
            <div>
              <span>Home</span>
              <i style={{ width: "58%" }} />
              <strong>58%</strong>
            </div>
            <div>
              <span>Draw</span>
              <i style={{ width: "23%" }} />
              <strong>23%</strong>
            </div>
            <div>
              <span>Away</span>
              <i style={{ width: "19%" }} />
              <strong>19%</strong>
            </div>
          </div>
        </div>

        <div className="panel chart-panel">
          <div className="panel-head">
            <div>
              <p className="eyebrow">xG trend</p>
              <h3>Last 10 matches</h3>
            </div>
            <span className="muted-mini">xG For / Against</span>
          </div>
          <svg viewBox="0 0 420 190" className="line-chart">
            <path d="M20 160H400M20 120H400M20 80H400M20 40H400" stroke="rgba(255,255,255,0.08)" />
            <path
              d="M26 118 C58 140,82 62,114 86 S172 148,210 90 S282 32,314 72 S360 138,398 52"
              fill="none"
              stroke="#54ffd5"
              strokeWidth="5"
            />
            <path
              d="M26 142 C70 94,94 152,134 120 S198 52,238 104 S306 150,336 118 S370 70,398 95"
              fill="none"
              stroke="#166bff"
              strokeWidth="5"
            />
            {[26, 114, 210, 314, 398].map((x, i) => (
              <circle key={x} cx={x} cy={[118, 86, 90, 72, 52][i]} r="6" fill="#54ffd5" />
            ))}
          </svg>
        </div>

        <div className="panel pick-panel">
          <p className="eyebrow">Recommended pick</p>
          <h3>Man City to Win</h3>
          <div className="pick-stats">
            <div>
              <span>Market</span>
              <strong>1.82</strong>
            </div>
            <div>
              <span>Fair</span>
              <strong>1.68</strong>
            </div>
            <div>
              <span>EV</span>
              <strong>+8.3%</strong>
            </div>
          </div>
          <div className="confidence">
            <span>Model confidence</span>
            <div>
              <i />
            </div>
            <strong>78%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({ number }: { number: string }) {
  return (
    <div className="feature-number">
      <span>{number}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="background-grid" />

      <header className="site-nav">
        <Logo />
        <nav>
          <a href="#features">Features</a>
          <a href="#model">Model</a>
          <a href="#pricing">Pricing</a>
          <a href="#results">Results</a>
        </nav>
        <a href="#pricing" className="nav-button">
          Join beta
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="status-pill">
            <span />
            Model-led football betting intelligence
          </div>

          <h1>
            Price the game.
            <br />
            <em>Don&apos;t chase it.</em>
          </h1>

          <p>
            xGenius turns football data into market probabilities, fair odds, EV signals and risk-aware recommendations — built for bettors who care about price, process and proof.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#pricing">
              Start free trial
            </a>
            <a className="secondary-action" href="#model">
              View sample model
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>+8.3%</strong>
              <span>Sample EV edge</span>
            </div>
            <div>
              <strong>1.68</strong>
              <span>Model fair price</span>
            </div>
            <div>
              <strong>CLV</strong>
              <span>Tracked post-pick</span>
            </div>
          </div>
        </div>

        <DashboardMockup />
      </section>

      <section className="trust-strip" aria-label="xGenius principles">
        <span>Fair odds</span>
        <span>EV first</span>
        <span>No-bet discipline</span>
        <span>Risk flags</span>
        <span>Transparent results</span>
      </section>

      <section id="features" className="content-section">
        <div className="section-head">
          <p className="section-label">What the product does</p>
          <h2>A football model interface that explains the price, not just the pick.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <FeatureIcon number={card.label} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="model" className="content-section model-section">
        <div className="section-head">
          <p className="section-label">Sample model output</p>
          <h2>Every recommendation should be auditable before kick-off.</h2>
        </div>

        <div className="model-output">
          <div className="model-match">
            <span>Premier League · Today 17:30</span>
            <h3>Man City vs Aston Villa</h3>
            <p>
              Model view: City project above baseline attacking output, Villa carry transition threat, but the 1X2 price still clears the minimum value threshold.
            </p>
          </div>

          <div className="model-table">
            <div className="table-row head">
              <span>Market</span>
              <span>Market</span>
              <span>Fair</span>
              <span>EV</span>
            </div>
            {[
              ["Man City Win", "1.82", "1.68", "+8.3%"],
              ["Over 2.5", "1.91", "1.79", "+6.7%"],
              ["BTTS Yes", "1.74", "1.66", "+4.8%"],
            ].map((row) => (
              <div className="table-row" key={row[0]}>
                <span>{row[0]}</span>
                <span>{row[1]}</span>
                <span>{row[2]}</span>
                <strong>{row[3]}</strong>
              </div>
            ))}
          </div>

          <div className="risk-box">
            <h4>Risk flags</h4>
            <div>
              <span>Lineups unconfirmed</span>
              <span>Price valid ≥ 1.78</span>
              <span>0.5u max stake</span>
              <span>No accumulator boost</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="content-section">
        <div className="section-head">
          <p className="section-label">Pricing</p>
          <h2>Start lean. Upgrade when the model earns your trust.</h2>
        </div>

        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article className={plan.featured ? "pricing-card featured" : "pricing-card"} key={plan.name}>
              {plan.featured && <span className="plan-badge">Most useful</span>}
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
              <div className="plan-price">
                {plan.price}
                <span>/mo</span>
              </div>
              <ul>
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href="#">{plan.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section id="results" className="results-band">
        <div>
          <p className="section-label">Responsible positioning</p>
          <h2>Built to show restraint.</h2>
          <p>
            xGenius should recommend fewer, better-qualified positions — and clearly show when the correct answer is no bet.
          </p>
        </div>
        <div className="results-stats">
          <div>
            <strong>No deleted losses</strong>
            <span>Timestamped archive</span>
          </div>
          <div>
            <strong>CLV tracked</strong>
            <span>Process over variance</span>
          </div>
          <div>
            <strong>18+</strong>
            <span>Informational only</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <Logo />
        <p>
          xGenius is an informational analytics product. No prediction is guaranteed. Betting involves financial risk. Only bet what you can afford to lose.
        </p>
        <span>© 2026 xGenius. All rights reserved.</span>
      </footer>
    </main>
  );
}
