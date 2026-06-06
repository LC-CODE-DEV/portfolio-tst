import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Lucas Lemos | Técnico em Segurança do Trabalho',
  description: 'Portfólio profissional de Lucas Lemos - Estudante de Técnico em Segurança do Trabalho em transição de carreira. Prevenção de acidentes, saúde ocupacional e gestão de riscos.',
  keywords: ['Segurança do Trabalho', 'TST', 'SST', 'Prevenção de Acidentes', 'Saúde Ocupacional', 'NR', 'EPI', 'Lucas Lemos'],
  authors: [{ name: 'Lucas Lemos' }],
  creator: 'Lucas Lemos',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Lucas Lemos | Técnico em Segurança do Trabalho',
    description: 'Portfólio profissional de Lucas Lemos - Estudante de Técnico em Segurança do Trabalho',
    siteName: 'Lucas Lemos Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Lemos | Técnico em Segurança do Trabalho',
    description: 'Portfólio profissional de Lucas Lemos - Estudante de Técnico em Segurança do Trabalho',
  },
  icons: {
  icon: '/favicon2.png',
},
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
