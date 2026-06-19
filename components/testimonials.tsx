"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  // Avaliações reais do Google (visíveis no site)
  {
    name: "Felipe Macedo",
    initials: "FM",
    role: "Cliente",
    company: "Google Review",
    time: "Há 2 dias",
    stars: 5,
    text: "Nossa sede em Goiânia tinha Wi-Fi péssimo. Reunião caindo, sistema lento, funcionário reclamando toda hora. Contratei a Nexus TI e o Caio fez um projeto de rede Wi-Fi com equipamentos UniFi, segmentação por VLANs e controle de autenticação. Parece que trocamos de escritório. Nenhum ponto cego, conexão estável em todos os ambientes. Ele entregou tudo documentado e ainda treinou nossa equipe. Profissional de outro nível.",
    google: true,
  },
  {
    name: "Rafael Barbosa",
    initials: "RB",
    role: "Empresário",
    company: "Google Review",
    time: "Há 3 dias",
    stars: 5,
    text: "Empresa séria, dominam tecnologia de ponta, soluções corporativas de redes e segurança em TI. Terceirizei meus serviços de TI da minha empresa com eles. São os melhores, recomendo.",
    google: true,
  },
  {
    name: "Nonato Junior",
    initials: "NJ",
    role: "Cliente",
    company: "Google Review",
    time: "Há 3 dias",
    stars: 5,
    text: "Migrei minha equipe pro Microsoft 365 com a ajuda do Caio. Processo limpo, sem perda de dado, sem tempo parado. Hoje trabalhamos de qualquer lugar com segurança. Excelente serviço.",
    google: true,
  },
  // Depoimentos existentes no site
  {
    name: "Ricardo A.",
    initials: "RA",
    role: "Diretor de Operações",
    company: "Indústria Farmacêutica",
    time: "",
    stars: 5,
    text: "A Nexus TI transformou nossa infraestrutura. Saímos de quedas semanais para mais de 8 meses de uptime contínuo. O Caio conhece cada detalhe do nosso ambiente como se fosse a casa dele.",
    google: false,
  },
  {
    name: "Fernanda C.",
    initials: "FC",
    role: "Gerente de TI",
    company: "Empresa de Logística",
    time: "",
    stars: 5,
    text: "Terceirizamos todo o suporte com a Nexus TI há 2 anos. A diferença é absurda: resposta rápida, documentação impecável e zero enrolação. Recomendo sem hesitar.",
    google: false,
  },
  {
    name: "Marcos T.",
    initials: "MT",
    role: "Sócio-Proprietário",
    company: "Rede de Clínicas",
    time: "",
    stars: 5,
    text: "Tínhamos problemas sérios de segurança e rede lenta nas unidades. A Nexus resolveu tudo em poucos dias — firewall, VPN entre clínicas e Wi-Fi corporativo estável. Profissionalismo de verdade.",
    google: false,
  },
]

// Duplica para loop infinito suave
const ITEMS = [...testimonials, ...testimonials]
const CARD_WIDTH = 380
const GAP = 16

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const animRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const SPEED = 0.4 // px por ms

  const totalWidth = testimonials.length * (CARD_WIDTH + GAP)

  useEffect(() => {
    const animate = (time: number) => {
      if (!isPaused) {
        if (lastTimeRef.current !== null) {
          const delta = time - lastTimeRef.current
          setOffset((prev) => {
            const next = prev + SPEED * delta
            return next >= totalWidth ? next - totalWidth : next
          })
        }
        lastTimeRef.current = time
      } else {
        lastTimeRef.current = null
      }
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [isPaused, totalWidth])

  useEffect(() => {
    const idx = Math.round(offset / (CARD_WIDTH + GAP)) % testimonials.length
    setActiveIndex(idx)
  }, [offset])

  const scrollTo = (dir: -1 | 1) => {
    setOffset((prev) => {
      const next = prev + dir * (CARD_WIDTH + GAP)
      if (next < 0) return totalWidth + next
      if (next >= totalWidth) return next - totalWidth
      return next
    })
  }

  return (
    <section id="depoimentos" className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">Avaliações</p>
            <h2 className="text-4xl font-bold text-white leading-tight">
              O que nossos clientes{" "}
              <span className="text-cyan-400">dizem sobre nós</span>
            </h2>
          </div>

          {/* Google badge */}
          <a
            href="https://www.google.com/search?kgmid=/g/11z5b8qv04&hl=pt-BR&q=Nexus+TI"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-colors group"
          >
            {/* Google G */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white font-bold text-sm ml-1">5,0</span>
              </div>
              <p className="text-white/40 text-xs">12 avaliações no Google</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors ml-2" />
          </a>
        </div>
      </div>

      {/* Carousel — full bleed */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              willChange: "transform",
            }}
          >
            {ITEMS.map((t, i) => (
              <div
                key={i}
                style={{ width: `${CARD_WIDTH}px`, minWidth: `${CARD_WIDTH}px` }}
                className="bg-[#0f0f0f] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-cyan-400/30 transition-colors duration-300"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                      <span className="text-cyan-400 text-xs font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/35 text-xs mt-0.5">{t.role} · {t.company}</p>
                    </div>
                  </div>
                  {t.google ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 opacity-60">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ) : null}
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  {t.time && <span className="text-white/25 text-xs ml-2 self-center">{t.time}</span>}
                </div>

                {/* Text */}
                <p className="text-white/55 text-sm leading-relaxed flex-1 line-clamp-5">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto px-6 mt-8 flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i * (CARD_WIDTH + GAP))}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Arrows + Google CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo(-1)}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 text-white/40 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scrollTo(1)}
            className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 text-white/40 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
          <a
            href="https://www.google.com/search?kgmid=/g/11z5b8qv04&hl=pt-BR&q=Nexus+TI"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs text-white/30 hover:text-cyan-400 transition-colors underline underline-offset-2"
          >
            Ver todas no Google →
          </a>
        </div>
      </div>
    </section>
  )
}
