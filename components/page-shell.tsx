import type { ReactNode } from "react";
import MarketingFooter from "@/components/marketing-footer";
import MarketingNav from "@/components/marketing-nav";

type PageShellProps = {
  children: ReactNode;
  navMode?: "home" | "marketing";
  showFooter?: boolean;
};

export default function PageShell({ children, navMode = "marketing", showFooter = true }: PageShellProps) {
  return (
    <main className={navMode === "home" ? "home-main" : "marketing-main"} id={navMode === "home" ? "top" : undefined}>
      <div className="background-grid" />
      <MarketingNav mode={navMode} />
      {children}
      {showFooter && <MarketingFooter />}
    </main>
  );
}
