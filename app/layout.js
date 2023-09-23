import './globals.css'
import Head from './head'
import { Inter } from 'next/font/google'
import Header from './common/header'
import Footer from './common/footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
