import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function MarketingFooter() {
  return (
    <footer className="site-footer">
      <Logo size="sm" />

      <p>
        xGenie is an informational analytics product. No prediction is guaranteed. Betting involves financial risk. Only
        bet what you can afford to lose.
      </p>

      <div className="footer-links">
        <Link href="/responsible-gambling">Responsible gambling</Link>
        <Link href="/waitlist">Waitlist</Link>
      </div>
    </footer>
  );
}
