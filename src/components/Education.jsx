import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-xl card-hover"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      B.Tech, Engineering Physics
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1">
                      Major in Electronics
                    </p>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                      Delhi Technological University
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full flex items-center gap-2">
                      <Award size={16} />
                      <span className="font-semibold">CGPA: 7.41/10</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2018 - 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Delhi, India</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strong foundation in physics and electronics engineering principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed analytical and problem-solving skills through rigorous coursework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Gained experience in programming and software development during studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education