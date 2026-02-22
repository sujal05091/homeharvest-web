'use client'

import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import StepCard from '../components/StepCard'
import { ChefHat, Package, Truck, UtensilsCrossed, Clock } from 'lucide-react'
import Image from 'next/image'
import normalFoodImg from '../assets/image/normal-food-delivery.jpeg'
import tiffinServiceImg from '../assets/image/tiffin-service.jpeg'

const steps = [
  {
    title: 'Cook Prepares',
    description: 'Home cooks prepare fresh meals with love using quality ingredients',
    icon: <ChefHat className="w-12 h-12" />,
  },
  {
    title: 'We Pick Up',
    description: 'Our delivery partner collects your order from the cook\'s kitchen',
    icon: <Package className="w-12 h-12" />,
  },
  {
    title: 'Delivered Fresh',
    description: 'Hot, fresh meals arrive at your doorstep in insulated packaging',
    icon: <Truck className="w-12 h-12" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          label="How It Works"
          title={
            <>
              From Kitchen to Your Table in{' '}
              <span className="text-secondary">3 Simple Steps</span>
            </>
          }
          subtitle="We've made it incredibly easy to enjoy home-cooked meals. Here's how it works."
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={index + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Video/Image section */}
        {/* Service Types Images */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Normal Food Delivery */}
          {/* Normal Food Delivery */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-xl bg-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={normalFoodImg}
                alt="Normal Food Delivery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 text-center relative z-10 bg-white">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <UtensilsCrossed className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">On-Demand Delivery</h3>
              <p className="text-gray-600">
                Order fresh home-cooked meals whenever you crave them. Delivered hot and ready to eat.
              </p>
            </div>
          </motion.div>

          {/* Tiffin Service */}
          {/* Tiffin Service */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-xl bg-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={tiffinServiceImg}
                alt="Tiffin Service"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 text-center relative z-10 bg-white">
              <div className="inline-flex p-3 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tiffin Service</h3>
              <p className="text-gray-600">
                Reliable daily meal plans. Perfect for students and professionals who need consistent healthy food.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
