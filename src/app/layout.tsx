import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin']});

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
        <body className={outfit.className}> {children} </body>
      </html>
  )
}
