#!/usr/bin/env node

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const routeChecks = [
  { path: "/", requires: ["xGenie"] },
  { path: "/dashboard", requires: ["Preview mode", "Sample data only", "Live model outputs coming later"] },
  { path: "/dashboard/edge-board", requires: ["Preview mode", "Sample data only", "Live model outputs coming later"] },
  { path: "/dashboard/matches", requires: ["Preview mode", "Sample data only", "Live model outputs coming later"] },
  {
    path: "/dashboard/matches/inter-vs-milan",
    requires: ["Preview mode", "Sample data only", "Live model outputs coming later"],
  },
  { path: "/dashboard/results", requires: ["Preview mode", "Sample data only", "Live model outputs coming later"] },
  { path: "/dashboard/account", requires: ["Preview mode", "Sample data only", "Live model outputs coming later"] },
  { path: "/waitlist", requires: ["waitlist"] },
  { path: "/internal/waitlist", requires: ["Internal insights"] },
];

async function checkRoute({ path, requires }) {
  const response = await fetch(`${baseUrl}${path}`);
  const html = await response.text();
  const missing = requires.filter((needle) => !html.toLowerCase().includes(needle.toLowerCase()));

  return {
    path,
    status: response.status,
    ok: response.status === 200 && missing.length === 0,
    missing,
  };
}

async function run() {
  const results = await Promise.all(routeChecks.map(checkRoute));
  let failures = 0;

  for (const result of results) {
    if (result.ok) {
      console.log(`PASS ${result.path}`);
      continue;
    }

    failures += 1;
    console.error(`FAIL ${result.path} status=${result.status} missing=${result.missing.join("|") || "none"}`);
  }

  if (failures > 0) {
    console.error(`\nDashboard smoke checks failed: ${failures}`);
    process.exit(1);
  }

  console.log(`\nDashboard smoke checks passed: ${results.length}`);
}

run().catch((error) => {
  console.error("Smoke checks crashed", error);
  process.exit(1);
});
