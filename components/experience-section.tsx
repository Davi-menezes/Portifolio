import { Building2, MapPin, Shield, Users } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// experiencia"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Experiencia em Fintech e Bancos White-Label
        </h2>

        <div className="relative rounded-2xl border border-border/50 bg-card p-8 md:p-12">
          {/* Decorative accent line */}
          <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-primary" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Desenvolvedor Backend &middot; YouBR</h3>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Presidente Prudente - SP</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Atuo como desenvolvedor backend na <span className="font-semibold text-foreground">YouBR</span>, empresa
              especializada em bancos white-label, desenvolvendo APIs, regras de negocio financeiras,
              integracoes e otimizacoes de performance.
            </p>

            <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary p-4">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Clientes atendidos</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ja prestamos servico para diversos bancos, como <span className="font-medium text-foreground">Zeecred</span> e <span className="font-medium text-foreground">Carletto Bank</span>, entre outros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Diferencial</p>
                <p className="text-sm text-muted-foreground">
                  Experiencia real com dados sensiveis, seguranca e alta disponibilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
