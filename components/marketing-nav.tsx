"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

type MarketingNavProps = {
  mode?: "home" | "marketing";
};

export default function MarketingNav({ mode = "marketing" }: MarketingNavProps) {
  const pathname = usePathname();
  const isHome = mode === "home";
  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Model", href: "/model" },
    { label: "Results", href: "/results" },
    { label: "Pricing", href: "/pricing" },
    { label: "Waitlist", href: "/waitlist" },
  ];

  return (
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" aria-label="Go to xGenie homepage">
          <Logo size="sm" />
        </Link>

        <nav aria-label={isHome ? "Primary navigation" : "Marketing navigation"}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "active" : undefined} aria-current={isActive ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
