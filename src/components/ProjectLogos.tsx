import { motion } from "framer-motion";
import { Card } from "./ui/card";

const ProjectLogos = () => {
  const logos = [
    {
      src: "/lovable-uploads/8cfdd47a-9777-4dfd-bf1f-a146ff045158.png",
      alt: "EduLink Logo",
      title: "EduLink"
    },
    {
      src: "/lovable-uploads/9d81019a-da53-4442-846d-f29cb5867491.png",
      alt: "Jak Premiere Logo",
      title: "Jak Premiere"
    },
    {
      src: "/lovable-uploads/e942aea2-9d07-432f-a98e-0083f105a244.png",
      alt: "SonoSync Logo",
      title: "SonoSync"
    },
    {
      src: "/lovable-uploads/bdb54711-13f2-4921-acc8-79f3d6126e43.png",
      alt: "OnePercent Logo",
      title: "OnePercent"
    },
    {
      src: "/lovable-uploads/e7f282ff-030e-4b68-ae58-0866ae2d72c6.png",
      alt: "OptiGo Logo",
      title: "OptiGo"
    },
    {
      src: "/lovable-uploads/a352db8e-76c1-49d6-a633-c60a60ae2b17.png",
      alt: "English Proficiency Logo",
      title: "English Proficiency"
    },
    {
      src: "/lovable-uploads/71b7a08a-0b97-4176-abb3-022a236a090c.png",
      alt: "One Percent White Logo",
      title: "One Percent White"
    }
  ];

  return (
    <div className="mt-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-slate-light mb-8 text-center"
      >
        Project Logos
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-navy-light/30 backdrop-blur-lg border border-slate-dark/20 hover:border-accent transition-colors duration-300">
              <div className="aspect-square relative flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain filter brightness-200"
                />
              </div>
              <h4 className="text-center text-slate-light mt-4">{logo.title}</h4>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLogos;