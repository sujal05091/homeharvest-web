'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  {
    id: 1,
    title: 'Home Page',
    description: 'A Beautifully Designed Home Page',
    image: '/screenshots/app_1.jpeg',
  },
  {
    id: 2,
    title: 'Discover Meals',
    description: 'Browse through hundreds of home-cooked dishes',
    image: '/screenshots/app_2.jpeg',
  },
  {
    id: 3,
    title: 'Food Details',
    description: 'Detailed Information About The Food',
    image: '/screenshots/app_3.jpeg',
  },
  {
    id: 4,
    title: 'Cart Details',
    description: 'Good Cart page with more information',
    image: '/screenshots/app_4.jpeg',
  },
  {
    id: 5,
    title: 'Live Tracking',
    description: 'Track your order in real-time',
    image: '/screenshots/app_5.jpeg',
  },
]

export default function AppScreenshots() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const getPosition = (index: number) => {
    const diff = index - activeIndex
    const normalizedDiff = ((diff + screenshots.length) % screenshots.length)

    if (normalizedDiff === 0) return 'center'
    if (normalizedDiff === 1 || normalizedDiff === -4) return 'right'
    if (normalizedDiff === screenshots.length - 1 || normalizedDiff === -1) return 'left'
    if (normalizedDiff === 2 || normalizedDiff === -3) return 'far-right'
    return 'far-left'
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          label="App Preview"
          title={
            <>
              Experience the <span className="text-primary">HomeHarvest</span> App
            </>
          }
          subtitle="Designed for simplicity. Built for speed. Made for food lovers."
        />

        {/* Phone carousel */}
        <div className="relative h-[650px] flex items-center justify-center">
          {/* Navigation buttons */}
          <motion.button
            onClick={prev}
            className="absolute left-4 md:left-20 z-30 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={next}
            className="absolute right-4 md:right-20 z-30 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Phones */}
          <div className="relative w-full h-full flex items-center justify-center">
            {screenshots.map((screen, index) => {
              const position = getPosition(index)

              const positions = {
                'far-left': { x: '-200%', scale: 0.5, opacity: 0, zIndex: 0 },
                'left': { x: '-120%', scale: 0.7, opacity: 0.5, zIndex: 10 },
                'center': { x: '0%', scale: 1, opacity: 1, zIndex: 20 },
                'right': { x: '120%', scale: 0.7, opacity: 0.5, zIndex: 10 },
                'far-right': { x: '200%', scale: 0.5, opacity: 0, zIndex: 0 },
              }

              const pos = positions[position]

              return (
                <motion.div
                  key={screen.id}
                  className="absolute"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${pos.x})`,
                    y: '-50%',
                    scale: pos.scale,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ left: '50%', top: '50%' }}
                >
                  {/* Phone frame */}
                  <div className="w-[280px] h-[580px] bg-dark rounded-[3rem] p-3 shadow-2xl relative overflow-hidden ring-4 ring-gray-200">
                    <div className="w-full h-full bg-gray-100 rounded-[2.3rem] overflow-hidden relative">
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        fill
                        className="object-cover"
                        priority={index === activeIndex}
                      />
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300/50 rounded-full" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Active Item Description Below */}
        <div className="mt-12 text-center max-w-2xl mx-auto h-[100px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-dark mb-2">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-gray-600">
                {screenshots[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1)
                setActiveIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                ? 'bg-primary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
