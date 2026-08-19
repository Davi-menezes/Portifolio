import { ExternalLink, Sparkles, PawPrint, Utensils, Globe, Stethoscope, Church, Scale, User } from "lucide-react"

const otherProjects = [
  {
    href: "https://clinicafacil-one.vercel.app/",
    name: "Clinica Fácil",
    description: "Sistema de gestão para clínicas com agendamento, prontuários e controle de pacientes.",
    tags: ["Saúde", "Next.js", "SaaS"],
    icon: Stethoscope,
  },
  {
    href: "https://pentecost-three.vercel.app/",
    name: "Pentecost",
    description: "App de hábitos para rastrear rotinas e estudos: italiano, budismo, Ruby, marcenaria.",
    tags: ["Hábitos", "React", "Produtividade"],
    icon: Church,
  },
  {
    href: "https://jurislinkhub.vercel.app/",
    name: "Juris Link Hub",
    description: "Marketplace jurídico conectando advogados e clientes com busca inteligente.",
    tags: ["Jurídico", "Next.js", "Marketplace"],
    icon: Scale,
  },
  {
    href: "https://mdmr.vercel.app/",
    name: "mdmr",
    description: "Meu Dinheiro Minhas Regras - Plataforma de educação financeira e controle de gastos.",
    tags: ["Finanças", "React", "Educação"],
    icon: User,
  },
  {
    href: "https://mundo-pet-love.vercel.app/",
    name: "Mundo Pet Love",
    description: "Site completo para petshop com catálogo de produtos, serviços e agendamento online.",
    tags: ["Petshop", "Next.js", "Landing Page"],
    icon: PawPrint,
  },
  {
    href: "https://panela-de-ferro.vercel.app/",
    name: "Panela de Ferro",
    description: "Plataforma digital para restaurante com cardápio interativo e informações de contato.",
    tags: ["Restaurante", "React", "Landing Page"],
    icon: Utensils,
  },
  {
    href: "https://petworld-nu.vercel.app/",
    name: "PetWorld",
    description: "Loja virtual de produtos e serviços para pets com interface moderna e responsiva.",
    tags: ["Petshop", "Landing Page", "React"],
    icon: Globe,
  },
]

export function ProjectSection() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// projetos"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Projetos em Destaque
        </h2>

        {/* Featured Project */}
        <a
          href="https://annaia.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-8 block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
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

        {/* Other Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => {
            const Icon = project.icon
            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground">{project.name}</h3>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
