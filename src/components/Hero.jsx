import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react'


const Hero = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:itsmohit3005@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    },
    {
      icon: Github,
      href: 'https://github.com/itsmohitkr',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/itsmohitkr',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    }
   
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm{' '}
                <span className="gradient-text">Mohit Kumar</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              >
                Software Engineer at Chegg India
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
              >
                Passionate about building robust and scalable web applications. 
                Specializing in full-stack development with expertise in JavaScript, 
                Node.js, React, and cloud platforms like AWS.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 ${link.color}`}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
              
              <a
                href="https://drive.google.com/file/d/1X0izjmVPDYNYCTRnX2o-LyI6lTOLu5LO/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="w-full px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-purple-600 opacity-20 blur-xl"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="../../images/your-profile-image.jpg"
                alt="Mohit Kumar"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero