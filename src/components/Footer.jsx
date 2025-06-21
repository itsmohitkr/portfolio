import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center space-x-2 text-gray-400">
            <span>&copy; 2025 Mohit Kumar. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer