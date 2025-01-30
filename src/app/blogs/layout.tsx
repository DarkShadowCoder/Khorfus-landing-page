import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Khorfus ',
  description: 'All in one Agency Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html
      lang="en"
      suppressHydrationWarning
      >
        <body className={inter.className}> {children} </body>
      </html>
  )
}
