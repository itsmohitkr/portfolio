import React from 'react'
import { motion } from 'framer-motion'

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl floating-element"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-element"
      />
      
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl floating-element"
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.3)_25px,rgba(59,130,246,0.3)_26px,transparent_27px,transparent_49px,rgba(59,130,246,0.3)_50px,rgba(59,130,246,0.3)_51px,transparent_52px),linear-gradient(rgba(59,130,246,0.3)_24px,transparent_25px,transparent_26px,rgba(59,130,246,0.3)_27px,rgba(59,130,246,0.3)_49px,transparent_50px,transparent_51px,rgba(59,130,246,0.3)_52px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundElements