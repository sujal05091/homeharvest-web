'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  variant?: 'default' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'default', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { text: 'text-xl', img: 32 },
    md: { text: 'text-2xl', img: 40 },
    lg: { text: 'text-3xl', img: 48 },
  }

  const colors = {
    default: {
      home: 'text-primary',
      harvest: 'text-secondary',
    },
    white: {
      home: 'text-white',
      harvest: 'text-white/80',
    },
  }

  return (
    <motion.div
      className={`font-poppins font-bold ${sizes[size].text} flex items-center gap-3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg shadow-sm"
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/bg-image.jpg"
          alt="Home Harvest Logo"
          width={sizes[size].img}
          height={sizes[size].img}
          className="object-cover"
        />
      </motion.div>
      <div className="leading-none">
        <span className={colors[variant].home}>Home</span>
        <span className={colors[variant].harvest}>Harvest</span>
      </div>
    </motion.div>
  )
}
