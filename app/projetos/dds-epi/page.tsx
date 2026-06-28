import type { Metadata } from "next"
import { DdsProjectPage } from "@/components/dds-project-page"

export const metadata: Metadata = {
  title: "DDS – Uso Correto de EPIs | Lucas Lemos",
  description:
    "Diálogo Diário de Segurança sobre a importância do uso correto dos Equipamentos de Proteção Individual.",
}

export default function Page() {
  return <DdsProjectPage />
}
