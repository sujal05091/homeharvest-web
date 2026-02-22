'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeadingProps {
  label?: string
  title: string | ReactNode
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ 
  label, 
  title, 
  subtitle, 
  centered = true,
  light = false 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <motion.span 
          className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {label}
        </motion.span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
