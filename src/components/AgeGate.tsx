"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GATE_KEY = "mahiescorts_18_verified";

export default function AgeGate() {
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = sessionStorage.getItem(GATE_KEY);
    setVerified(stored === "1");
  }, []);

  const confirm = () => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(GATE_KEY, "1");
    setVerified(true);
  };

  if (verified === null) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 text-white">
        <div className="mx-4 max-w-md rounded-2xl border border-amber-500/40 bg-zinc-900 p-8 text-center shadow-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-400">18+ / Adults Only</p>
          <p className="mb-6 text-sm text-zinc-300">
            This site contains explicit adult material and is strictly for users 18 years of age or older (or the legal age in your jurisdiction).
          </p>
          <ul className="mb-8 text-left text-sm text-zinc-400">
            <li className="mb-1">• I confirm that I am at least 18 years old</li>
            <li className="mb-1">• Adult content is permitted where I am currently located</li>
            <li>• I am entering this website of my own free will</li>
          </ul>
          <div className="flex flex-col gap-3">
            <button
              onClick={confirm}
              className="w-full rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400"
            >
              I&apos;m 18+ — Enter Site
            </button>
            <Link
              href="https://www.google.com"
              className="block text-sm text-zinc-500 hover:text-zinc-300"
            >
              Leave / Exit
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
