import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Target, TrendingUp } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'CSV File Processing Application',
      description: 'Automated application leveraging AWS S3, Lambda, SNS, and SQS for processing large CSV files with image compression.',
      problem: 'Many applications handle large CSV files with image links, but these images often need to be compressed for efficient storage and faster loading times. Manual processing is tedious and error-prone.',
      solution: 'Developed an automated application leveraging AWS S3, Lambda, SNS, and SQS. It streams large CSV files, compresses image quality by 50%, generates new URLs for compressed images, and stores metadata in PostgreSQL for retrieval via unique request IDs.',
      impact: 'Significantly reduced manual effort and processing time for large CSV files. Achieved efficient image storage and retrieval, improving application performance and user experience. Provided a scalable and robust solution for handling image processing workflows.',
      technologies: ['Node.js', 'React', 'AWS S3', 'AWS Lambda', 'AWS SQS', 'AWS SNS', 'PostgreSQL'],
      deployedLink: '#',
      githubLink: 'https://github.com/itsmohitkritsmohitkr/csv-processing-application',
      featured: true
    },
    {
      title: 'Auth-Microservices | devplanet.online',
      description: 'Robust, scalable authentication microservices system with comprehensive security features.',
      problem: 'Implementing secure and reusable authentication features across multiple applications can be complex and time-consuming.',
      solution: 'Built a robust, scalable authentication microservices system with endpoints for login, signup, logout, forgot-password, reset-password, and verify-token. Deployed on AWS EC2 using Docker, leveraging CI/CD pipelines with GitHub Actions for automated deployment. Ensured secure communication by implementing OpenSSL certificates.',
      impact: 'Provided a centralized, secure, and easily integrable authentication solution for various applications, reducing development overhead and ensuring consistent security standards. Facilitated seamless access for API key holders.',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx', 'OpenSSL', 'GitHub Actions'],
      deployedLink: 'https://devplanet.online',
      githubLink: 'https://github.com/itsmohitkritsmohitkr/Auth-Microservices',
      featured: true
    },
    {
      title: 'Restaurant Booking System',
      description: 'Comprehensive restaurant booking system with reservation and table management features.',
      problem: 'Traditional restaurant booking processes are often manual, leading to inefficiencies in reservation and table management.',
      solution: 'Developed a comprehensive restaurant booking system and implemented reservation management features including creation, listing, modification, and cancellation, and table management functionalities such as new table creation, seating, and status tracking. Focused on clean code, reusable React components, and robust API implementation with detailed error handling.',
      impact: 'Streamlined the booking and table management process for restaurants, improving operational efficiency and customer satisfaction. The emphasis on clean code and robust APIs ensures maintainability and scalability.',
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'React', 'PostgreSQL', 'Knex.js'],
      deployedLink: '#',
      githubLink: 'https://github.com/itsmohitkritsmohitkr/restaurant-booking-system',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden card-hover ${
                project.featured ? 'ring-2 ring-primary-500/20' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 ml-4">
                    <motion.a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <Zap size={20} className="mr-2" />
                      <h4 className="font-semibold">Problem</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-green-600 dark:text-green-400">
                      <Target size={20} className="mr-2" />
                      <h4 className="font-semibold">Solution</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-purple-600 dark:text-purple-400">
                      <TrendingUp size={20} className="mr-2" />
                      <h4 className="font-semibold">Impact</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects