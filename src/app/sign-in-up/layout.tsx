import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Khorfus ',
  description: 'All in one Agency Solution',
}

export default function RootLayout({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
      <html
      lang="en"
      suppressHydrationWarning
      >
        <body className={className}> {children} </body>
      </html>
  )
}
