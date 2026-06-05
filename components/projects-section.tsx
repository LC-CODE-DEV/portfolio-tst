"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HiExternalLink } from "react-icons/hi"
import { 
  FaClipboardCheck, 
  FaExclamationTriangle, 
  FaComments, 
  FaMapMarkerAlt, 
  FaTasks 
} from "react-icons/fa"

const projects = [
  {
    title: "Análise de Riscos de Escritório",
    description: "Identificação e avaliação de riscos ergonômicos, físicos e psicossociais em ambiente de escritório, com propostas de medidas preventivas.",
    icon: FaExclamationTriangle,
    tools: ["APR", "Checklist", "NR-17"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  /*{
    title: "Checklist de Inspeção de Segurança",
    description: "Desenvolvimento de checklist completo para inspeções periódicas de segurança, abrangendo instalações, equipamentos e procedimentos.",
    icon: FaClipboardCheck,
    tools: ["Excel", "NR-04", "Formulários"],
    color: "from-green-500/20 to-green-600/10",
  },
  {
    title: "DDS - Diálogo Diário de Segurança",
    description: "Elaboração de roteiros para Diálogos Diários de Segurança sobre diversos temas como EPIs, ergonomia, e prevenção de acidentes.",
    icon: FaComments,
    tools: ["Apresentações", "Material Didático"],
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    title: "Mapa de Riscos",
    description: "Criação de mapa de riscos ambientais identificando áreas críticas e classificando os riscos por tipo e intensidade.",
    icon: FaMapMarkerAlt,
    tools: ["AutoCAD", "NR-05", "CIPA"],
    color: "from-red-500/20 to-red-600/10",
  },
  {
    title: "Plano de Ação Preventiva",
    description: "Desenvolvimento de plano estruturado para implementação de medidas preventivas, com cronograma e responsabilidades definidas.",
    icon: FaTasks,
    tools: ["5W2H", "PDCA", "Gestão"],
    color: "from-purple-500/20 to-purple-600/10",
  },*/
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
                  <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform`}>
                    <project.icon className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
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
                  
                  <button className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                    Ver Projeto
                    <HiExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
