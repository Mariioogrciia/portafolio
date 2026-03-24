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
  title: 'Mario García | Desarrollador Full Stack',
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
    title: 'Mario García | Desarrollador Full Stack',
    description: 'Portafolio profesional de Mario García - Full Stack Developer',
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
    title: 'Mario García | Desarrollador Full Stack',
    description: 'Portafolio de Mario García, Full Stack Developer + IA & Big Data',
    creator: '@MarioGarcia',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
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
