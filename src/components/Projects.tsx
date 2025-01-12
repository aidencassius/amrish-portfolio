import { motion } from "framer-motion";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Jak Premiere",
    description: "A movie ticket booking website built using Python, JavaScript, HTML, CSS, and SQL.",
  },
  {
    title: "OnePercent",
    description: "A hub for fostering innovation, offering resources and collaborative spaces for creativity and skill development.",
  },
  {
    title: "OptiGo",
    description: "An autonomous wheelchair for the blind and elderly, powered by voice commands, AI, and ML for safe and intelligent navigation.",
  },
  {
    title: "SonoSync",
    description: "A safety enhancement system for hairpin bends using ultrasonic sensors and intelligent lighting to prevent accidents. Built with Python, Arduino, and AI/ML models for real-time vehicle detection and adaptive lighting control.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-navy relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-light mb-12 text-center">Projects</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-navy-light/30 backdrop-blur-lg border border-slate-dark/20 hover:border-accent transition-colors duration-300 p-6">
                  <h3 className="text-xl font-semibold text-slate-light mb-3">{project.title}</h3>
                  <p className="text-slate">{project.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;