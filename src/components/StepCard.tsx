'use client'

import { motion } from 'framer-motion'

interface StepCardProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
}

export default function StepCard({ step, title, description, icon, isLast = false }: StepCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: step * 0.2 }}
    >
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: step * 0.2 + 0.3 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}
      
      {/* Icon circle */}
      <motion.div 
        className="relative z-10 w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-xl shadow-primary/30"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="text-white">
          {icon}
        </div>
        
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {step}
        </div>
      </motion.div>
      
      <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  )
}
