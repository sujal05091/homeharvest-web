'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChefHat, User, Send } from 'lucide-react'
import Button from './Button'

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState<'customer' | 'cook' | 'partner'>('customer')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        // Simulate API call
        setTimeout(() => {
            setStatus('success')
            console.log('Waitlist submission:', { name, email, role })
        }, 1500)
    }

    const resetForm = () => {
        setEmail('')
        setName('')
        setRole('customer')
        setStatus('idle')
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            {status === 'success' ? (
                                <div className="p-12 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <Send size={40} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Thanks for joining. We'll verify your details and notify you when {role === 'customer' ? 'we launch in your area' : 'onboarding begins'}.
                                    </p>
                                    <Button onClick={resetForm} className="w-full">
                                        Awesome
                                    </Button>
                                </div>
                            ) : (
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900">Join the Waitlist</h3>
                                        <p className="text-gray-600 mt-2">Get early access and exclusive launch offers.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Role Selection */}
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <button
                                                type="button"
                                                onClick={() => setRole('customer')}
                                                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${role === 'customer'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-100 hover:border-gray-200 text-gray-500'
                                                    }`}
                                            >
                                                <User size={24} />
                                                <span className="font-medium text-sm">I want to Eat</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setRole('cook')}
                                                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${role === 'cook'
                                                        ? 'border-primary bg-primary/5 text-primary'
                                                        : 'border-gray-100 hover:border-gray-200 text-gray-500'
                                                    }`}
                                            >
                                                <ChefHat size={24} />
                                                <span className="font-medium text-sm">I want to Cook</span>
                                            </button>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                className="w-full"
                                                variant="primary"
                                            >
                                                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
