"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DecisionBadge from "@/components/dashboard/DecisionBadge";
import RiskFlag from "@/components/dashboard/RiskFlag";
import type { DashboardFixture } from "@/lib/sample-model-data";

type EdgeBoardTableProps = {
  rows: DashboardFixture[];
  compact?: boolean;
};

type DecisionFilter = "All" | "Qualified" | "Watch" | "No Bet";
type SortKey = "ev-desc" | "ev-asc" | "model-desc";

function getRiskLevel(flags: string[]) {
  if (flags.length >= 3) return "high" as const;
  if (flags.length === 2) return "medium" as const;
  return "low" as const;
}

function parseSignedPercent(value: string) {
  return Number.parseFloat(value.replace("%", ""));
}

function parsePercent(value: string) {
  return Number.parseFloat(value.replace("%", ""));
}

export default function EdgeBoardTable({ rows, compact = false }: EdgeBoardTableProps) {
  const [decisionFilter, setDecisionFilter] = useState<DecisionFilter>("All");
  const [sortKey, setSortKey] = useState<SortKey>("ev-desc");

  const filteredRows = useMemo(() => {
    const sourceRows = decisionFilter === "All" ? rows : rows.filter((row) => row.decision === decisionFilter);

    return [...sourceRows].sort((a, b) => {
      if (sortKey === "ev-asc") {
        return parseSignedPercent(a.ev) - parseSignedPercent(b.ev);
      }

      if (sortKey === "model-desc") {
        return parsePercent(b.modelProbability) - parsePercent(a.modelProbability);
      }

      return parseSignedPercent(b.ev) - parseSignedPercent(a.ev);
    });
  }, [decisionFilter, rows, sortKey]);

  return (
    <section className="workspace-panel" aria-label="Edge board preview">
      <header className="workspace-panel-header">
        <p className="panel-kicker">Edge Board</p>
        <h3>{compact ? "Edge board preview" : "Full edge board"}</h3>
      </header>

      <div className="table-controls" aria-label="Edge board controls">
        <div className="filter-chip-row" role="tablist" aria-label="Decision filter chips">
          {(["All", "Qualified", "Watch", "No Bet"] as DecisionFilter[]).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={decisionFilter === option}
              className={decisionFilter === option ? "filter-chip active" : "filter-chip"}
              onClick={() => setDecisionFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <label className="table-sort-label">
          Sort
          <select value={sortKey} onChange={(event) => setSortKey(event.target.value as SortKey)}>
            <option value="ev-desc">EV high to low</option>
            <option value="ev-asc">EV low to high</option>
            <option value="model-desc">Model % high to low</option>
          </select>
        </label>
      </div>

      <div className="workspace-table-wrap" role="region" aria-label="Edge board table" tabIndex={0}>
        <table className={compact ? "workspace-table compact" : "workspace-table"}>
          <thead>
            <tr>
              <th>Fixture</th>
              <th>Competition</th>
              <th>Kickoff</th>
              <th>Market</th>
              <th className="number-col">Model %</th>
              <th className="number-col">Fair</th>
              <th className="number-col">Best</th>
              <th className="number-col">EV</th>
              <th className="number-col">Min price</th>
              <th>Confidence</th>
              <th>Risk</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr key={row.id}>
                <td>
                  <Link href={`/dashboard/matches/${row.id}`} className="table-link-inline">
                    {row.fixture}
                  </Link>
                </td>
                <td>{row.competition}</td>
                <td>{row.kickoff}</td>
                <td>{row.market}</td>
                <td className="number-col data-indicator data-cyan">{row.modelProbability}</td>
                <td className="number-col data-indicator data-blue">{row.fairOdds}</td>
                <td className="number-col data-indicator data-yellow">{row.bestPrice}</td>
                <td className={`number-col ${row.ev.startsWith("+") ? "positive" : "negative"}`}>{row.ev}</td>
                <td className="number-col data-indicator data-orange">{row.minPlayablePrice}</td>
                <td>{row.confidence}</td>
                <td>
                  <RiskFlag label={row.riskFlags[0] ?? "Risk check"} level={getRiskLevel(row.riskFlags)} />
                </td>
                <td>
                  <DecisionBadge decision={row.decision} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!filteredRows.length ? <p className="table-note">No fixtures match the current filter.</p> : null}
      <p className="table-hint">On smaller screens, scroll horizontally to inspect all columns.</p>
    </section>
  );
}
