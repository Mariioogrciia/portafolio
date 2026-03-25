import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Mario García · Full Stack Developer',
  description:
    'Portafolio de Mario García, Desarrollador Full Stack especializado en React, Next.js, Python y Azure. Estudiante de Máster en IA & Big Data.',
  keywords: [
    'desarrollador full stack',
    'React',
    'Next.js',
    'Python',
    'Azure',
    'IA',
    'Big Data',
    'Madrid',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Mario García' }],
  creator: 'Mario García',
  publisher: 'Mario García',
  openGraph: {
    title: 'Mario García · Full Stack Developer',
    description:
      'Desarrollador Full Stack especializado en IA, Big Data y Azure. Portfolio de proyectos reales.',
    url: 'https://portafolio-rho-pied.vercel.app',
    siteName: 'Mario García Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://portafolio-rho-pied.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mario García - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario García · Full Stack Developer',
    description: 'Portafolio de Mario García, Full Stack Developer + IA & Big Data',
    creator: '@MarioGarcia',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%25%22 stop-color=%22%236366f1%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23a855f7%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%230a0a0a%22/%3E%3Crect x=%223%22 y=%223%22 width=%2258%22 height=%2258%22 rx=%2212%22 fill=%22none%22 stroke=%22url(%23g)%22 stroke-width=%222%22/%3E%3Ctext x=%2232%22 y=%2240%22 text-anchor=%22middle%22 font-family=%22Arial,sans-serif%22 font-size=%2226%22 font-weight=%22700%22 fill=%22%23ffffff%22%3EMG%3C/text%3E%3C/svg%3E',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://portafolio-rho-pied.vercel.app" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
