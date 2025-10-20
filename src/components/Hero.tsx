'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Hero = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Innova',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Comfortable 7-seater for family trips',
    },
    {
      id: 2,
      name: 'Maruti Ertiga',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Reliable and spacious family car',
    },
    {
      id: 3,
      name: 'Sedan',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Luxury sedan for business travel',
    },
    {
      id: 4,
      name: 'Tempo Traveller',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Large capacity for group travel',
    },
    {
      id: 5,
      name: 'Maruti Swift',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Compact and fuel-efficient',
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        <Slider {...sliderSettings}>
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="relative h-screen">
              <div
                className="h-screen bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${vehicle.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6">
              Your Journey.{' '}
              <span className="text-secondary">Our Drive.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light"
          >
            Reliable, Comfortable, and Affordable Taxi Service
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <span>Book Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight size={20} />
              </motion.div>
            </button>

            <div className="flex gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                <Phone size={20} />
                <span className="font-medium">Call</span>
              </motion.a>
              
              <motion.a
                href="https://wa.me/919876543210?text=Hi%20WayBi,%20I%20want%20to%20book%20a%20ride."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-green-500/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span className="font-medium">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Floating Action Buttons - Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden flex flex-col gap-3">
        <motion.a
          href="tel:+919876543210"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-secondary text-white p-3 rounded-full shadow-lg"
          aria-label="Call Now"
        >
          <Phone size={24} />
        </motion.a>
        
        <motion.a
          href="https://wa.me/919876543210?text=Hi%20WayBi,%20I%20want%20to%20book%20a%20ride."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
