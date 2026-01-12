'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Mountain, Target, Compass, Shield, Sparkles, TrendingUp, Zap, Crown, Award } from 'lucide-react'

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTA = () => {
    window.open('https://mpago.li/2QGG8LC', '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50">
              <Mountain className="w-10 h-10 text-black" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
              Você entrou no primeiro degrau do império.
            </h2>
            <p className="text-xl text-gray-300">
              Seus primeiros resultados abrem o caminho para o próximo nível.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section with Real Mountain Background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Real Mountain Background with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80)',
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.4) contrast(1.2)'
          }}
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        
        {/* Golden light rays effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#D4AF37] opacity-10 blur-[200px] rounded-full" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FFD700] opacity-5 blur-[150px] rounded-full" />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
        }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Brand with glow */}
          <div className="mb-8">
            <p className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-2 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
              O Novo Império
            </p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>

          {/* Main Title with dramatic shadow */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]" style={{
              textShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
            }}>
              O DESPERTAR
            </span>
          </h1>

          {/* Subtitle with glow */}
          <p className="text-2xl md:text-3xl text-[#D4AF37] mb-12 font-light tracking-wide drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">
            O primeiro degrau da sua ascensão.
          </p>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed backdrop-blur-sm bg-black/20 p-8 border border-white/10">
            <p>
              O Despertar é o ponto onde sua antiga versão termina<br />
              e o seu processo real de crescimento começa.
            </p>
            <p>
              Aqui você constrói a base que prepara sua mente, suas decisões<br />
              e sua disciplina para os próximos níveis do império.
            </p>
          </div>

          {/* Social Proof Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 text-sm text-gray-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] border-2 border-black" />
            </div>
            <span className="text-[#D4AF37] font-semibold">+500 pessoas</span> já iniciaram sua jornada
          </div>

          {/* CTA Button with enhanced effects */}
          <button
            onClick={handleCTA}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="relative z-10">Quero Iniciar o Despertar</span>
            <ChevronRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Urgency text */}
          <p className="mt-4 text-sm text-gray-400 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            Vagas limitadas para acompanhamento personalizado
          </p>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Block with pathway visual */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        
        {/* Pathway lines effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Este É Apenas o Começo
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-12 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-black/30 p-10 border border-white/10">
            <p>
              O Despertar não é o destino.<br />
              <span className="text-[#D4AF37] font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Ele é a fundação</span> que prepara você para o próximo nível.
            </p>
            <p>
              Você entra aqui para organizar sua mente, sua rotina e sua direção,<br />
              e após os primeiros resultados e lucros, você é direcionado ao próximo degrau da ascensão.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Build with enhanced cards */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              O Que Você Vai Construir
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Disciplina',
                description: 'Base que sustenta crescimento real.'
              },
              {
                icon: Target,
                title: 'Clareza',
                description: 'Visão limpa de onde você está e para onde vai.'
              },
              {
                icon: Compass,
                title: 'Direção',
                description: 'Caminho definido de evolução pessoal e financeira.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center border border-[#D4AF37]/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow">
                    <item.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              O Que Está Incluso
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Mentalidade de poder',
              'Estrutura inicial de disciplina',
              'Direção clara de vida',
              'Primeiras ações práticas',
              'Sistema para romper estagnação',
              'Acompanhamento inicial estratégico'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group backdrop-blur-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              >
                <div className="w-2 h-2 bg-[#D4AF37] rotate-45 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Block with mountain silhouette */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37] opacity-5 blur-[150px]" />
        </div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
          <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,300 L0,150 L200,100 L400,180 L600,50 L800,120 L1000,80 L1200,150 L1200,300 Z" fill="url(#mountainGradient)" />
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Primeiro Você Estrutura.<br />
              Depois Você Escala.
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-12 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-black/30 p-10 border border-white/10">
            <p>
              Você não constrói um império começando pelo topo.<br />
              <span className="text-[#D4AF37] font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Você constrói pela base.</span>
            </p>
            <p>
              O Despertar prepara você para gerar seus primeiros avanços e lucros<br />
              que te qualificam para o próximo nível de acompanhamento.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4">
            <TrendingUp className="w-12 h-12 text-[#D4AF37] opacity-50 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            <Sparkles className="w-8 h-8 text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            <TrendingUp className="w-12 h-12 text-[#D4AF37] opacity-50 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>
        </div>
      </section>

      {/* Price & CTA with premium card */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="mb-12 p-12 bg-gradient-to-b from-white/5 to-transparent border-2 border-[#D4AF37]/30 relative overflow-hidden group hover:border-[#D4AF37]/60 transition-all duration-500 backdrop-blur-sm hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/50" />
            
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-sm font-bold flex items-center gap-2">
              <Crown className="w-4 h-4" />
              OFERTA EXCLUSIVA
            </div>
            
            <div className="relative z-10 mt-4">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                O DESPERTAR
              </p>
              
              {/* Price with strikethrough */}
              <div className="mb-6">
                <p className="text-2xl text-gray-500 line-through mb-2">
                  De R$297,00
                </p>
                <p className="text-5xl md:text-6xl font-bold text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
                  R$39,99
                </p>
                <p className="text-sm text-[#D4AF37] mt-2 font-semibold">
                  Economia de 87% - Apenas hoje!
                </p>
              </div>
              
              {/* Benefits list */}
              <div className="mb-8 space-y-3 text-left max-w-md mx-auto">
                {[
                  'Acesso imediato ao conteúdo completo',
                  'Acompanhamento estratégico personalizado',
                  'Suporte direto da equipe'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <Award className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleCTA}
                className="group/btn relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-6 w-full justify-center"
              >
                <span className="relative z-10">Começar Agora</span>
                <ChevronRight className="w-6 h-6 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              </button>

              <div className="space-y-2">
                <p className="text-sm text-gray-400 tracking-wider">
                  Primeiro degrau do sistema O Novo Império.
                </p>
                <p className="text-xs text-[#D4AF37] flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3" />
                  Vagas limitadas - Garanta a sua agora
                </p>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final Block with gate visual */}
      <section className="relative py-32 px-6 mb-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#D4AF37] opacity-5 blur-[200px]" />
        </div>

        {/* Gate/Portal effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-64 h-96 border-4 border-[#D4AF37] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 border-4 border-[#D4AF37] rounded-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Seu Primeiro Passo Está Aqui
            </span>
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-12 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

          <div className="space-y-6 text-xl text-gray-300 leading-relaxed mb-12 backdrop-blur-sm bg-black/30 p-10 border border-white/10">
            <p>
              Você não precisa estar pronto.<br />
              <span className="text-[#D4AF37] font-semibold text-2xl drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">Você precisa decidir.</span>
            </p>
            <p>
              Após seus primeiros avanços, nossa equipe irá te direcionar<br />
              para o próximo nível da sua ascensão.
            </p>
            <p className="text-[#D4AF37] font-bold text-2xl">
              Por apenas R$39,99 você inicia sua transformação hoje.
            </p>
          </div>

          <button
            onClick={handleCTA}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.8)] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="relative z-10">Quero Iniciar o Despertar</span>
            <ChevronRight className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <p className="mt-6 text-sm text-gray-500">
            Investimento único de R$39,99 - Sem mensalidades
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 tracking-wider">
            O NOVO IMPÉRIO © 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
