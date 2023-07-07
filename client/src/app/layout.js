import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto p-4`}>{children}</body>
    </html>
  )
}
