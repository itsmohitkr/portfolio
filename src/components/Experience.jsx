import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering',
      company: 'Chegg India',
      location: 'Delhi, India',
      period: 'Jan 2022 - Present',
      type: 'Full-time',
      responsibilities: [
        'Developing an on-demand IT lab environment using AWS EC2, enabling students to launch pre-configured virtual machines with Amazon NICE DCV for remote access.',
        'Developed APIs and implemented core functionality for various beta projects integral to the engineering curriculum, enhancing overall learning experiences.',
        'Graded and provided feedback on 2000+ student coding submissions, while offering real-time support via chat and video calls, helping students overcome coding challenges and clarify engineering concepts. Also played a key role in QA processes to ensure the highest educational standards for courses.'
      ],
      current: true
    },
    {
      title: 'Web Development Intern',
      company: 'Iha consulting services',
      location: 'Hyderabad',
      period: 'June 2021 - Aug 2021',
      type: 'Internship',
      responsibilities: [
        'Build an application that supports authentication features for new user registration for an upcoming webinar.',
        'Develop publication pages and updates about upcoming events with a content management page for updating posts by the admin.'
      ],
      current: false
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 card-hover">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full animate-pulse">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience