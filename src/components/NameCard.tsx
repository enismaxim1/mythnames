"use client";

import { useState } from "react";

interface NameCardProps {
  name: string;
  meaning: string;
  pronunciation: string;
}

export default function NameCard({ name, meaning, pronunciation }: NameCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg border border-gold/10 bg-charcoal p-5 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-xl text-cream">{name}</h3>
        <button
          onClick={handleCopy}
          className="shrink-0 text-xs text-muted hover:text-gold border border-gold/20 rounded px-2 py-1 hover:border-gold/40"
          aria-label={`Copy ${name} to clipboard`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p className="text-sm text-muted italic">{meaning}</p>
      <p className="text-sm text-gold/70">/{pronunciation}/</p>
    </div>
  );
}
