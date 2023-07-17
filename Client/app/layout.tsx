import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'

const inter = Comic_Neue({
  subsets: ['latin'],
  weight: '700'
})

export const metadata: Metadata = {
  title: 'Word Guessing',
  description: 'Developed By @XausMaster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
