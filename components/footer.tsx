import { Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          DM &middot; Davi Menezes
        </p>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/davi-menezes-3a7565311/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/Davi-menezes" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.99freelas.com.br/user/DaviMenezes00" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="99Freelas">
            <span className="text-xs font-bold">99</span>
          </a>
          <a href="https://www.instagram.com/bigtatao/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Desenvolvedor Backend PCD &middot; Node.js &middot; APIs &middot; Sistemas Financeiros
        </p>
      </div>
    </footer>
  )
}
