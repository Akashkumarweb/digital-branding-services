import { motion } from 'framer-motion';
const Services = () => {
    const serviceVariants = {
        offscreen: {
          y: 50,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
    
      const services = [
        {
          title: "Strategic Social Media Campaigns",
          description: "Maximize your reach and engagement with tailored social media strategies.",
          // icon: "/next.svg", // Example path, replace with your actual icon path
        },
        {
          title: "Innovative Graphic Design",
          description: "Capture your audience's attention with stunning visuals and branding.",
          // icon: "/next.svg",
        },
        {
          title: "Responsive Website Development",
          description: "Build your online presence with a website that performs seamlessly across all devices.",
          icon: "/next.svg",
        },
        {
          title: "Intuitive UI/UX Design",
          description: "Enhance user experience with designs that are both beautiful and functional.",
          // icon: "/next.svg",
        }
      ];
  return (
    <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-gray-100 p-6 rounded-lg shadow hover:shadow-md"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={serviceVariants}
          >
            {/* <Image src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4"/> */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Services