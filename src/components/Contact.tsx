import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-light mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  required
                  className="bg-navy-light/50 border-slate-dark/20 text-slate-light"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-light mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-navy-light/50 border-slate-dark/20 text-slate-light"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-light mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  className="bg-navy-light/50 border-slate-dark/20 text-slate-light"
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-accent text-navy hover:bg-accent/90 transition-colors"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;