import { Brain, Dumbbell, Gamepad2, Heart, Lightbulb, Sparkles } from "lucide-react"

const interests = [
  { icon: Lightbulb, label: "Negocios & Tecnologia" },
  { icon: Brain, label: "IA & Low-code" },
  { icon: Sparkles, label: "Criador da Anna.ai" },
  { icon: Dumbbell, label: "Academia & Corrida" },
  { icon: Heart, label: "Tempo com Deus" },
  { icon: Gamepad2, label: "Jogos" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// sobre mim"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Sobre Mim
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              Sou desenvolvedor backend com experiencia pratica em sistemas bancarios e fintechs,
              desenvolvendo APIs robustas, integracoes financeiras e solucoes escalaveis.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Como profissional PCD, desenvolvi ainda mais foco, disciplina e capacidade analitica
              &mdash; caracteristicas que aplico diretamente na construcao de software seguro e
              confiavel.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Alem do codigo
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-3 transition-colors hover:border-primary/30"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-xs text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
