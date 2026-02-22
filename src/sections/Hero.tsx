'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Main Headline */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight text-gray-900 mb-8"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#500a0aff' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Home<br />
              Harvest
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl text-gray-700 mb-10"
              style={{ fontFamily: 'Cormorant, serif', fontWeight: 400, color: '#800000', fontStyle: 'normal' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Healthy Food, Healty Life !
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border-2 border-gray-900 text-gray-900 text-xl hover:bg-gray-900 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, letterSpacing: '0.5px' }}
              >
                Explore Now
              </button>
              <button
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-primary text-white text-xl hover:bg-primary-600 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 border-2 border-primary"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, letterSpacing: '0.5px' }}
              >
                Download App
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/hero-woman.jpeg"
                alt="Home Harvest - Healthy Food, Happy You"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center w-full px-4"
      >
        <p
          className="text-2xl md:text-3xl lg:text-4xl text-center tracking-wide"
          style={{
            fontFamily: 'Sacramento, cursive',
            fontWeight: 400,
            color: '#800000'
          }}
        >
          GAR KA KANA ON RIGHT TIME ❤️
        </p>
      </motion.div>
    </section>
  )
}
