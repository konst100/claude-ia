const LogoDiamond = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)" aria-hidden="true">
    <polygon points="7,1 13,7 7,13 1,7" />
  </svg>
);

const BadgeDot = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="var(--accent)" aria-hidden="true">
    <circle cx="3" cy="3" r="3" />
  </svg>
);

const features = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-4 3V5z" />
        <path d="M7 9h6M7 12h4" />
      </svg>
    ),
    title: "AI Chatbot",
    description:
      "An LLM-powered chatbot that answers customer questions 24/7 — configurable to your business without writing code.",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
        <path d="M12 2v5h5M7 11h3m-3 3h6" />
        <circle cx="14.5" cy="15.5" r="1.5" />
        <path d="M15.6 16.6 17 18" />
      </svg>
    ),
    title: "Document Q&A",
    description:
      "Upload PDF and Word files — the system instantly finds relevant information with precise source references.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4" />
      </svg>
    ),
    title: "AI Agents",
    description:
      "Autonomous agents for multi-step tasks: research, data analysis, and report generation without human involvement.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11.5 2 4 11h7l-2.5 7L18 9h-7l2.5-7z" />
      </svg>
    ),
    title: "Automations",
    description:
      "Workflows triggered on schedule or by event. API integration with your existing systems — no technical team needed.",
  },
];

const stats = [
  { value: "10 min", label: "to first agent" },
  { value: "24/7", label: "always running" },
  { value: "4", label: "modules in one place" },
  { value: "0", label: "lines of code to start" },
];

const checks = [
  "No technical team required",
  "Ready-made templates for common scenarios",
  "Secure data storage",
  "Full English support",
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--sans)" }}>

      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{ borderBottom: "1px solid var(--line)", background: "var(--cream)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoDiamond />
            <span
              className="font-semibold text-[15px]"
              style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}
            >
              AI Ops Hub
            </span>
          </div>

          <nav
            className="hidden md:flex items-center gap-7 text-sm"
            style={{ color: "var(--muted)" }}
          >
            <a href="#features" className="hover:text-[var(--ink)] transition-colors duration-150">
              Features
            </a>
            <a href="#about" className="hover:text-[var(--ink)] transition-colors duration-150">
              About
            </a>
          </nav>

          <button
            className="text-sm font-medium px-4 py-2 hover:opacity-80 transition-opacity"
            style={{ background: "var(--ink)", color: "var(--cream)", borderRadius: "8px" }}
          >
            Try Free →
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-28 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 mb-8"
          style={{
            background: "var(--cream-3)",
            color: "var(--ink-2)",
            border: "1px solid var(--line)",
            borderRadius: "999px",
          }}
        >
          <BadgeDot />
          v1.0 · beta
        </div>

        <h1
          className="text-5xl md:text-[60px] font-semibold mb-6"
          style={{ color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: "1.08" }}
        >
          Automate Your Business
          <br />
          with{" "}
          <em
            style={{
              color: "var(--accent)",
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            AI
          </em>
        </h1>

        <p
          className="text-[17px] leading-relaxed mb-10 max-w-[480px] mx-auto"
          style={{ color: "var(--muted)" }}
        >
          A unified AI platform for small business. Chatbots, document analysis,
          autonomous agents, and automations — without complex setup.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <button
            className="px-7 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "white", borderRadius: "8px" }}
          >
            Start Free
          </button>
          <button
            className="px-7 py-3 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{
              background: "transparent",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: "8px",
            }}
          >
            Watch Demo
          </button>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm"
          style={{ color: "var(--muted)" }}
        >
          {["14 days free", "no credit card", "secure storage"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span style={{ color: "var(--green)" }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-24"
        style={{ borderTop: "1px solid var(--line)", background: "var(--cream-2)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
            >
              Everything You Need — In One Place
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Four key modules to automate routine work and grow your business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6"
                style={{
                  background: "var(--cream)",
                  border: "1px solid var(--line)",
                  borderRadius: "12px",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-xs mt-0.5 shrink-0 tabular-nums"
                    style={{ color: "var(--muted-2)", fontFamily: "var(--mono)" }}
                  >
                    {feature.num}
                  </span>
                  <div>
                    <div className="mb-3" style={{ color: "var(--ink-2)" }}>
                      {feature.icon}
                    </div>
                    <h3
                      className="font-semibold text-[15px] mb-2"
                      style={{ color: "var(--ink)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
            >
              Why AI Ops Hub?
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-7"
              style={{ color: "var(--muted)" }}
            >
              Built specifically for small business — no technical team, no big budget.
              Set up your first AI agent in 10 minutes and free up time for what matters.
            </p>
            <ul className="space-y-3">
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px]">
                  <span style={{ color: "var(--green)", marginTop: "2px" }}>✓</span>
                  <span style={{ color: "var(--ink-2)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 text-center"
                style={{
                  background: "var(--cream-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "12px",
                }}
              >
                <div
                  className="text-3xl font-semibold mb-1"
                  style={{ color: "var(--ink)", letterSpacing: "-0.03em" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-24"
        style={{ borderTop: "1px solid var(--line)", background: "var(--cream-2)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-semibold mb-3"
            style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
          >
            View the Source Code
          </h2>
          <p className="mb-8 text-[15px]" style={{ color: "var(--muted)" }}>
            This is an open project — all code is available on GitHub.
          </p>
          <a
            href="https://github.com/konst100/claude-ia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: "var(--ink)", color: "var(--cream)", borderRadius: "8px" }}
          >
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoDiamond />
            <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
              AI Ops Hub
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              © 2026 AI Ops Hub. AI platform for small business.
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted-2)" }}>
              This is a learning project — not a commercial product or service.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
