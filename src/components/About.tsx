'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, Clock, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Over a decade of reliable service in the taxi industry',
    },
    {
      icon: Shield,
      title: 'Trusted Service',
      description: 'Safe, secure, and dependable transportation',
    },
    {
      icon: Clock,
      title: 'Always On Time',
      description: 'Punctual service with real-time tracking',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">WayBi</span>
          </h2>
          <p className="section-subtitle">
            Your trusted partner for comfortable and reliable transportation across India
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Based in India, with over <strong className="text-secondary">10 years of experience</strong> in the taxi service industry, 
                WayBi has been your trusted transportation partner for countless journeys.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We pride ourselves on providing <strong className="text-primary">reliable service</strong>, 
                <strong className="text-primary"> clean cars</strong>, and 
                <strong className="text-primary"> customer satisfaction</strong> — all at the most competitive prices in the market.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you need a quick city ride, airport transfer, or a long-distance journey, 
                our professional drivers and well-maintained vehicles ensure your comfort and safety every step of the way.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200"
              >
                <span className="text-sm font-semibold text-gray-700">
                  ✓ Licensed & Insured
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200"
              >
                <span className="text-sm font-semibold text-gray-700">
                  ✓ 24/7 Service
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-200"
              >
                <span className="text-sm font-semibold text-gray-700">
                  ✓ GPS Tracking
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Image and Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="WayBi professional driver"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </motion.div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
