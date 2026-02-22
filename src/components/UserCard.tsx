'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Button from './Button'

interface UserCardProps {
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
  ctaText: string
  variant: 'customer' | 'cook' | 'partner'
  index?: number
}

const variantStyles = {
  customer: {
    gradient: 'from-primary to-primary-600',
    bg: 'bg-primary/5',
    accent: 'text-primary',
  },
  cook: {
    gradient: 'from-secondary to-secondary-600',
    bg: 'bg-secondary/5',
    accent: 'text-secondary',
  },
  partner: {
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    accent: 'text-amber-600',
  },
}

export default function UserCard({ 
  icon: Icon, 
  title, 
  description, 
  benefits, 
  ctaText, 
  variant,
  index = 0 
}: UserCardProps) {
  const styles = variantStyles[variant]
  
  return (
    <motion.div
      className="relative overflow-hidden bg-white rounded-3xl card-shadow card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Header gradient */}
      <div className={`p-8 pb-16 bg-gradient-to-br ${styles.gradient}`}>
        <motion.div 
          className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4"
          whileHover={{ rotate: 10 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
      
      {/* Content */}
      <div className="p-8 -mt-8">
        <div className={`${styles.bg} rounded-2xl p-6 mb-6`}>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <motion.li 
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <svg className={`w-5 h-5 mt-0.5 ${styles.accent} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant={variant === 'cook' ? 'secondary' : 'primary'} 
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  )
}
