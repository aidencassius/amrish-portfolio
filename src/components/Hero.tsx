import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark z-1" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-6 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-navy-light rounded-full"
          >
            Welcome to my portfolio
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-6xl font-bold text-slate-light mb-6"
          >
            Amrish S
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl font-medium text-slate mb-8"
          >
            Aspiring Business Entrepreneur & Innovator
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-slate max-w-2xl mx-auto"
          >
            Combining creativity, technology, and innovation to build impactful solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;