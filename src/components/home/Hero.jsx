'use client'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-blue-600 overflow-hidden h-screen flex items-center justify-center text-white">
      {/* Background Image or Gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/Banner.jpg')] z-0 opacity-75"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="z-10 p-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Services
        </h1>
        <p className="text-xl md:text-2xl max-w-md mx-auto">
          Elevating your brand with cutting-edge design and strategic digital marketing.
        </p>
        <br></br>
        {/* CTA Button */}
        <motion.a 
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg cursor-pointer"
        >
          Explore Our Services
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero