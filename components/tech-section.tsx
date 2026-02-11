"use client"

const technologies = [
  { name: "Node.js", abbr: "NODE", color: "68 157 68" },
  { name: "TypeScript", abbr: "TS", color: "49 120 198" },
  { name: "MySQL", abbr: "MY", color: "0 117 143" },
  { name: "Redis", abbr: "RE", color: "220 64 56" },
  { name: "PHP", abbr: "PH", color: "119 123 179" },
  { name: "REST APIs", abbr: "API", color: "59 130 246" },
  { name: "Git", abbr: "GIT", color: "240 80 51" },
  { name: "Low-code & IA", abbr: "LC/IA", color: "139 92 246" },
]

export function TechSection() {
  return (
    <section id="tecnologias" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 font-mono text-sm text-primary">{"// stack"}</div>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Minhas Tecnologias
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Subtle glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, rgba(${tech.color}, 0.06) 0%, transparent 70%)`,
                }}
              />
              <div className="relative flex flex-col items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `rgba(${tech.color}, 0.1)`,
                  }}
                >
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: `rgb(${tech.color})` }}
                  >
                    {tech.abbr}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
