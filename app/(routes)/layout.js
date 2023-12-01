import Navbar from '@/components/Navbar'
import Second from '@/components/Second'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrew & Lauren',
  description: 'Andrew & Lauren, July 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar/>
      {children}
      <div className='p-16 bg-white'><Second/></div></body>
    </html>
  )
}
