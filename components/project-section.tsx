import { ExternalLink, Sparkles } from "lucide-react"

export function ProjectSection() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// projeto"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Projeto em Destaque
        </h2>

        <a
          href="https://annaia.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
        >
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <h3 className="text-2xl font-bold text-foreground">Anna.ai</h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="max-w-lg leading-relaxed text-muted-foreground">
                Plataforma construida com IA e low-code focada em estudos, inovacao e produtividade.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["IA", "Low-code", "Produtividade", "Inovacao"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
