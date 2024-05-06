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
        </UIProvider>
      </body>
    </html>
  )
}
