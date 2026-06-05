"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa"

const timeline = [
  {
    year: "2025",
    title: "Técnico em Segurança do Trabalho",
    description: "Início do curso técnico, adquirindo conhecimentos em NRs, gestão de riscos e prevenção de acidentes.",
    icon: FaGraduationCap,
  },
  {
    year: "2026",
    title: "Buscando Oportunidades",
    description: "Em busca de estágio ou posição como Auxiliar de Segurança do Trabalho para aplicar os conhecimentos adquiridos.",
    icon: FaBriefcase,
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Minha Jornada
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-10 shadow-sm border border-border mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Atualmente cursando Técnico em Segurança do Trabalho, busco
              oportunidades de estágio e atuação como Auxiliar de Segurança do
              Trabalho. Meu objetivo é contribuir para ambientes mais seguros,
              desenvolver experiência prática e crescer profissionalmente na
              área de SST.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-pretty">
              Com dedicação e comprometimento, estou construindo uma base sólida
              de conhecimentos técnicos e práticos que me permitirão fazer a
              diferença na prevenção de acidentes e na promoção da saúde
              ocupacional.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className="md:hidden ml-12 flex-1">
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
