import type { Metadata } from 'next'
import { Inter, Poppins, Sacramento } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sacramento',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HomeHarvest - Fresh Home-Cooked Meals Delivered',

  description: 'Get delicious, healthy home-cooked meals delivered to your doorstep. Support local home cooks while enjoying authentic homemade food.',
  keywords: 'home cooked meals, food delivery, tiffin service, healthy food, local cooks',
  authors: [{ name: 'HomeHarvest Team' }],
  creator: 'HomeHarvest',
  publisher: 'HomeHarvest',
  icons: {
    icon: '/bg-image.jpg',
    apple: '/bg-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'HomeHarvest - Fresh Home-Cooked Meals Delivered',
    description: 'Get delicious, healthy home-cooked meals delivered to your doorstep. Support local home cooks while enjoying authentic homemade food.',
    url: 'https://homeharvest.com',
    siteName: 'HomeHarvest',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeHarvest - Fresh Home-Cooked Meals Delivered',
    description: 'Get delicious, healthy home-cooked meals delivered to your doorstep.',
    creator: '@homeharvest',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${sacramento.variable}`}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
