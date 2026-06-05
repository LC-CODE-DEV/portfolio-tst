"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaExclamationTriangle, FaLightbulb } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import Image from "next/image"

const observations = [
  {
    id: 1,
    image: "/observacoes/fios-corredor.jpg",
    location: "Área de circulação - Escritório",
    situation: "Fios de equipamentos expostos no corredor de passagem",
    risk: "Risco de tropeço e queda",
    consequence: "Lesões por queda, entorses, fraturas",
    recommendation: "Instalar canaletas para organização dos fios e manter o corredor livre de obstáculos",
    severity: "Médio",
  },
  {
    id: 2,
    image: "/observacoes/piso-molhado.jpg",
    location: "Copa - Área de alimentação",
    situation: "Piso molhado sem sinalização adequada",
    risk: "Risco de escorregamento",
    consequence: "Quedas com possíveis traumatismos",
    recommendation: "Utilizar placas de sinalização de piso molhado e garantir secagem adequada",
    severity: "Alto",
  },
  {
    id: 3,
    image: "/observacoes/empilhamento.jpg",
    location: "Depósito de materiais",
    situation: "Empilhamento inadequado de caixas excedendo altura segura",
    risk: "Risco de queda de materiais",
    consequence: "Lesões por impacto, esmagamento",
    recommendation: "Respeitar limites de empilhamento e utilizar estantes apropriadas",
    severity: "Alto",
  },
]

const severityColors: Record<string, string> = {
  Baixo: "bg-green-500/10 text-green-600 dark:text-green-400",
  Médio: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  Alto: "bg-red-500/10 text-red-600 dark:text-red-400",
}

export function ObservationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="observacoes" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Observações de Segurança
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Registro de situações de risco identificadas no cotidiano
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {observations.map((obs, index) => (
              <motion.div
                key={obs.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Placeholder */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Imagem */}
                    <div className="w-full lg:w-64 h-40 rounded-xl overflow-hidden flex-shrink-0 self-center">
                      <Image
                        src={obs.image}
                        alt={obs.situation}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Situação Observada</h4>
                        <p className="text-foreground">{obs.situation}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Risco Identificado</h4>
                          <p className="text-foreground text-sm">{obs.risk}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Possível Consequência</h4>
                          <p className="text-foreground text-sm">{obs.consequence}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                        <FaLightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-sm font-medium text-primary mb-1">Medida Corretiva</h4>
                          <p className="text-foreground text-sm">{obs.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
