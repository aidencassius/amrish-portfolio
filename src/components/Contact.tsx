import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy-dark relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-light mb-8 text-center">Get in Touch</h2>
          
          <Card className="p-8 bg-navy-light/30 backdrop-blur-lg border border-slate-dark/20">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-2 text-slate-light">
                <Mail className="w-5 h-5" />
                <span className="text-lg">amrishsuresh14@gmail.com</span>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/am.i.aiden/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-slate-light group-hover:text-accent transition-colors" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/amrish-suresh-72ba5a251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-slate-light group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;