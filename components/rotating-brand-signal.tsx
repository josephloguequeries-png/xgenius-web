"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHRASES = ["Built for Insight", "Built for Strategy", "Built for Intelligence", "Built for Edge"];

export default function RotatingBrandSignal() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % PHRASES.length);
    }, 2200);

    return () => {
      window.clearInterval(timer);
    };
  }, [reducedMotion]);

  return (
    <article className="brand-signal-card" aria-label="xGenie brand signal">
      <p className="panel-kicker">xGenie signal</p>
      <Image
        src="/brand/xgenie-primary-logo.png"
        alt="xGenie"
        width={220}
        height={70}
        className="brand-signal-logo"
        priority={false}
      />

      <p className="brand-signal-phrase" aria-live="off">
        <span key={PHRASES[phraseIndex]} className="brand-signal-phrase-text">
          {PHRASES[phraseIndex]}
        </span>
      </p>

      <p className="brand-signal-support">Model-led football market intelligence</p>
    </article>
  );
}
