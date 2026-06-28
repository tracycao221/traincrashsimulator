"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const stages = [
  { value: 1, label: "Just started" },
  { value: 2, label: "Saving currency" },
  { value: 3, label: "Testing engines" }
] as const;

const goals = ["codes-first", "coins", "gems", "crash", "transfer"] as const;

export function CalculatorTool() {
  const [stage, setStage] = useState(1);
  const [goal, setGoal] = useState<(typeof goals)[number]>("codes-first");
  const [hasBoost, setHasBoost] = useState(false);

  const result = useMemo(() => {
    if (goal === "codes-first") {
      return "Claim the checked code reward first, then compare it with your next engine goal before spending Coins or Gems.";
    }
    if (goal === "coins" && stage < 3) {
      return "Use Coins on the next clearly listed engine unlock only after you confirm its cost in-game.";
    }
    if (goal === "gems") {
      return hasBoost ? "Use any active boost window for Gem progress after checking the current reward source." : "Hold Gems until a source confirms the engine or reward you want.";
    }
    if (goal === "crash") {
      return "Pick an engine to test in one crash scenario at a time, then record which setup gives the result you want.";
    }
    if (goal === "transfer") {
      return "Check the BrentAnimate railway-series transfer note before buying an engine only for another game.";
    }
    return "Choose the engine plan that improves your next play session, not the rarest-looking option.";
  }, [goal, hasBoost, stage]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Plan your next move" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Progress stage</span>
            <select value={stage} onChange={(event) => setStage(Number(event.target.value))} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              {stages.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Current goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value as (typeof goals)[number])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
              <option value="codes-first">Claim codes and rewards</option>
              <option value="coins">Spend Coins carefully</option>
              <option value="gems">Plan Gem rewards</option>
              <option value="crash">Test crash scenarios</option>
              <option value="transfer">Check engine transfer</option>
            </select>
          </label>
          <button
            type="button"
            className={hasBoost ? "button-primary" : "button-secondary"}
            onClick={() => setHasBoost((value) => !value)}
          >
            {hasBoost ? "Boost or event active" : "No boost or event active"}
          </button>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Output" title="Recommendation" />
        <p className="mt-6 text-2xl font-extrabold leading-9 text-white">{result}</p>
        <p className="mt-5 text-sm leading-6 text-white/60">
          Exact engine prices, payout rates, and transfer rules are still being checked. Until then, treat this as a conservative planning helper.
        </p>
      </div>
    </div>
  );
}
