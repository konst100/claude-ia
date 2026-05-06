import { Input } from "@/components/ui/input";

const features = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-4 3V5z" />
        <path d="M7 9h6M7 12h4" />
      </svg>
    ),
    title: "AI Chatbot",
    description:
      "Умный чат-бот на базе LLM отвечает на вопросы клиентов 24/7. Настраивается под специфику бизнеса без написания кода.",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
        <path d="M12 2v5h5M7 11h3m-3 3h6" />
        <circle cx="14.5" cy="15.5" r="1.5" />
        <path d="M15.6 16.6 17 18" />
      </svg>
    ),
    title: "Document Q&A",
    description:
      "Загружайте PDF и Word — система мгновенно найдёт нужную информацию с точными ссылками на источник.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.1 4.1l1.4 1.4M14.5 14.5l1.4 1.4M4.1 15.9l1.4-1.4M14.5 5.5l1.4-1.4" />
      </svg>
    ),
    title: "AI Agents",
    description:
      "Автономные агенты для многошаговых задач: поиск информации, анализ данных, составление отчётов без участия человека.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.5 2 4 11h7l-2.5 7L18 9h-7l2.5-7z" />
      </svg>
    ),
    title: "Automations",
    description:
      "Рабочие процессы по расписанию или событию. Интеграция с вашими системами через API без технической команды.",
  },
];

const stats = [
  { value: "10 min", label: "до первого агента" },
  { value: "24/7", label: "работа без перерывов" },
  { value: "4", label: "модуля в платформе" },
  { value: "0", label: "строк кода для старта" },
];

const checks = [
  "Нет необходимости в технической команде",
  "Готовые шаблоны для популярных сценариев",
  "Безопасное хранение данных",
  "Поддержка на русском языке",
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
            <span style={{ color: "var(--accent)", fontSize: "16px", lineHeight: 1 }}>◆</span>
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
            <a href="#cta" className="hover:text-[var(--ink)] transition-colors duration-150">
              Pricing
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
          <span style={{ color: "var(--accent)", fontSize: "8px" }}>●</span>
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
          Единая платформа AI-инструментов для малого бизнеса. Чат-боты, анализ документов,
          автономные агенты и автоматизации без сложных настроек.
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
              Всё что нужно — в одном месте
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Четыре ключевых модуля для автоматизации рутины и роста бизнеса
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
              Почему AI Ops Hub?
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-7"
              style={{ color: "var(--muted)" }}
            >
              Платформа создана специально для малого бизнеса: без технической команды
              и без больших бюджетов. Настройте первого AI-агента за 10 минут и освободите
              время для важного.
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
            Готовы автоматизировать бизнес?
          </h2>
          <p className="mb-8 text-[15px]" style={{ color: "var(--muted)" }}>
            Оставьте email — пришлём инструкцию по быстрому старту и доступ к демо-среде.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="ваш@email.ru"
              className="flex-1"
              style={{
                background: "var(--cream)",
                borderColor: "var(--line)",
                color: "var(--ink)",
              }}
            />
            <button
              className="px-5 py-2 text-sm font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "white", borderRadius: "8px" }}
            >
              Get Access
            </button>
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--muted-2)" }}>
            Бесплатно на 14 дней. Без привязки карты.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--accent)", fontSize: "13px" }}>◆</span>
            <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
              AI Ops Hub
            </span>
          </div>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 AI Ops Hub. Платформа AI-функций для малого бизнеса.
          </span>
        </div>
      </footer>
    </div>
  );
}
