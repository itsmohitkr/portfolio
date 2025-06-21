import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Javascript', 'C++', 'Java'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Core Competencies',
      skills: ['Object-orientated programming', 'Data structures', 'Algorithms'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Development Tools',
      skills: ['Node.JS', 'Express.JS', 'React', 'Spring Boot', 'HTML', 'CSS'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Familiar with',
      skills: ['System Design', 'PostgreSQL', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'AWS', 'Microservices'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-800 dark:hover:text-primary-300 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills