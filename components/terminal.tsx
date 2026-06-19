"use client"

import { useEffect, useState, useRef } from "react"

type LineType = "command" | "output" | "success" | "warning" | "error" | "info" | "section"

interface Line {
  type: LineType
  text: string
  delay: number
}

const diagnosticScript: Line[] = [
  { type: "section",  text: "# Iniciando diagnóstico completo da rede...",         delay: 0 },
  { type: "command",  text: "nexus-diag --full --host=cliente.local",              delay: 400 },
  { type: "output",   text: "Conectando ao gateway 192.168.1.1...",                delay: 800 },
  { type: "success",  text: "✔ Gateway alcançável — latência: 1ms",               delay: 1200 },

  { type: "section",  text: "# Verificando firewall e perímetro",                  delay: 1800 },
  { type: "command",  text: "firewall-check --rules --intrusion",                  delay: 2200 },
  { type: "success",  text: "✔ Fortinet ativo — 2.847 ameaças bloqueadas hoje",   delay: 2700 },
  { type: "success",  text: "✔ IPS/IDS online — assinaturas atualizadas",         delay: 3100 },
  { type: "warning",  text: "⚠ Porta 3389 exposta — recomendamos VPN dedicada",  delay: 3500 },

  { type: "section",  text: "# Auditando Active Directory",                        delay: 4100 },
  { type: "command",  text: "ad-audit --users --gpo --stale-accounts",             delay: 4500 },
  { type: "success",  text: "✔ 87 usuários ativos — políticas GPO aplicadas",     delay: 5000 },
  { type: "warning",  text: "⚠ 4 contas inativas há +90 dias detectadas",        delay: 5400 },
  { type: "info",     text: "→ Recomendação: desabilitar ou auditar essas contas", delay: 5800 },

  { type: "section",  text: "# Verificando backup e disaster recovery",            delay: 6400 },
  { type: "command",  text: "veeam-status --last-jobs --rpo-check",                delay: 6800 },
  { type: "success",  text: "✔ Último backup: hoje 03:00 — status: SUCCESS",      delay: 7300 },
  { type: "success",  text: "✔ RPO: 4h | RTO: 2h — dentro do SLA contratado",    delay: 7700 },

  { type: "section",  text: "# Monitoramento de disponibilidade (Zabbix)",        delay: 8300 },
  { type: "command",  text: "zabbix-report --uptime --alerts --30d",              delay: 8700 },
  { type: "success",  text: "✔ Uptime últimos 30 dias: 99.97%",                  delay: 9200 },
  { type: "success",  text: "✔ 0 incidentes críticos sem resposta",              delay: 9600 },

  { type: "section",  text: "# Relatório final",                                   delay: 10200 },
  { type: "success",  text: "✔ Infraestrutura operacional",                       delay: 10600 },
  { type: "warning",  text: "⚠ 2 pontos de atenção identificados",               delay: 11000 },
  { type: "info",     text: "→ Solicite um diagnóstico real e gratuito abaixo",   delay: 11400 },
]

const metrics = [
  { label: "Uptime", value: "99.97%", color: "text-emerald-400" },
  { label: "Latência", value: "1ms", color: "text-cyan-400" },
  { label: "Ameaças bloqueadas", value: "2.847", color: "text-amber-400" },
  { label: "Último backup", value: "03:00 ✔", color: "text-emerald-400" },
]

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<Line[]>([])
  const [isDone, setIsDone] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [tick, setTick] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // Blinking cursor tick
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 530)
    return () => clearInterval(t)
  }, [])

  // Scroll terminal body to bottom as lines appear
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [visibleLines])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          diagnosticScript.forEach((line) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, line])
            }, line.delay)
          })
          const totalDuration = diagnosticScript[diagnosticScript.length - 1].delay + 800
          setTimeout(() => setIsDone(true), totalDuration)
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const getLineStyle = (type: LineType) => {
    switch (type) {
      case "command":  return "text-cyan-300"
      case "success":  return "text-emerald-400"
      case "warning":  return "text-amber-400"
      case "error":    return "text-red-400"
      case "info":     return "text-blue-300"
      case "section":  return "text-white/40"
      default:         return "text-white/60"
    }
  }

  const getPrefix = (type: LineType) => {
    if (type === "command") return <span className="text-cyan-500 select-none">$ </span>
    if (type === "section") return null
    return <span className="text-white/20 select-none">  </span>
  }

  return (
    <section id="diagnostico" className="py-24 bg-[#080808] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">diagnóstico</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl font-bold text-white leading-tight max-w-xl">
              Como monitoramos{" "}
              <span className="text-cyan-400">sua infraestrutura</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs lg:text-right leading-relaxed">
              Veja uma simulação real do diagnóstico que rodamos em cada cliente novo — sem custo, sem compromisso.
            </p>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <p className="text-white/40 text-xs font-mono mb-1">{m.label}</p>
              <p className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div ref={ref} className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">

          {/* Title bar */}
          <div className="bg-[#141414] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 text-xs text-white/30 font-mono">nexus-ti@network-monitor — diagnóstico completo</span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-mono">LIVE</span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={bodyRef}
            className="bg-[#0a0a0a] p-5 font-mono text-sm h-80 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            {visibleLines.map((line, i) => (
              <div
                key={i}
                className="mb-1.5 leading-relaxed"
                style={{ animation: "fadeSlideIn 0.2s ease-out both" }}
              >
                {line.type === "section" ? (
                  <p className="text-white/25 font-mono text-xs mt-3 mb-1">{line.text}</p>
                ) : (
                  <p className={getLineStyle(line.type)}>
                    {getPrefix(line.type)}
                    {line.text}
                  </p>
                )}
              </div>
            ))}

            {/* Cursor */}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-cyan-500 font-mono">$</span>
              <span
                className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                style={{ opacity: tick % 2 === 0 ? 1 : 0, transition: "opacity 0.1s" }}
              />
            </div>
          </div>

          {/* Footer bar */}
          {isDone && (
            <div
              className="bg-[#0f1a1a] border-t border-cyan-400/20 px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ animation: "fadeSlideIn 0.4s ease-out both" }}
            >
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">Quer um diagnóstico real da sua rede?</p>
                <p className="text-white/40 text-xs mt-0.5">
                  Analisamos seu ambiente e entregamos relatório com os pontos críticos — sem custo.
                </p>
              </div>
              <a
                href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20rede"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-sm font-bold hover:bg-cyan-300 transition-colors"
              >
                Solicitar diagnóstico gratuito
              </a>
            </div>
          )}
        </div>

        <p className="mt-4 text-center text-white/20 text-xs font-mono">
          * simulação ilustrativa baseada em diagnósticos reais realizados pela Nexus TI
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-track-transparent::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thumb-white\\/10::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>
    </section>
  )
}
