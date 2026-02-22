'use client'

import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import { 
  Utensils, 
  ShoppingBag, 
  MapPin, 
  Briefcase, 
  Star, 
  Clock,
  Heart,
  Shield
} from 'lucide-react'

const features = [
  {
    icon: Utensils,
    title: 'Browse Home-Cooked Meals',
    description: 'Discover authentic dishes from talented home cooks near you. From regional specialties to comfort food classics.',
  },
  {
    icon: ShoppingBag,
    title: 'Easy Ordering',
    description: 'Order with just a few taps. Choose your meal, customize portions, and checkout in seconds.',
  },
  {
    icon: MapPin,
    title: 'Live Order Tracking',
    description: 'Track your meal in real-time from kitchen to doorstep. Know exactly when your food arrives.',
  },
  {
    icon: Briefcase,
    title: 'Office Tiffin Service',
    description: 'Subscribe to daily tiffin delivery at your workplace. Healthy, fresh meals every day.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Make informed choices with honest reviews from real customers. Rate your experience too.',
  },
  {
    icon: Clock,
    title: 'Scheduled Delivery',
    description: 'Plan your meals ahead. Schedule orders for later today or even next week.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <SectionHeading
          label="Features"
          title={
            <>
              Everything You Need for{' '}
              <span className="text-primary">Perfect Meals</span>
            </>
          }
          subtitle="From discovery to delivery, we've crafted every feature to make your home-cooked meal experience seamless and delightful."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-primary to-primary-600 rounded-3xl text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: '500K+', label: 'Happy Customers' },
            { number: '10K+', label: 'Home Cooks' },
            { number: '50+', label: 'Cities' },
            { number: '2M+', label: 'Meals Delivered' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
              <div className="text-white/80 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
