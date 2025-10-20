'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Users, Snowflake, Luggage, Shield } from 'lucide-react'

const Vehicles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const vehicles = [
    {
      id: 1,
      name: 'Toyota Innova',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '7 Seater',
        ac: 'AC Available',
        luggage: '4 Bags',
        comfort: 'Premium Seats'
      },
      description: 'Perfect for family trips and group travel with maximum comfort',
      price: '₹15/km'
    },
    {
      id: 2,
      name: 'Maruti Ertiga',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '7 Seater',
        ac: 'AC Available',
        luggage: '3 Bags',
        comfort: 'Comfy Seats'
      },
      description: 'Reliable and fuel-efficient for everyday travel needs',
      price: '₹12/km'
    },
    {
      id: 3,
      name: 'Sedan',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '4 Seater',
        ac: 'AC Available',
        luggage: '2 Bags',
        comfort: 'Luxury Seats'
      },
      description: 'Premium sedan for business travel and special occasions',
      price: '₹18/km'
    },
    {
      id: 4,
      name: 'Tempo Traveller',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '12 Seater',
        ac: 'AC Available',
        luggage: '8 Bags',
        comfort: 'Spacious Seats'
      },
      description: 'Large capacity vehicle for group tours and events',
      price: '₹25/km'
    },
    {
      id: 5,
      name: 'Maruti Swift',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '4 Seater',
        ac: 'AC Available',
        luggage: '2 Bags',
        comfort: 'Compact Seats'
      },
      description: 'Compact and fuel-efficient for city rides',
      price: '₹10/km'
    },
    {
      id: 6,
      name: 'Honda City',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      specs: {
        seats: '5 Seater',
        ac: 'AC Available',
        luggage: '3 Bags',
        comfort: 'Premium Seats'
      },
      description: 'Stylish and comfortable for medium distance travel',
      price: '₹16/km'
    }
  ]

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Vehicles</span>
          </h2>
          <p className="section-subtitle">
            Choose from our fleet of well-maintained, comfortable vehicles for every occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Vehicle Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-secondary">
                    {vehicle.price}
                  </span>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">
                  {vehicle.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-1.5 rounded-lg">
                      <Users className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{vehicle.specs.seats}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-1.5 rounded-lg">
                      <Snowflake className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{vehicle.specs.ac}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-1.5 rounded-lg">
                      <Luggage className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{vehicle.specs.luggage}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-1.5 rounded-lg">
                      <Shield className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm text-gray-700">{vehicle.specs.comfort}</span>
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Book {vehicle.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
              Why Choose Our Vehicles?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-secondary text-white rounded-full p-2">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Well Maintained</h4>
                  <p className="text-gray-600 text-sm">Regular service and safety checks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-secondary text-white rounded-full p-2">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Climate Controlled</h4>
                  <p className="text-gray-600 text-sm">Perfect temperature for your comfort</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-secondary text-white rounded-full p-2">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Professional Drivers</h4>
                  <p className="text-gray-600 text-sm">Experienced and courteous drivers</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Vehicles
