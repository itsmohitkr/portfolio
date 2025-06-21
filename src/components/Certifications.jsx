import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X } from 'lucide-react'
import javaImage from '../../images/java.jpg'
import devopsImage from '../../images/devops.jpg'
import cppImage from '../../images/c++.jpg'
import nodeImage from '../../images/node.png'
import jsImage from '../../images/js.png'
import htmlImage from '../../images/html.png'
import cssImage from '../../images/css.png'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      title: "Java Spring Framework 6 with Spring Boot 3",
      provider: "Telusko",
      image: javaImage,
      link: "https://www.udemy.com/certificate/UC-1d088006-a13a-4ae4-a4c1-6e671a6da014/",
    },
    {
      title: "The Ultimate DevOps Bootcamp",
      provider: "CodeKloud",
      image: devopsImage,
      link: "https://www.udemy.com/certificate/UC-fe423703-8fc6-4717-9130-91e99e736f42/",
    },
    {
      title: "Data Structures and Algorithms Essentials using C++",
      provider: "Udemy",
      image: cppImage,
      link: "https://www.udemy.com/certificate/UC-10f6bfd8-1e21-4048-bf62-2f720ff6a6f3/",
    },
    {
      title: "Web development with Node.JS",
      provider: "Coding Blocks",
      image: nodeImage,
      link: "https://online.codingblocks.com/app/certificates/CBOL-172785-f4c1",
    },
    {
      title: "Interactivity with JavaScript",
      provider: "Coursera",
      image: jsImage,
      link: "https://coursera.org/share/a2c1e0b02684a55bee53a40d004575cb",
    },
    {
      title: "Interactivity with HTML5",
      provider: "Coursera",
      image: htmlImage,
      link: "https://coursera.org/share/efbbb26f8308f8f8f4f8040f6d97bbae",
    },
    {
      title: "Introduction to CSS3",
      provider: "Coursera",
      image: cssImage,
      link: "https://coursera.org/share/ee5b9ca019f5c3c28421773dc2bf65a4",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.provider}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                    Click to view
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedCert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Issued by {selectedCert.provider}
                  </p>
                  
                  <div className="flex gap-4">
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      View Certificate
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certifications