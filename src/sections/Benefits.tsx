'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '../components/SectionHeading'
import { Heart, Wallet, Zap, Home } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Healthy & Nutritious',
    description: 'No preservatives, no MSG. Just wholesome ingredients cooked with care by experienced home cooks who understand nutrition.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Wallet,
    title: 'Incredibly Affordable',
    description: 'Get full home-cooked meals starting at just ₹80. Restaurant quality at home prices. Save money without sacrificing taste.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Zap,
    title: 'Fast Local Delivery',
    description: 'Since your food comes from nearby home kitchens, delivery is quick – usually under 30 minutes. Always fresh, never cold.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Home,
    title: 'Empowering Families',
    description: 'Every order supports a local home cook. You\'re not just eating well – you\'re helping families build sustainable income.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Why HomeHarvest"
              title={
                <>
                  Good for <span className="text-primary">You</span>,<br />
                  Good for <span className="text-secondary">Everyone</span>
                </>
              }
              subtitle="We're reimagining food delivery to create value for customers, cooks, and communities."
              centered={false}
            />

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-dark mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual with Lady Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-4 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-white">
                  <Image
                    src="/hero-woman.jpeg"
                    alt="Home Harvest - Home cooked meals"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                animate={{ y: [0, -5, 0] }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dark">100% Hygienic</p>
                    <p className="text-xs text-gray-500">Verified kitchens</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                animate={{ y: [0, 5, 0] }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    ⭐
                  </div>
                  <div>
                    <p className="font-semibold text-dark">4.9 Rating</p>
                    <p className="text-xs text-gray-500">50K+ happy customers</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
