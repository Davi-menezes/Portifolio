import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"

export function ContactSection() {
  const whatsappUrl =
    "https://wa.me/5518920041272?text=Ol%C3%A1%20Davi%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20simular%20um%20or%C3%A7amento."

  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// contato"}</div>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Disponivel para Projetos e Oportunidades
        </h2>
        <p className="mb-12 max-w-2xl leading-relaxed text-muted-foreground">
          Full Stack Developer focado em Node.js e APIs. Experiencia real em sistemas bancarios e
          fintechs. Garanto codigo limpo, seguranca e alta performance para o seu projeto.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="mb-1 font-semibold text-foreground">Simular Orcamento</p>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
            </div>
          </a>

          {/* Phone */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
              <Phone className="h-7 w-7 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="mb-1 font-semibold text-foreground">Celular</p>
              <p className="text-sm text-muted-foreground">(18) 92004-1272</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
              <Mail className="h-7 w-7 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="mb-1 font-semibold text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">davidmenezes696@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <a
            href="https://www.linkedin.com/in/davi-menezes-3a7565311/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium text-foreground">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Davi-menezes"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium text-foreground">GitHub</span>
          </a>
          <a
            href="https://www.99freelas.com.br/user/DaviMenezes00"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="text-xs font-bold text-muted-foreground transition-colors group-hover:text-primary">99</span>
            <span className="text-sm font-medium text-foreground">99Freelas</span>
          </a>
          <a
            href="https://www.instagram.com/bigtatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            <span className="text-sm font-medium text-foreground">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
