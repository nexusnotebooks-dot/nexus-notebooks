"use client"

import { useState } from "react"
import { X, ZoomIn, Server } from "lucide-react"

const fotos = [
  { src: "/galeria/1.jpeg", alt: "Rack corporativo montado", label: "Rack Corporativo" },
  { src: "/galeria/2.jpeg", alt: "Firewall e equipamentos de rede", label: "Firewall / Core" },
  { src: "/galeria/3.jpeg", alt: "Rack completo montado", label: "Rack Completo" },
  { src: "/galeria/4.jpeg", alt: "Patch panel e cabeamento estruturado", label: "Cabeamento Estruturado" },
  { src: "/galeria/5.jpeg", alt: "Switch e equipamentos de rede", label: "Infraestrutura de Rede" },
  { src: "/galeria/6.jpeg", alt: "Rack com switches gerenciáveis", label: "Switch Gerenciável" },
  { src: "/galeria/7.jpeg", alt: "Rack aberto com equipamentos", label: "Rack Aberto" },
  { src: "/galeria/8.jpeg", alt: "Servidor com iluminação", label: "Servidor Dedicado" },
  { src: "/galeria/9.jpeg", alt: "Rack compacto montado", label: "Rack Compacto" },
  { src: "/galeria/10.jpeg", alt: "Equipamentos em rack 1U/2U", label: "Rack 1U/2U" },
  { src: "/galeria/11.jpeg", alt: "Organização de cabos em rack", label: "Organização de Cabos" },
  { src: "/galeria/12.jpeg", alt: "Servidor blade em rack", label: "Servidor Blade" },
  { src: "/galeria/13.jpeg", alt: "Rack de servidores em data center", label: "Data Center" },
  { src: "/galeria/14.jpeg", alt: "Patch panel Cat6 organizado", label: "Patch Panel Cat6" },
  { src: "/galeria/15.jpeg", alt: "Rack com nobreaks e servidores", label: "Rack + Nobreak" },
  { src: "/galeria/16.jpeg", alt: "Rack completo com cabeamento", label: "Infraestrutura Completa" },
  { src: "/galeria/17.jpeg", alt: "Servidores Dell em rack", label: "Servidores Dell" },
  { src: "/galeria/18.jpeg", alt: "Rack de distribuição de rede", label: "Switch de Distribuição" },
  { src: "/galeria/19.jpeg", alt: "Rack com equipamentos de rede", label: "Infraestrutura de Rede" },
]

export function GaleriaInfraestrutura() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const fechar = () => setLightbox(null)
  const anterior = () => setLightbox((prev) => (prev !== null ? (prev - 1 + fotos.length) % fotos.length : null))
  const proximo = () => setLightbox((prev) => (prev !== null ? (prev + 1) % fotos.length : null))

  return (
    <section id="infraestrutura" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">infraestrutura</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl font-bold text-white leading-tight max-w-xl">
              Trabalhos realizados em{" "}
              <span className="text-cyan-400">redes e servidores reais</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs lg:text-right leading-relaxed">
              Racks montados, cabeamento estruturado e infraestrutura entregue para empresas em Goiânia e região.
            </p>
          </div>
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {fotos.map((foto, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 aspect-square"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="text-cyan-400" size={22} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium truncate">{foto.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
            <Server className="text-cyan-400" size={18} />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Quer uma infraestrutura assim na sua empresa?</p>
            <p className="text-white/40 text-xs mt-0.5">Atendemos Goiânia, Aparecida de Goiânia e região.</p>
          </div>
          <a
            href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20vi%20os%20trabalhos%20de%20infraestrutura%20no%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={fechar}
        >
          <button
            onClick={fechar}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="text-white" size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); anterior() }}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-2xl"
          >
            ‹
          </button>

          <div
            className="max-w-4xl max-h-[85vh] mx-16 flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fotos[lightbox].src}
              alt={fotos[lightbox].alt}
              className="max-h-[78vh] max-w-full object-contain rounded-xl border border-white/10"
            />
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 text-xs font-mono">{fotos[lightbox].label}</span>
              <span className="text-white/20 text-xs">{lightbox + 1} / {fotos.length}</span>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); proximo() }}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-2xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
