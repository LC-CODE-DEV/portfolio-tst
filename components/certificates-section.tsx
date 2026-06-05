"use client"

import { FaCertificate } from "react-icons/fa"

export function CertificatesSection() {
  return (
    <section id="certificados" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certificados
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border text-center shadow-sm">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <FaCertificate className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Certificações em Desenvolvimento
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Certificações e capacitações serão apresentadas conforme forem sendo concluídas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


/*"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { HiX, HiZoomIn } from "react-icons/hi"
import { FaCertificate } from "react-icons/fa"


const certificates = [

  {
    id: 1,
    title: "NR-01 - Disposições Gerais",
    institution: "Escola Técnica de Segurança",
    date: "Janeiro 2025",
    hours: "8h",
  },
  {
    id: 2,
    title: "NR-06 - Equipamentos de Proteção Individual",
    institution: "Escola Técnica de Segurança",
    date: "Fevereiro 2025",
    hours: "8h",
  },
  {
    id: 3,
    title: "NR-12 - Segurança em Máquinas",
    institution: "Escola Técnica de Segurança",
    date: "Março 2025",
    hours: "16h",
  },
  {
    id: 4,
    title: "NR-35 - Trabalho em Altura",
    institution: "Escola Técnica de Segurança",
    date: "Abril 2025",
    hours: "8h",
  },
  {
    id: 5,
    title: "Primeiros Socorros",
    institution: "Cruz Vermelha",
    date: "Maio 2025",
    hours: "20h",
  },
  {
    id: 6,
    title: "Combate a Incêndio",
    institution: "Corpo de Bombeiros",
    date: "Junho 2025",
    hours: "8h",
  },
]

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certificados" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificados
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certificações obtidas durante a formação
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <div className="relative h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <FaCertificate className="w-16 h-16 text-primary/30" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <div className="p-3 bg-background/90 rounded-full">
                        <HiZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.institution}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{cert.date}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                        {cert.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <FaCertificate className="w-24 h-24 text-primary/40" />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-background transition-colors"
                >
                  <HiX className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-muted-foreground mb-4">{selectedCert.institution}</p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Emitido em: {selectedCert.date}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Carga horária: {selectedCert.hours}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
  */
