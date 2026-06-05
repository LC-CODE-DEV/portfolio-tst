"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HiDownload, HiDocumentText } from "react-icons/hi"

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="curriculo" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Currículo
            </h2>
            <p className="text-muted-foreground">
              Baixe meu currículo completo em formato PDF
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HiDocumentText className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2">
              Lucas Lemos
            </h3>
            <p className="text-muted-foreground mb-6">
              Técnico em Segurança do Trabalho
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/curriculo-lucas-lemos.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <HiDownload className="w-5 h-5" />
                Baixar Currículo PDF
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Última atualização: Janeiro 2026
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
