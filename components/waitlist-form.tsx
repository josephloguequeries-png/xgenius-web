"use client";

import { type FormEvent, useState } from "react";

type FormState = {
  email: string;
  user_type: string;
  betting_experience: string;
  main_interest: string;
  preferred_markets: string[];
  pricing_interest: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const USER_TYPES = ["Casual bettor", "Serious bettor", "Analyst", "Tipster", "Trader", "Other"];
const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Advanced", "Professional / semi-professional"];
const MAIN_INTERESTS = [
  "EV betting",
  "Fair odds",
  "Model dashboard",
  "Alerts",
  "Results tracking",
  "Bankroll discipline",
  "Market research",
];
const PRICING_INTERESTS = ["Free only", "Premium", "Pro", "Not sure yet"];
const PREFERRED_MARKETS = ["1X2", "Over/Under 2.5", "BTTS", "Asian Handicap", "Player Props", "Corners"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM: FormState = {
  email: "",
  user_type: "",
  betting_experience: "",
  main_interest: "",
  preferred_markets: [],
  pricing_interest: "",
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleMarket(market: string) {
    setForm((current) => {
      const exists = current.preferred_markets.includes(market);

      if (exists) {
        return {
          ...current,
          preferred_markets: current.preferred_markets.filter((entry) => entry !== market),
        };
      }

      return {
        ...current,
        preferred_markets: [...current.preferred_markets, market],
      };
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setSubmitState({ status: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source_page: "/waitlist",
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setSubmitState({ status: "error", message: data.error ?? "Unable to submit waitlist signup." });
        return;
      }

      setSubmitState({
        status: "success",
        message: data.message ?? "You’re on the xGenie beta list. We’ll contact you when early access opens.",
      });
      setForm(INITIAL_FORM);
    } catch {
      setSubmitState({ status: "error", message: "Unable to submit waitlist signup right now. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="waitlist-form waitlist-enhanced-form" aria-label="xGenie waitlist form" onSubmit={onSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="name@domain.com"
          autoComplete="email"
        />
      </label>

      <div className="waitlist-row">
        <label>
          User type
          <select
            name="user_type"
            required
            value={form.user_type}
            onChange={(event) => updateField("user_type", event.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {USER_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Betting experience
          <select
            name="betting_experience"
            required
            value={form.betting_experience}
            onChange={(event) => updateField("betting_experience", event.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {EXPERIENCE_LEVELS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="waitlist-row">
        <label>
          Main interest
          <select
            name="main_interest"
            required
            value={form.main_interest}
            onChange={(event) => updateField("main_interest", event.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {MAIN_INTERESTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Pricing interest
          <select
            name="pricing_interest"
            required
            value={form.pricing_interest}
            onChange={(event) => updateField("pricing_interest", event.target.value)}
          >
            <option value="" disabled>
              Select one
            </option>
            {PRICING_INTERESTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="waitlist-markets">
        <legend>Preferred markets</legend>
        <div className="waitlist-market-grid">
          {PREFERRED_MARKETS.map((market) => {
            const checked = form.preferred_markets.includes(market);

            return (
              <label key={market} className={checked ? "market-chip checked" : "market-chip"}>
                <input
                  type="checkbox"
                  name="preferred_markets"
                  value={market}
                  checked={checked}
                  onChange={() => toggleMarket(market)}
                />
                <span>{market}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Join waitlist"}
      </button>

      {submitState.status === "success" && <p className="form-message success">{submitState.message}</p>}
      {submitState.status === "error" && <p className="form-message error">{submitState.message}</p>}

      <p className="waitlist-consent">
        By joining the waitlist, you agree to receive occasional xGenie product updates. You can unsubscribe at any time.
      </p>
    </form>
  );
}
