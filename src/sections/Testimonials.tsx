'use client'

import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mansi Suvarna',
    role: 'Working Professional',
    avatar: '👩‍💼',
    rating: 5,
    text: 'HomeHarvest has been a game-changer for me. As someone who works late, getting healthy home-cooked meals delivered is a blessing. The dal makhani from Aunty Meera is better than any restaurant!',
  },
  {
    name: 'Suganthi Chandra',
    role: 'Home Cook Partner',
    avatar: '👨‍🍳',
    rating: 5,
    text: "I started cooking for HomeHarvest 6 months ago. Now I earn ₹35,000/month doing what I love. The platform handles everything – I just focus on making great food.",
  },
  {
    name: 'Naman Shetty',
    role: 'College Student',
    avatar: '👩‍🎓',
    rating: 5,
    text: "Finally, affordable food that doesn't taste like hostel mess! The subscription plan saves me so much money and I'm eating healthy for the first time since leaving home.",
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title={
            <>
              Loved by <span className="text-primary">Thousands</span>
            </>
          }
          subtitle="Don't just take our word for it. Here's what our community has to say."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-white rounded-3xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands/Press logos placeholder */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-8">Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {['TechCrunch', 'Forbes', 'YourStory', 'Inc42', 'Economic Times'].map((brand) => (
              <span key={brand} className="text-2xl font-bold text-gray-400">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
