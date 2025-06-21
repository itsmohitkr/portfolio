import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in JavaScript, Node.js, and React'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'Extensive experience with AWS services'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in PostgreSQL and data modeling'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building efficient and scalable solutions'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As a <strong className="text-primary-600 dark:text-primary-400">Software Engineer</strong> at{' '}
              <strong className="text-primary-600 dark:text-primary-400">Chegg India</strong>, I specialize in building robust and scalable web applications. My expertise spans across full-stack development, with a strong foundation in{' '}
              <strong className="text-primary-600 dark:text-primary-400">JavaScript</strong>,{' '}
              <strong className="text-primary-600 dark:text-primary-400">Node.js</strong>, and{' '}
              <strong className="text-primary-600 dark:text-primary-400">React</strong>, coupled with extensive experience in cloud platforms like{' '}
              <strong className="text-primary-600 dark:text-primary-400">AWS</strong> and database management with{' '}
              <strong className="text-primary-600 dark:text-primary-400">PostgreSQL</strong>.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am passionate about creating efficient solutions, enhancing user experiences, and contributing to impactful projects. I thrive in environments where I can continuously learn and apply new technologies to solve complex engineering challenges.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                Problem Solver
              </div>
              <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                Team Player
              </div>
              <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                Continuous Learner
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About