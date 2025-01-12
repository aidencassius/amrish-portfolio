import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-dark z-1" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-6 py-16 sm:py-24 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent bg-navy-light/50 rounded-full"
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
              className="text-lg text-slate max-w-2xl mx-auto mb-8"
            >
              Combining creativity, technology, and innovation to build impactful solutions.
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border border-white/20 transition-all"
              >
                About Me
              </Button>
              <Button
                onClick={() => scrollToSection('skills')}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border border-white/20 transition-all"
              >
                Skills
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border border-white/20 transition-all"
              >
                Projects
              </Button>
              <Button
                onClick={() => scrollToSection('languages')}
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border border-white/20 transition-all"
              >
                Languages
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;