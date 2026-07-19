"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoWordmark } from "@/components/Logo";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/edge-board", label: "Edge Board" },
  { href: "/dashboard/matches", label: "Matches" },
  { href: "/dashboard/results", label: "Results" },
  { href: "/dashboard/account", label: "Account" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="dashboard-sidebar" aria-label="Dashboard navigation">
      <Link href="/dashboard" className="dashboard-brand-link" aria-label="xGenie dashboard home">
        <LogoWordmark size="sm" className="xgenie-logo-image" width={138} height={44} />
      </Link>

      <nav>
        <ul className="dashboard-nav-list">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));
            return (
              <li key={item.href}>
                <Link href={item.href} className={active ? "active" : undefined}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="dashboard-sidebar-note">Live model outputs coming later.</p>
    </aside>
  );
}
