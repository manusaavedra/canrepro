import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import UIProvider from '@/components/UIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CanRepro',
  description: 'Expertos en llaves y ECUs para coches',
  openGraph: {
    images: ['https://th.bing.com/th/id/OIP.j9pKlQsgEXEoHZnfAkOLWAHaFP?rs=1&pid=ImgDetMain']
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
            <p className="text-sm">creado por <a className="font-semibold text-green-600" href="https://www.instagram.com/manusaav3dra" target="_blank">webcodedev</a></p>
          </footer>
        </UIProvider>
      </body>
    </html>
  )
}
