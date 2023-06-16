import './globals.css'

import { Inter } from 'next/font/google'
import Nav from './nav';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iobSmart',
  description: 'Contabilidade Inteligente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
