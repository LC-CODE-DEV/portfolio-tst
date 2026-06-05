"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FaSearch, 
  FaHardHat, 
  FaClipboardList, 
  FaComments, 
  FaShieldAlt, 
  FaHeartbeat, 
  FaSearchPlus, 
  FaBook 
} from "react-icons/fa"

const skills = [
  {
    title: "Identificação de Riscos",
    description: "Capacidade de identificar e avaliar riscos ocupacionais em diferentes ambientes de trabalho.",
    icon: FaSearch,
  },
  {
    title: "Uso e Fiscalização de EPIs",
    description: "Conhecimento sobre EPIs adequados para cada atividade e técnicas de fiscalização.",
    icon: FaHardHat,
  },
  {
    title: "Inspeções de Segurança",
    description: "Realização de inspeções periódicas para verificar conformidade com normas de segurança.",
    icon: FaClipboardList,
  },
  {
    title: "Diálogo Diário de Segurança",
    description: "Elaboração e condução de DDS para conscientização dos colaboradores.",
    icon: FaComments,
  },
  {
    title: "Prevenção de Acidentes",
    description: "Implementação de medidas preventivas para eliminar ou reduzir riscos de acidentes.",
    icon: FaShieldAlt,
  },
  {
    title: "Saúde Ocupacional",
    description: "Promoção da saúde e bem-estar dos trabalhadores no ambiente laboral.",
    icon: FaHeartbeat,
  },
  {
    title: "Investigação de Incidentes",
    description: "Análise de causas de acidentes e incidentes para prevenção de recorrências.",
    icon: FaSearchPlus,
  },
  {
    title: "Normas Regulamentadoras",
    description: "Conhecimento aprofundado das NRs e sua aplicação prática no ambiente de trabalho.",
    icon: FaBook,
  },
]

const badges = [
  "Segurança do Trabalho",
  "Gestão de Riscos",
  "DDS",
  "EPI",
  "SST",
  "Saúde Ocupacional",
  "Prevenção",
  "Inspeção",
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="conhecimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conhecimentos em Segurança do Trabalho
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Competências desenvolvidas durante a formação técnica
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {badges.map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
