import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import UIProvider from '@/components/UIProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CanRepro',
  description: 'Expertos en llaves y ECUs para coches',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <Header />
          {children}
        </UIProvider>
      </body>
    </html>
  )
}
