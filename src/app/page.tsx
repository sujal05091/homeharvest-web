import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import HowItWorks from '@/sections/HowItWorks'
import ForWho from '@/sections/ForWho'
import AppScreenshots from '@/sections/AppScreenshots'
import Benefits from '@/sections/Benefits'
import Testimonials from '@/sections/Testimonials'
import DownloadCTA from '@/sections/DownloadCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ForWho />
      <AppScreenshots />
      <Benefits />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
