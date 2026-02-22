'use client'

import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import UserCard from '../components/UserCard'
import { Users, ChefHat, Bike } from 'lucide-react'

const userTypes = [
  {
    icon: Users,
    title: 'For Customers',
    description: 'Enjoy healthy, homemade meals without the hassle of cooking',
    benefits: [
      'Access to 1000+ home cooks',
      'Fresh meals from ₹80 only',
      'Subscribe for daily tiffin',
      'Customize your meals',
      'No minimum order value',
    ],
    ctaText: 'Start Ordering',
    variant: 'customer' as const,
  },
  {
    icon: ChefHat,
    title: 'For Home Cooks',
    description: 'Turn your cooking passion into a profitable home business',
    benefits: [
      'Earn ₹25,000+ monthly',
      'Set your own prices & menu',
      'Flexible working hours',
      'We handle delivery & payments',
      'Zero upfront investment',
    ],
    ctaText: 'Start Cooking',
    variant: 'cook' as const,
  },
  {
    icon: Bike,
    title: 'For Delivery Partners',
    description: 'Join our growing fleet and earn on your own schedule',
    benefits: [
      'Earn ₹15,000+ monthly',
      'Weekly payouts guaranteed',
      'Flexible work hours',
      'Incentives & bonuses',
      'Insurance coverage',
    ],
    ctaText: 'Start Delivering',
    variant: 'partner' as const,
  },
]

export default function ForWho() {
  return (
    <section id="for-who" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeading
          label="Join HomeHarvest"
          title={
            <>
              Built for <span className="text-primary">Everyone</span> Who Loves{' '}
              <span className="text-secondary">Good Food</span>
            </>
          }
          subtitle="Whether you want to eat better, earn from cooking, or deliver happiness – there's a place for you at HomeHarvest."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <UserCard
              key={user.title}
              icon={user.icon}
              title={user.title}
              description={user.description}
              benefits={user.benefits}
              ctaText={user.ctaText}
              variant={user.variant}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
