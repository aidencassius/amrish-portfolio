import { motion } from "framer-motion";
import { Progress } from "./ui/progress";

const skills = [
  { name: "Data Structures", level: 80 },
  { name: "MERN", level: 60 },
  { name: "Algorithms", level: 80 },
  { name: "Problem Solving", level: 100 },
  { name: "Business", level: 80 },
  { name: "Team Work", level: 98 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-dark relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-light mb-12 text-center">Skills</h2>
          
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-light/30 backdrop-blur-lg rounded-lg p-6 border border-slate-dark/20"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-light font-medium">{skill.name}</span>
                  <span className="text-slate">{skill.level}%</span>
                </div>
                <div className="w-full bg-black rounded-full h-2.5">
                  <div
                    className="bg-[#33C3F0] h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;