"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  HiChevronRight,
  HiDownload,
  HiOutlineClock,
  HiChevronLeft,
} from "react-icons/hi"
import {
  FaShieldAlt,
  FaBullseye,
  FaUsers,
  FaFileAlt,
  FaRegFilePdf,
  FaRegFilePowerpoint,
  FaRegFileAlt,
  FaClipboardList,
  FaDesktop,
  FaBookOpen,
  FaHardHat,
  FaGlasses,
  FaMitten,
  FaHeadphones,
  FaShoePrints,
  FaCheckCircle,
} from "react-icons/fa"

const infoItems = [
  {
    icon: FaBullseye,
    title: "OBJETIVO",
    text: "Conscientizar os colaboradores sobre a importância dos EPIs na prevenção de acidentes.",
  },
  {
    icon: HiOutlineClock,
    title: "DURAÇÃO",
    text: "5 a 10 minutos",
  },
  {
    icon: FaUsers,
    title: "PÚBLICO-ALVO",
    text: "Todos os colaboradores das áreas operacionais.",
  },
  {
    icon: FaFileAlt,
    title: "NORMA APLICÁVEL",
    text: "NR-06 – Equipamentos de Proteção Individual",
  },
]

const aboutCards = [
  {
    icon: FaClipboardList,
    title: "ROTEIRO DDS",
    text: "Roteiro completo com introdução, pontos principais, perguntas para interação e mensagem final.",
  },
  {
    icon: FaDesktop,
    title: "APRESENTAÇÃO",
    text: "Apresentação em PowerPoint com slides visuais e ilustrações para dinâmica do diálogo.",
  },
  {
    icon: FaBookOpen,
    title: "MATERIAL EDUCATIVO",
    text: "Folheto informativo com dicas e boas práticas para reforçar o conteúdo apresentado.",
  },
  {
    icon: FaUsers,
    title: "APLICAÇÃO",
    text: "Material pronto para ser aplicado antes do início das atividades diárias.",
  },
]

const downloads = [
  {
    icon: FaRegFilePdf,
    iconColor: "text-red-500",
    title: "Roteiro DDS – Uso Correto de EPIs",
    meta: "PDF • 1.2 MB",
  },
  {
    icon: FaRegFilePowerpoint,
    iconColor: "text-orange-500",
    title: "Apresentação PowerPoint",
    meta: "PPTX • 5.8 MB",
  },
  {
    icon: FaRegFileAlt,
    iconColor: "text-green-500",
    title: "Material Educativo (Folheto)",
    meta: "PDF • 1.5 MB",
  },
]

const epiList = [
  { icon: FaHardHat, label: "Capacete" },
  { icon: FaGlasses, label: "Óculos" },
  { icon: FaMitten, label: "Luvas" },
  { icon: FaHeadphones, label: "Protetor auricular" },
  { icon: FaShieldAlt, label: "Respirador" },
  { icon: FaShoePrints, label: "Botina" },
]

const usoCorretoItems = [
  "Utilize o EPI adequado para cada atividade.",
  "Verifique se o equipamento está em boas condições.",
  "Confira se possui CA válido.",
  "Comunique danos imediatamente.",
]

const aplicacaoFotos = [
  "/images/dds-aplicacao-1.png",
  "/images/dds-aplicacao-2.png",
  "/images/dds-aplicacao-3.png",
]

const slides = [
  { id: 0, title: "O que são EPIs?" },
  { id: 1, title: "Principais EPIs" },
  { id: 2, title: "Uso Correto" },
  { id: 3, title: "Mensagem Final" },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-1 h-5 bg-primary rounded-full" />
      <h2 className="text-lg font-bold text-foreground">{children}</h2>
    </div>
  )
}

export function DdsProjectPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <HiChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link href="/#projetos" className="text-muted-foreground hover:text-foreground transition-colors">
            Projetos
          </Link>
          <HiChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-primary font-medium">DDS - Uso Correto de EPIs</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Topo: capa + info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Capa DDS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-card rounded-2xl border border-border overflow-hidden aspect-[3/4]"
              >
                

                {/* Imagem dos EPIs */}
                <div className="absolute right-0 top-1/4 w-3/5 h-1/2 opacity-90">
                  <Image
                    src="/images/dds-epi-photo.png"
                    alt="Equipamentos de Proteção Individual: capacete, óculos, abafadores e luvas"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Título + descrição */}
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">
                  DDS – Uso Correto de EPIs
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Diálogo Diário de Segurança sobre a importância do uso correto dos
                  Equipamentos de Proteção Individual.
                </p>
                <div className="relative z-10 mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-xs font-semibold text-foreground">
                        SEGURANÇA NÃO É SORTE, É ATITUDE!
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      Sua vida é o nosso maior valor.
                    </p>
                  </div>
              </div>
            </div>

            {/* Cards de informação */}
            <div className="space-y-6 border-t border-border pt-8">
              {infoItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary tracking-wide">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sobre o Projeto */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Sobre o Projeto</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Desenvolvimento de roteiro, apresentação e material educativo para aplicação do DDS
                sobre o uso correto de EPIs. O conteúdo foi elaborado de forma prática e objetiva
                para facilitar o entendimento e promover a conscientização da equipe.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutCards.map((card) => (
                  <div
                    key={card.title}
                    className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-colors"
                  >
                    <card.icon className="w-7 h-7 text-primary mb-3" />
                    <h3 className="text-sm font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner contato */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-foreground text-center sm:text-left">
                Gostou deste projeto? Entre em contato para conversar sobre como posso ajudar a sua
                empresa.
              </p>
              <Link
                href="/#contato"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Fale Comigo
              </Link>
            </div>
          </div>

          {/* Sidebar direita */}
          <aside className="space-y-8">
            {/* Downloads */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <SectionLabel>Downloads</SectionLabel>
              <p className="text-xs text-muted-foreground mb-4">
                Baixe os materiais completos deste projeto.
              </p>
              <div className="space-y-3">
                {downloads.map((d) => (
                  <button
                    key={d.title}
                    className="w-full flex items-center gap-3 bg-secondary/50 hover:bg-secondary rounded-lg p-3 transition-colors text-left group"
                  >
                    <d.icon className={`w-7 h-7 ${d.iconColor} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">{d.title}</p>
                      <p className="text-[11px] text-muted-foreground">{d.meta}</p>
                    </div>
                    <HiDownload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Prévia da Apresentação */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <SectionLabel>Prévia da Apresentação</SectionLabel>
              <p className="text-xs text-muted-foreground mb-4">
                Confira alguns slides da apresentação.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {/* Slide 1: O que são EPIs */}
                <div className="bg-secondary/40 rounded-lg p-3 border border-border">
                  <h4 className="text-[11px] font-bold text-foreground mb-2">O QUE SÃO EPIs?</h4>
                  <p className="text-[9px] text-muted-foreground leading-snug mb-2">
                    Equipamentos de Proteção Individual são dispositivos utilizados para proteger o
                    trabalhador contra riscos que possam ameaçar sua segurança e saúde.
                  </p>
                  <FaShieldAlt className="w-5 h-5 text-primary" />
                </div>

                {/* Slide 2: Principais EPIs */}
                <div className="bg-secondary/40 rounded-lg p-3 border border-border">
                  <h4 className="text-[11px] font-bold text-foreground mb-2">PRINCIPAIS EPIs</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {epiList.map((epi) => (
                      <div key={epi.label} className="flex flex-col items-center text-center">
                        <epi.icon className="w-4 h-4 text-foreground mb-1" />
                        <span className="text-[7px] text-muted-foreground leading-tight">
                          {epi.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide 3: Uso Correto */}
                <div className="bg-secondary/40 rounded-lg p-3 border border-border">
                  <h4 className="text-[11px] font-bold text-primary mb-2">USO CORRETO</h4>
                  <ul className="space-y-1">
                    {usoCorretoItems.map((item) => (
                      <li key={item} className="flex items-start gap-1">
                        <span className="text-primary text-[9px] mt-0.5">•</span>
                        <span className="text-[9px] text-muted-foreground leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Slide 4: Mensagem Final */}
                <div className="bg-secondary/40 rounded-lg p-3 border border-border flex flex-col">
                  <h4 className="text-[11px] font-bold text-foreground mb-2">MENSAGEM FINAL</h4>
                  <p className="text-[9px] text-muted-foreground leading-snug mb-2">
                    O EPI não evita o risco, mas reduz drasticamente as consequências de um acidente.
                  </p>
                  <div className="flex items-center gap-1 mt-auto">
                    <FaShieldAlt className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-semibold text-foreground">
                      Segurança é compromisso de todos!
                    </span>
                  </div>
                </div>
              </div>

              {/* Indicadores */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {slides.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(slide.id)}
                    aria-label={`Ir para slide ${slide.title}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === slide.id ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Aplicação Real */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <SectionLabel>Aplicação Real</SectionLabel>
              <p className="text-xs text-muted-foreground mb-4">
                Registro de aplicação do DDS com a equipe.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {aplicacaoFotos.map((foto, i) => (
                  <div
                    key={foto}
                    className="relative aspect-square rounded-lg overflow-hidden border border-border"
                  >
                    <Image
                      src={foto || "/placeholder.svg"}
                      alt={`Aplicação real do DDS com a equipe ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Voltar */}
        <div className="mt-12">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <HiChevronLeft className="w-4 h-4" />
            Voltar para Projetos
          </Link>
        </div>
      </div>
    </main>
  )
}