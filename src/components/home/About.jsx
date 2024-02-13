import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
      className="bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        
        {/* Company Mission Statement */}
        <div className="text-center mb-12">
          <p className="max-w-3xl mx-auto text-lg">
            Our mission is to empower businesses and creatives with innovative digital solutions that drive growth and enhance online presence. We believe in building strong relationships, pushing the boundaries of design and technology, and making a positive impact in everything we do.
          </p>
        </div>
        
        {/* Team Introduction */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center"
        >
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About