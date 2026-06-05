"use client"

import Link from "next/link"
import { FaLinkedin, FaGithub, FaWhatsapp, FaShieldAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucaslemostst/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/lucaslemos",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/5511989126085",
  },
  {
    icon: HiMail,
    label: "E-mail",
    href: "mailto:lucas.silva285@yahoo.com",
  },
]

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Formação", href: "#formacao" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <FaShieldAlt className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg text-foreground">
                Lucas Lemos
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Estudante de Técnico em Segurança do Trabalho, dedicado à
              prevenção de acidentes e promoção da saúde ocupacional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Lucas Lemos | Segurança do Trabalho | {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
