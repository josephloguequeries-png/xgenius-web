import type { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type DashboardShellProps = {
  children: ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <main className="dashboard-root">
      <div className="background-grid" />
      <div className="dashboard-layout">
        <DashboardSidebar />
        <section className="dashboard-content">{children}</section>
      </div>
    </main>
  );
}
