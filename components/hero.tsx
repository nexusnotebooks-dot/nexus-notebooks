'use client'

import { useState, useEffect } from "react"
import { Users, Server, Shield, Wifi, Lock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const ParticlesBackground = dynamic(
  () => import("@/components/particles-background").then(m => m.ParticlesBackground),
  { ssr: false }
)

function useTypewriter(text: string, speed = 70, delay = 400) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let i = 0
    setDisplayText("")
    setIsComplete(false)
    const tick = () => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
        timeout = setTimeout(tick, speed)
      } else {
        setIsComplete(true)
      }
    }
    timeout = setTimeout(tick, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayText, isComplete }
}

const CAROUSEL_PHRASES = [
  "Terceirização de TI, suporte técnico e infraestrutura de redes para empresas em Goiânia que precisam de zero downtime.",
  "Adequações de LGPD que protege seu negócio, contra ataques e perdas de dados.",
  "Investimento em tecnologia, que agrega valor ao seu negócio, e transforma os resultados da sua empresa.",
]

function useCarouselTypewriter(phrases: string[], typeSpeed = 45, pauseMs = 2500, deleteSpeed = 20) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const current = phrases[phraseIndex]

    if (phase === "typing") {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs)
      }
    } else if (phase === "pausing") {
      setPhase("deleting")
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deleteSpeed)
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setPhase("typing")
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, phase, phraseIndex, phrases, typeSpeed, pauseMs, deleteSpeed])

  return { displayText, isTyping: phase === "typing" }
}

export function Hero() {
  const FULL_TEXT = "Infraestrutura que não para."
  const { displayText, isComplete } = useTypewriter(FULL_TEXT, 65, 400)

  const breakWord = "para."
  const breakIndex = FULL_TEXT.indexOf(breakWord)
  const line1Full = FULL_TEXT.slice(0, breakIndex)
  const line1disp = displayText.slice(0, Math.min(displayText.length, line1Full.length))
  const line2disp = displayText.length > line1Full.length ? displayText.slice(line1Full.length) : ""

  const { displayText: carouselText, isTyping } = useCarouselTypewriter(CAROUSEL_PHRASES)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-24 overflow-hidden bg-[#050505]">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,170,255,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="px-4 py-1.5 rounded-full border border-[#00aaff]/30 bg-[#00aaff]/5 backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#33bbff] animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-[#00aaff] font-semibold">Monitoramento Ativo 24/7</span>
          </div>
          <div className="px-4 py-1.5 rounded-full border border-[#fafafa]/10 bg-[#fafafa]/5 backdrop-blur-md flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-[#00aaff]" />
            <span className="text-[10px] uppercase tracking-widest text-[#888888] font-semibold">Suporte Sênior em Goiânia</span>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#fafafa] mb-6 tracking-tight leading-[1.15]">
          <span>{line1disp || "Infraestrutura que não "}</span>
          {(displayText.length >= line1Full.length || !displayText) && <br />}
          <span className="text-[#00aaff] inline-flex items-baseline">
            {line2disp || (displayText ? "" : "para.")}
            <span
              className={`inline-block w-[3px] h-[0.85em] bg-[#00aaff] ml-1 align-middle ${isComplete ? "animate-[blink_1s_steps(1)_infinite]" : "opacity-100"}`}
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Carrossel máquina de escrever */}
        <div className="min-h-[3rem] max-w-2xl mx-auto mb-10 flex items-center justify-center">
          <p className="text-[#33bbff] text-xl md:text-2xl font-medium leading-relaxed text-center">
            {carouselText}
            <span className="inline-block w-[2px] h-[1em] bg-[#00aaff] ml-1 align-middle animate-[blink_1s_steps(1)_infinite]" />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.35)] gap-2"
          >
            <a href="https://wa.me/5562998062169" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              <img src="/WhatsApp.svg" alt="" aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
            }}
            className="text-[#fafafa] px-8 py-6 rounded-xl transition-all hover:brightness-125"
          >
            <a href="#servicos">Ver Serviços</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-4xl mx-auto pt-8 border-t border-[#1a1a1a]">
          {[
            { icon: Users, label: "Terceirização de TI" },
            { icon: Server, label: "Suporte a Redes e Servidores" },
            { icon: Shield, label: "Segurança e Firewall" },
            { icon: Wifi, label: "Wi-Fi Corporativo" },
            { icon: Lock, label: "LGPD — Adequação Digital" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-[#111111] flex items-center justify-center border border-[#222222] group-hover:border-[#00aaff]/50 transition-colors">
                <item.icon className="w-7 h-7 text-[#00aaff]" />
              </div>
              <span className="text-xs font-semibold text-[#aad4f5] group-hover:text-[#fafafa] transition-colors text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
