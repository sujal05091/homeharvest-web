'use client'

import { motion } from 'framer-motion'

interface PhoneMockupProps {
  imageSrc: string
  alt: string
  className?: string
}

export default function PhoneMockup({ imageSrc, alt, className = '' }: PhoneMockupProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] h-[580px] bg-dark rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-dark rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="relative w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/10 to-transparent z-10" />
          
          {/* App content placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">App Screenshot</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Side button */}
        <div className="absolute right-[-3px] top-28 w-1 h-12 bg-gray-600 rounded-l" />
        <div className="absolute left-[-3px] top-24 w-1 h-8 bg-gray-600 rounded-r" />
        <div className="absolute left-[-3px] top-36 w-1 h-16 bg-gray-600 rounded-r" />
      </div>
      
      {/* Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 rounded-[3rem] pointer-events-none" />
    </motion.div>
  )
}
