import React from "react";

// Single-file React landing page for **Alpha Flow**.
// Tailwind CSS classes are used for styling. Paste into a React/Next.js project.
// Replace the placeholders (DISCORD_INVITE_URL, STRIPE_LINK_*, BRAND_LOGO_URL) as needed.

export default function AlphaFlowLanding() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/20 via-slate-900 to-neutral-950" />
        <div className="absolute left-1/2 top-[-10%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img src="BRAND_LOGO_URL" alt="Alpha Flow" className="h-9 w-9 rounded-xl object-cover ring-1 ring-fuchsia-400/30" />
          <span className="font-semibold tracking-wide">Alpha Flow</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-neutral-300 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-neutral-300 hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm text-neutral-300 hover:text-white">FAQ</a>
        </nav>
        <a href="DISCORD_INVITE_URL" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
          Join Discord
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-10 pt-8 md:grid-cols-2 md:pb-20 md:pt-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Live trade alerts • Forex • Futures • Crypto
          </div>
          <h1 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Alpha Flow — AI‑assisted signals, built for serious traders
          </h1>
          <p className="mt-4 max-w-xl text-neutral-300">
            Real‑time Discord alerts powered by structured screeners and institutional concepts
            (FVG, S/D zones, BOS/CHoCH, volume profile). Designed for focused execution and clean risk.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="DISCORD_INVITE_URL" className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20">
              Join Free Channel
            </a>
            <a href="#pricing" className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-200 hover:bg-white/5">
              See Pricing
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center text-sm text-neutral-300">
            <div>
              <div className="text-2xl font-bold text-white">4H / 1H / 15m</div>
              Multi‑TF bias
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%+</div>
              Uptime on alerts
            </div>
            <div>
              <div className="text-2xl font-bold text-white"><span className="align-top text-base">≤</span> 1s</div>
              Discord ping latency
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="rounded-xl bg-neutral-950 p-4 ring-1 ring-white/10">
              <div className="mb-3 flex items-center justify-between text-xs text-neutral-400">
                <span>alpha-flow • live‑signals</span>
                <span>now</span>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-4">
                <pre className="whitespace-pre-wrap text-xs leading-5 text-neutral-200">
{`[ALERT] XAUUSD LONG (4H bias)\n• Reason: CLS → HTF FVG tap + bullish CHoCH\n• Entry: 2487.50 | SL: 2479.00 | TP: 2512.00 (3R)\n• Confluence: OBV rising, 20/50 EMA cross, below VWAP\n• Note: NY Open only; invalidate above 2520 sweep`}
                </pre>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 -z-10 h-24 w-24 rotate-12 rounded-2xl bg-fuchsia-500/20 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 -rotate-6 rounded-2xl bg-cyan-500/20 blur-2xl" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Built for Forex • Futures • Crypto</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
          Two-tier screener stack: early‑signal (relaxed) to catch movers forming, and high‑conviction filters
          for A+ setups only. You focus on execution; Alpha Flow handles the scanning.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Forex Alerts",
              points: [
                "4H bias + 1H timing",
                "EMA20/50 • RSI • MACD • BB",
                "VWAP & CCI add‑ons",
              ],
            },
            {
              title: "Futures Alerts",
              points: [
                "MNQ/NQ • XAU • MCL",
                "PDH/PDL sweeps + micro FVG",
                "Session filters (LO/NYO)",
              ],
            },
            {
              title: "Crypto Alerts",
              points: [
                "1H/4H momentum + structure",
                "Bybit & MEXC lists (cap > $100M)",
                "Volume/POC confluence",
              ],
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Simple pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-300">
          Start free, then choose a plan when you’re ready. Cancel anytime. Early supporters lock lifetime rates.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Free",
              price: "£0",
              cta: "DISCORD_INVITE_URL",
              ctaLabel: "Join Free Discord",
              features: [
                "Public signals (delayed)",
                "Weekly watchlists",
                "Basic education threads",
              ],
            },
            {
              name: "Trader",
              price: "£19/mo",
              cta: "STRIPE_LINK_TRADER",
              ctaLabel: "Start Trader",
              features: [
                "Real‑time alerts (Forex/Futures/Crypto)",
                "Entry/SL/TP with R:R",
                "Session‑based alerts + notes",
                "Priority support",
              ],
            },
            {
              name: "Pro",
              price: "£39/mo",
              cta: "STRIPE_LINK_PRO",
              ctaLabel: "Start Pro",
              features: [
                "Everything in Trader",
                "Pro screener feeds (A+ only)",
                "CSV exports + journal tags",
                "Beta features & strategy calls",
              ],
            },
          ].map((t, i) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${i===1 ? 'ring-1 ring-fuchsia-400/30' : ''}`}>
              <div className="mb-2 text-sm text-neutral-400">{t.name}</div>
              <div className="text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                {t.features.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                    {x}
                  </li>
                ))}
              </ul>
              <a href={t.cta} className="mt-6 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
                {t.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-5xl px-6 pb-20">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {[
            {
              q: "How are alerts generated?",
              a: "A rule‑based screener stack combines momentum (EMA/RSI/MACD/BB/VWAP) with structure tools (FVG, BOS/CHoCH, POC). Two tiers: early‑signal and high‑conviction.",
            },
            {
              q: "Which markets are supported?",
              a: "Forex majors & crosses, futures (MNQ/NQ, XAU, MCL), and Bybit/MEXC crypto with cap > $100M.",
            },
            {
              q: "Do you offer refunds?",
              a: "Yes, 7‑day no‑questions refund on paid tiers for first‑time subscribers.",
            },
            {
              q: "Is this financial advice?",
              a: "No. Educational signals only. You are responsible for your trades and risk.",
            },
          ].map((f) => (
            <details key={f.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
              <p className="mt-2 text-neutral-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Alpha Flow — Educational purposes only. Trading involves risk.
      </footer>
    </div>
  );
}
