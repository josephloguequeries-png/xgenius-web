export type WorkspaceFixture = {
  fixture: string;
  competition: string;
  kickoff: string;
  market: string;
  modelProbability: string;
  fairOdds: string;
  bestPrice: string;
  ev: string;
  minPlayablePrice: string;
  confidence: string;
  riskFlags: string[];
  decision: "Qualified" | "Watch" | "No Bet";
  explanation: string;
};

export const workspaceFixtures: WorkspaceFixture[] = [
  {
    fixture: "Man City vs Aston Villa",
    competition: "Premier League",
    kickoff: "Sat 17:30",
    market: "Home Win",
    modelProbability: "58.4%",
    fairOdds: "1.71",
    bestPrice: "1.82",
    ev: "+6.4%",
    minPlayablePrice: "1.78",
    confidence: "Medium",
    riskFlags: ["Lineups pending", "Late market drift"],
    decision: "Watch",
    explanation: "Price is above fair but lineup uncertainty keeps this in watch mode for now.",
  },
  {
    fixture: "Arsenal vs Newcastle",
    competition: "Premier League",
    kickoff: "Sun 14:00",
    market: "Over 2.5",
    modelProbability: "52.1%",
    fairOdds: "1.92",
    bestPrice: "1.83",
    ev: "-4.7%",
    minPlayablePrice: "1.89",
    confidence: "Medium",
    riskFlags: ["Price below threshold"],
    decision: "No Bet",
    explanation: "Current price is short relative to model fair odds, so this remains a no-bet.",
  },
  {
    fixture: "Inter vs Milan",
    competition: "Serie A",
    kickoff: "Sun 19:45",
    market: "BTTS Yes",
    modelProbability: "56.8%",
    fairOdds: "1.76",
    bestPrice: "1.91",
    ev: "+8.5%",
    minPlayablePrice: "1.84",
    confidence: "Medium-high",
    riskFlags: ["Derby volatility", "Lineups pending", "Market liquidity acceptable"],
    decision: "Qualified",
    explanation:
      "The model prices BTTS Yes at 56.8%, implying fair odds of 1.76. Current best price is 1.91, clearing the minimum playable threshold after derby-volatility adjustment.",
  },
  {
    fixture: "Dortmund vs Leverkusen",
    competition: "Bundesliga",
    kickoff: "Sat 15:30",
    market: "Over 2.5",
    modelProbability: "55.6%",
    fairOdds: "1.80",
    bestPrice: "1.86",
    ev: "+3.3%",
    minPlayablePrice: "1.84",
    confidence: "Medium",
    riskFlags: ["High tempo variance"],
    decision: "Watch",
    explanation: "Edge is positive but sits close to threshold after variance controls.",
  },
];

export const selectedWorkspaceFixture = workspaceFixtures[2];

export const marketCoverageItems = [
  { market: "1X2", status: "Core" },
  { market: "Over/Under 2.5", status: "Core" },
  { market: "BTTS", status: "Core" },
  { market: "Draw No Bet", status: "Core" },
  { market: "Double Chance", status: "Core" },
  { market: "Asian Handicap", status: "Later" },
];

export const workflowSteps = [
  {
    title: "Fixture data",
    text: "Competition context, schedule load, and baseline team inputs.",
    value: "480+ weekly fixtures",
  },
  {
    title: "Model probability",
    text: "Outcome likelihood estimated with calibrated football model assumptions.",
    value: "BTTS 56.8%",
  },
  {
    title: "Fair odds",
    text: "Probability translated into fair market pricing for execution decisions.",
    value: "Fair 1.76",
  },
  {
    title: "Market comparison",
    text: "Best available price compared against fair line and minimum threshold.",
    value: "Best 1.91",
  },
  {
    title: "Risk filter",
    text: "Lineups, liquidity, and volatility flags are applied before status assignment.",
    value: "3 active flags",
  },
  {
    title: "Decision",
    text: "Qualified, Watch, or No Bet with explanation and preview stake guidance.",
    value: "Qualified",
  },
];

export const betHistoryPreviewRows = [
  {
    date: "2026-06-11",
    fixture: "Inter vs Roma",
    market: "BTTS Yes",
    priceTaken: "1.84",
    closingPrice: "1.77",
    clv: "+3.8%",
    result: "Win",
    notes: "Edge held into close",
  },
  {
    date: "2026-06-12",
    fixture: "Liverpool vs Brighton",
    market: "Over 2.5",
    priceTaken: "1.93",
    closingPrice: "1.95",
    clv: "-1.0%",
    result: "Loss",
    notes: "No edge at close",
  },
  {
    date: "2026-06-13",
    fixture: "PSG vs Lille",
    market: "Home Win",
    priceTaken: "1.62",
    closingPrice: "1.57",
    clv: "+3.1%",
    result: "Win",
    notes: "Qualified via price drift",
  },
  {
    date: "2026-06-14",
    fixture: "Milan vs Lazio",
    market: "Draw No Bet",
    priceTaken: "1.88",
    closingPrice: "1.88",
    clv: "0.0%",
    result: "Push",
    notes: "Flat close",
  },
];

export const simulationStats = [
  { label: "Bankroll drawdown preview", value: "-9.2%" },
  { label: "Simulated variance path", value: "14-week sample" },
  { label: "No-bet rate", value: "41%" },
  { label: "Qualified edge distribution", value: "+1.2% to +9.4%" },
  { label: "Risk exposure", value: "Medium" },
];
