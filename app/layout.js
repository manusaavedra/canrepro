import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import UIProvider from '@/components/UIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Can Repro | Copias de llaves de coche y motos en Ibiza',
  description: 'Expertos en llaves y ECUs para coches',
  openGraph: {
    images: ['https://canrepro.com/open-graph-image.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <UIProvider>
          <Header />
          {children}
          <footer className="flex flex-col items-center py-2 justify-center">
            <p> © {new Date().getFullYear()} canrepro.com</p>
            <p className="text-sm">creado por <a className="font-semibold text-green-600" href="https://www.instagram.com/webcode.dev/" target="_blank">webcodedev</a></p>
          </footer>
        </UIProvider>
      </body>
    </html>
  )
}
