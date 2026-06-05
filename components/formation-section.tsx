
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaGraduationCap, FaCertificate, FaBookOpen } from "react-icons/fa"

const formations = [
  {
    title: "Técnico em Segurança do Trabalho",
    institution: "Universidade Cesumar",
    period: "2026 - Em andamento",
    status: "Em andamento",
    icon: FaGraduationCap,
    description: "Formação técnica completa em Segurança do Trabalho, abrangendo todas as Normas Regulamentadoras e práticas de SST.",
  },
]

const certificates: { name: string; hours: string }[] = []

const courses: string[] = []

export function FormationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="formacao" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Formation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {formations.map((formation) => (
                <div
                  key={formation.title}
                  className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <formation.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {formation.status}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {formation.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{formation.institution}</p>
                  <p className="text-sm text-primary font-medium mb-4">{formation.period}</p>
                  <p className="text-muted-foreground text-sm">{formation.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaCertificate className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Certificados em NRs
                </h3>
                {certificates.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">
                      Certificados serão adicionados conforme forem sendo concluídos.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {certificates.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                      >
                        <span className="text-sm text-foreground">{cert.name}</span>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                          {cert.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Complementary Courses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaBookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Cursos Complementares
                </h3>
                {courses.length === 0 ? (
                  <div className="text-center py-6">
                    <p className="text-muted-foreground">
                      Cursos complementares serão adicionados conforme forem sendo concluídos.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {courses.map((course) => (
                      <div
                        key={course}
                        className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


/*
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaGraduationCap, FaCertificate, FaBookOpen } from "react-icons/fa"

const formations = [
  {
    title: "Técnico em Segurança do Trabalho",
    institution: "Instituição de Ensino Técnico",
    period: "2025 - Em andamento",
    status: "Em andamento",
    icon: FaGraduationCap,
    description: "Formação técnica completa em Segurança do Trabalho, abrangendo todas as Normas Regulamentadoras e práticas de SST.",
  },
]

const certificates = [
  { name: "NR-01 - Disposições Gerais", hours: "8h" },
  { name: "NR-06 - Equipamentos de Proteção Individual", hours: "8h" },
  { name: "NR-12 - Segurança em Máquinas e Equipamentos", hours: "16h" },
  { name: "NR-35 - Trabalho em Altura", hours: "8h" },
  { name: "Primeiros Socorros", hours: "20h" },
  { name: "Combate a Incêndio", hours: "8h" },
]

const courses = [
  "Gestão de Riscos Ocupacionais",
  "Ergonomia no Trabalho",
  "CIPA - Comissão Interna de Prevenção de Acidentes",
  "Análise Preliminar de Riscos",
  "Investigação de Acidentes",
  "Legislação Trabalhista em SST",
]

export function FormationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="formacao" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {formations.map((formation) => (
                <div
                  key={formation.title}
                  className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <formation.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {formation.status}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {formation.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{formation.institution}</p>
                  <p className="text-sm text-primary font-medium mb-4">{formation.period}</p>
                  <p className="text-muted-foreground text-sm">{formation.description}</p>
                </div>
              ))}
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaCertificate className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Certificados em NRs
                </h3>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                    >
                      <span className="text-sm text-foreground">{cert.name}</span>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {cert.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <FaBookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Cursos Complementares
                </h3>
                <div className="space-y-3">
                  {courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}*/
