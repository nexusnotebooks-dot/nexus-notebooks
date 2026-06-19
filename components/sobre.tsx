"use client"

import { Shield, Server, Cloud, Network, GraduationCap, Radio, HardHat, Users } from "lucide-react"

const stats = [
  { value: "20+", label: "anos de experiência" },
  { value: "35+", label: "clientes ativos" },
  { value: "800+", label: "usuários gerenciados" },
  { value: "99,9%", label: "uptime garantido" },
]

const competencias = [
  { icon: Cloud, titulo: "Cloud & Virtualização", descricao: "AWS, Azure, GCP, VMware ESXi e Hyper-V" },
  { icon: Network, titulo: "Redes & Segurança", descricao: "VPNs IPsec, VLANs, Fortinet, pfSense e UDM-Pro" },
  { icon: Server, titulo: "Servidores", descricao: "Windows Server, Linux, Docker e Kubernetes" },
  { icon: Shield, titulo: "Backup & DR", descricao: "Veeam, planejamento e execução de disaster recovery" },
]

const credenciais = [
  { icon: GraduationCap, label: "Pós-graduado em Segurança da Informação", sub: "UFG" },
  { icon: Radio, label: "Graduado em Redes de Computadores", sub: "Anhanguera" },
  { icon: HardHat, label: "Registro CREA Ativo", sub: "Engenharia aplicada à TI" },
]

const equipe = [
  { iniciais: "RF", nome: "Rafael Ferreira", cargo: "Analista de Infraestrutura" },
  { iniciais: "LB", nome: "Lucas Borges", cargo: "Especialista em Cloud" },
  { iniciais: "AS", nome: "Ana Souza", cargo: "Analista de Segurança" },
  { iniciais: "JP", nome: "João Peixoto", cargo: "Analista de Redes" },
]

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-10">sobre a nexus ti</p>

        {/* ── BLOCO 1: CAIO ── */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10">

          {/* Foto do Caio */}
          <div className="shrink-0 flex flex-col items-center lg:items-start gap-4">
            <div
              style={{
                width: "180px",
                height: "220px",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(0,170,255,0.35)",
                boxShadow: "0 0 60px rgba(0,170,255,0.2), 0 0 0 1px rgba(0,170,255,0.1)",
                position: "relative",
              }}
            >
              <img
                src="https://res.cloudinary.com/ddnbvkduq/image/upload/f_auto,q_auto/foto-perfil_vqdn8m.jpg"
                alt="Caio Maracaipe — Responsável Técnico"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)",
                }}
              />
              <div style={{ position: "absolute", bottom: "12px", left: 0, right: 0, textAlign: "center" }}>
                <p style={{ color: "white", fontSize: "13px", fontWeight: 600, margin: 0 }}>Caio Maracaipe</p>
                <p style={{ color: "#22d3ee", fontSize: "11px", margin: 0 }}>Fundador & Responsável Técnico</p>
              </div>
            </div>

            {/* Badge responsável técnico */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-xs text-white/60 max-w-[180px]">
              <Shield className="text-cyan-400 shrink-0" size={12} />
              <span>Responsável técnico por todos os ambientes</span>
            </div>
          </div>

          {/* Texto sobre o Caio */}
          <div className="space-y-5 text-white/60 text-base leading-relaxed">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Infraestrutura gerenciada por quem{" "}
              <span className="text-cyan-400">vive isso há mais de 20 anos</span>
            </h2>
            <p>
              Sou Caio Maracaipe, fundador e responsável técnico da Nexus TI. Com mais de 20 anos de atuação
              em infraestrutura, redes e cloud computing, lidero pessoalmente a estratégia e a supervisão de
              cada ambiente que gerenciamos — garantindo que nada passe sem o meu aval técnico.
            </p>
            <p>
              Ao longo da carreira, atuei em indústrias farmacêuticas, órgãos públicos como o Tribunal de
              Contas do Estado de Goiás, Ministério da Saúde e IBAMA, e empresas de diferentes portes e
              segmentos. Essa experiência me deu visão ampla de problemas reais — e como resolvê-los com
              eficiência.
            </p>
            <p>
              Para entregar essa escala com qualidade, conto com uma equipe de analistas especializados que
              atua sob minha supervisão direta, garantindo suporte ágil e operação contínua para todos os
              nossos clientes.
            </p>
          </div>
        </div>

        {/* Credenciais — logo abaixo do bloco do Caio */}
        <div className="flex flex-wrap gap-3 mb-16">
          {credenciais.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 px-4 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/50 transition-colors"
            >
              <c.icon className="text-cyan-400 shrink-0" size={16} />
              <div className="leading-tight">
                <span className="text-white text-sm font-medium">{c.label}</span>
                <span className="text-white/40 text-xs ml-2">— {c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── BLOCO 2: STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 rounded-xl p-6 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
            >
              <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── BLOCO 3: EQUIPE ── */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Users className="text-cyan-400" size={16} />
            <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest">equipe de analistas</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {equipe.map((membro) => (
              <div
                key={membro.nome}
                className="border border-white/10 rounded-xl p-5 text-center hover:border-cyan-400/30 transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #0a4a6e, rgba(0,191,255,0.2))",
                    border: "1px solid rgba(0,191,255,0.3)",
                  }}
                >
                  {membro.iniciais}
                </div>
                <p className="text-white text-sm font-medium leading-tight mb-1">{membro.nome}</p>
                <p className="text-cyan-400 text-xs leading-tight">{membro.cargo}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BLOCO 4: COMPETÊNCIAS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencias.map((c) => (
            <div
              key={c.titulo}
              className="border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-colors group"
              style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <c.icon className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={20} />
              <p className="text-white font-medium text-sm mb-1">{c.titulo}</p>
              <p className="text-white/40 text-xs leading-relaxed">{c.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
