'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import sujalImg from '../assets/image/sujal.jpeg'
import shraddhaImg from '../assets/image/shraddha.jpeg'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Safety', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ],
  partners: [
    { name: 'Become a Cook', href: '#' },
    { name: 'Delivery Partners', href: '#' },
    { name: 'Restaurant Partners', href: '#' },
    { name: 'Corporate Orders', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo variant="white" size="lg" />
            <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
              HomeHarvest connects you with talented home cooks in your neighborhood.
              Enjoy authentic, homemade meals while supporting local families.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@homeharvest.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>homeharvest.app@gmail.com</span>
              </a>
              <a href="tel:+916360577780" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+91 63605 77780</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Udupi, Karnataka, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Partners</h4>
            <ul className="space-y-3">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="border-t border-white/10">
        <div className="container-custom py-12">
          <h4 className="text-2xl font-bold mb-8 text-center">Meet Our Founders</h4>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sujal S Kumar */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden relative group border-2 border-primary/20">
                <Image
                  src={sujalImg}
                  alt="Sujal S Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white">Sujal S Kumar</h5>
                <p className="text-primary font-medium mb-1">Founder</p>
                <p className="text-gray-400 text-sm">
                  AI & DS Engineering, 3rd Year
                  <br />
                  SMVITM Bantakal
                </p>
              </div>
            </div>

            {/* Shraddha S Poojary */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-24 h-24 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden relative group border-2 border-primary/20">
                <Image
                  src={shraddhaImg}
                  alt="Shraddha S Poojary"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="text-xl font-semibold text-white">Shraddha S Poojary</h5>
                <p className="text-primary font-medium mb-1">CO-Founder</p>
                <p className="text-gray-400 text-sm">
                  ECE Engineering, 3rd Year
                  <br />
                  SMVITM Bantakal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App download badges */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400">Download the app</p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </motion.a>
              <motion.a
                href="#"
                className="block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 HomeHarvest. All rights reserved.</p>
            <p>Made with 🧡 in India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
