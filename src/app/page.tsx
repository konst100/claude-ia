import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const features = [
  {
    icon: "💬",
    title: "AI Чат-бот",
    description:
      "Умный чат-бот на базе LLM, который отвечает на вопросы клиентов 24/7. Легко настраивается под специфику вашего бизнеса без написания кода.",
  },
  {
    icon: "📄",
    title: "Документ Q&A",
    description:
      "Загружайте PDF, Word и другие документы — система мгновенно найдёт нужную информацию по вашему запросу с точными ссылками на источник.",
  },
  {
    icon: "🤖",
    title: "AI Агенты",
    description:
      "Автономные агенты, способные выполнять многошаговые задачи: поиск информации, анализ данных, составление отчётов без участия человека.",
  },
  {
    icon: "⚡",
    title: "Автоматизации",
    description:
      "Создавайте рабочие процессы, которые запускаются автоматически по расписанию или событию. Интеграция с вашими системами через API.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">AI Ops Hub</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Возможности</a>
            <a href="#about" className="hover:text-foreground transition-colors">О платформе</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Начать</a>
          </nav>
          <Button size="sm">Попробовать бесплатно</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 text-sm text-muted-foreground mb-6">
          <span>🚀</span>
          <span>AI-платформа для малого бизнеса</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
          Автоматизируй бизнес с помощью&nbsp;
          <span className="text-primary/70">искусственного интеллекта</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          AI Ops Hub — единая платформа AI-инструментов для малого бизнеса.
          Чат-боты, анализ документов, автономные агенты и автоматизации без сложных настроек.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Начать бесплатно
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Смотреть демо
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Всё что нужно — в одном месте</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Четыре ключевых модуля для автоматизации рутины и роста бизнеса
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-muted/40 border-y">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Почему AI Ops Hub?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы создали платформу специально для малого бизнеса: без сложных технических знаний,
              без больших бюджетов. Настройте первого AI-агента за 10 минут и освободите время
              для важного.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Нет необходимости в технической команде",
                "Готовые шаблоны для популярных сценариев",
                "Безопасное хранение данных в России",
                "Поддержка на русском языке",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10 мин", label: "до первого агента" },
              { value: "24/7", label: "работа без перерывов" },
              { value: "4 модуля", label: "в одной платформе" },
              { value: "0 кода", label: "требуется для старта" },
            ].map((stat) => (
              <Card key={stat.label} className="text-center p-6">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы автоматизировать бизнес?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Оставьте email — мы пришлём инструкцию по быстрому старту и доступ к демо-среде.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input type="email" placeholder="ваш@email.ru" className="flex-1" />
          <Button>Получить доступ</Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Бесплатно на 14 дней. Без привязки карты.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">AI Ops Hub</span>
          <span>© 2026 AI Ops Hub. Платформа AI-функций для малого бизнеса.</span>
        </div>
      </footer>
    </div>
  );
}
