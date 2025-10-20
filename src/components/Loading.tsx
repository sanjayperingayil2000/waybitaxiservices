'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-4xl font-bold font-poppins gradient-text mb-2">
            WayBi
          </div>
          <div className="text-gray-600">Loading your journey...</div>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  )
}

export default Loading
