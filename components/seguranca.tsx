"use client"

import { Shield, Eye, KeyRound, Lock, AlertTriangle, FileSearch } from "lucide-react"

const itens = [
  {
    icon: Shield,
    titulo: "Firewall Corporativo",
    descricao: "Proteção perimetral com Fortinet, pfSense e UDM-Pro. Controle de acesso, filtragem de conteúdo e auditoria contínua para sua empresa.",
  },
  {
    icon: KeyRound,
    titulo: "Active Directory & Identidade",
    descricao: "Gestão de usuários, permissões e GPOs. Controle granular de acesso a recursos, File Server e políticas de segurança corporativa.",
  },
  {
    icon: Eye,
    titulo: "Monitoramento 24/7",
    descricao: "Monitoramento proativo de redes e servidores com Zabbix. Alertas automáticos e relatórios de disponibilidade em tempo real.",
  },
  {
    icon: AlertTriangle,
    titulo: "Proteção contra Ransomware",
    descricao: "PMEs são o principal alvo de ataques no Brasil. Implementamos proteção em camadas: firewall, controle de acesso e monitoramento contínuo.",
  },
  {
    icon: FileSearch,
    titulo: "Auditoria e Conformidade",
    descricao: "Análise de vulnerabilidades, logs de acesso e relatórios de conformidade. Adequação à LGPD com documentação técnica completa.",
  },
  {
    icon: Lock,
    titulo: "VPN & Acesso Remoto Seguro",
    descricao: "VPNs IPsec site-to-site e acesso remoto corporativo com autenticação forte. Segmentação por VLANs e controle de dispositivos.",
  },
]

export function Seguranca() {
  return (
    <section id="seguranca" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,170,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabeçalho */}
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest mb-3">segurança</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl font-bold text-white leading-tight max-w-xl">
              Sua empresa{" "}
              <span className="text-[#00aaff]">blindada contra ameaças</span>
            </h2>
            <p className="text-white/40 text-sm max-w-sm lg:text-right leading-relaxed">
              Segurança da informação em camadas — do firewall ao monitoramento contínuo — para empresas que não podem parar.
            </p>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itens.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a]/50 border border-[#1a1a1a] hover:border-[#00aaff]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00aaff]/30 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-[#00aaff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00aaff] transition-colors">
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-[#888888] group-hover:text-[#aaaaaa] transition-colors">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-2xl border border-[#00aaff]/20 bg-[#00aaff]/5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#00aaff]/10 border border-[#00aaff]/30 flex items-center justify-center shrink-0">
            <Shield className="text-[#00aaff]" size={22} />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold mb-1">Solicite um diagnóstico gratuito de segurança</p>
            <p className="text-white/40 text-sm">Analisamos sua rede e entregamos um relatório com os pontos críticos — sem compromisso.</p>
          </div>
          <a
            href="https://wa.me/5562998062169?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20de%20seguran%C3%A7a"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#00aaff] text-black text-sm font-semibold hover:bg-[#33bbff] transition-colors"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  )
}
