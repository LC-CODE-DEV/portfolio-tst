"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { HiExternalLink } from "react-icons/hi"
import {
  FaClipboardCheck,
  FaExclamationTriangle,
  FaComments,
  FaMapMarkerAlt,
  FaTasks,
} from "react-icons/fa"

const projects = [
  {
    title: "Análise de Riscos de Escritório",
    description:
      "Identificação e avaliação de riscos ergonômicos, físicos e psicossociais em ambiente de escritório, com propostas de medidas preventivas.",
    image: "/projetos/capa.png",
    pdf: "/projetos/analise-riscos-escritorio.pdf",
    tools: ["APR", "Checklist", "NR-17"],
    color: "from-blue-500/20 to-blue-600/10",
  },

  {
    title: "DDS - Diálogo Diário de Segurança",
    description:
      "Elaboração de roteiros para Diálogos Diários de Segurança sobre diversos temas como EPIs, ergonomia e prevenção de acidentes.",
    image: "/projetos/dds-capa.png", // coloque a imagem quando tiver
    href: "/projetos/dds-epi",
    tools: ["Apresentações", "Material Didático"],
    color: "from-orange-500/20 to-orange-600/10",
    fit: "contain",
  },

  /*
  {
    title: "Checklist de Inspeção de Segurança",
    description:
      "Desenvolvimento de checklist completo para inspeções periódicas de segurança.",
    image: "/projetos/checklist-capa.png",
    href: "/projetos/checklist",
    tools: ["Excel", "NR-04", "Formulários"],
    color: "from-green-500/20 to-green-600/10",
  },

  {
    title: "Mapa de Riscos",
    description:
      "Criação de mapa de riscos ambientais identificando áreas críticas.",
    image: "/projetos/mapa-capa.png",
    href: "/projetos/mapa-riscos",
    tools: ["AutoCAD", "NR-05", "CIPA"],
    color: "from-red-500/20 to-red-600/10",
  },

  {
    title: "Plano de Ação Preventiva",
    description:
      "Plano estruturado para implementação de medidas preventivas.",
    image: "/projetos/plano-capa.png",
    href: "/projetos/plano-acao",
    tools: ["5W2H", "PDCA", "Gestão"],
    color: "from-purple-500/20 to-purple-600/10",
  },
  */
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projetos de SST
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Projetos acadêmicos desenvolvidos durante a formação técnica
            </p>

            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full hover:border-primary/50 transition-all duration-300 hover:shadow-md">

                  {/* Imagem do projeto */}
                  <div className="w-full h-32 rounded-xl overflow-hidden bg-white mb-6 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full ${project.fit === "contain" ? "object-contain p-2" : "object-cover"
                        }`}
                    />
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Botão */}
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    >
                      Ver Projeto
                      <HiExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                    >
                      Ver Projeto
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}