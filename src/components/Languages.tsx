import { motion } from "framer-motion";

const languages = [
  { name: "English", level: 100 },
  { name: "Malayalam", level: 100 },
  { name: "Hindi", level: 100 },
  { name: "Arabic", level: 60 },
  { name: "Tamil", level: 100 },
];

const Languages = () => {
  return (
    <section id="languages" className="py-20 bg-navy-dark relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-light mb-12 text-center">Language Proficiency</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-24 h-24 mb-4">
                  <div className="absolute inset-0 rounded-full backdrop-blur-xl bg-white/5 border border-white/10" />
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="45"
                      fill="none"
                      stroke="#33C3F0"
                      strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - language.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-light font-medium">
                    {language.level}%
                  </div>
                </div>
                <span className="text-slate-light font-medium">{language.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;