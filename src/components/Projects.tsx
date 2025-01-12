import { motion } from "framer-motion";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Jak Premiere",
    description: "A movie ticket booking website built using Python, JavaScript, HTML, CSS, and SQL.",
    link: "#",
  },
  {
    title: "OnePercent",
    description: "A hub for fostering innovation, offering resources and collaborative spaces for creativity and skill development.",
    link: "#",
  },
  {
    title: "OptiGo",
    description: "An autonomous wheelchair for the blind and elderly, powered by voice commands, AI, and ML for safe and intelligent navigation.",
    link: "#",
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
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-navy-light/30 backdrop-blur-lg border border-slate-dark/20 hover:border-accent transition-colors duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-light mb-3">{project.title}</h3>
                    <p className="text-slate mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      View Project
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
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