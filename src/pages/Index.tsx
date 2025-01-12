import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <main className="bg-navy min-h-screen relative">
      <Hero />
      <About />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
      
      <div className="fixed bottom-8 right-8 flex gap-4">
        <a
          href="https://github.com/AmrishS14"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-light hover:text-accent transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/amrish-suresh-72ba5a251/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-light hover:text-accent transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
};

export default Index;