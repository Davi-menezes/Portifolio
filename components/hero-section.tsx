"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      if (!imageRef.current) return
      const scrollY = window.scrollY
      const maxFade = 600
      const opacity = Math.max(0, 1 - scrollY / maxFade)
      const scale = 1 + scrollY * 0.0003
      imageRef.current.style.opacity = String(opacity)
      imageRef.current.style.transform = `scale(${scale})`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappUrl =
    "https://wa.me/5518920041272?text=Ol%C3%A1%20Davi%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20simular%20um%20or%C3%A7amento."

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image with scroll fade */}
      <div
        ref={imageRef}
        className="pointer-events-none absolute inset-0 z-0"
        style={{ willChange: "opacity, transform" }}
      >
        <img
          src="/images/hero-bg.png"
          alt=""
          className="h-full w-full object-cover object-top"
          loading="eager"
        />
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-24 pb-16">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Disponivel para projetos
        </div>

        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Desenvolvedor Backend PCD focado em{" "}
          <span className="text-primary">Node.js</span>, APIs e{" "}
          <span className="text-primary">Sistemas Financeiros</span>
        </h1>

        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Sou desenvolvedor backend PCD (visao monocular &mdash; Lei n&ordm; 14.126/2021) com
          experiencia real em fintechs e bancos white-label. Trabalho com foco em performance,
          seguranca, arquitetura escalavel e codigo limpo.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <ArrowDown className="h-4 w-4" />
            Ver Projetos
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/40 hover:bg-secondary/80"
          >
            <MessageCircle className="h-4 w-4" />
            Simular Orcamento
          </a>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.linkedin.com/in/davi-menezes-3a7565311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Davi-menezes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.99freelas.com.br/user/DaviMenezes00"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="99Freelas"
          >
            <span className="text-xs font-bold">99</span>
          </a>
          <a
            href="https://www.instagram.com/bigtatao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
