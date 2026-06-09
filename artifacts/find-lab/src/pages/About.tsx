import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Principal Investigator</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-border/50 bg-secondary relative aspect-square mb-6">
              <img 
                src="/images/pi-headshot.png" 
                alt="Dr. Akhil K. Ramesh" 
                className="w-full h-full object-cover grayscale-[20%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif font-bold text-lg">Dr. Akhil K. Ramesh</h3>
                <p className="text-sm opacity-90">Director, FIND Lab</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">International College of Semiconductor Technology (ICST), National Yang Ming Chiao Tung University (NYCU), Taiwan</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Contact via /contact page</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground flex items-center gap-2">
                <GraduationCap className="text-accent" /> Academic Background
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex flex-col">
                  <span className="font-medium text-foreground">Postdoctoral Research</span>
                  <span>Flexible electronics and nanodevices</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-foreground">Ph.D.</span>
                  <span>Joint program, IIT Delhi & NYCU Taiwan</span>
                  <span className="text-sm italic">Focus: Spintronics and Nanofabrication</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground flex items-center gap-2">
                <Award className="text-accent" /> Scientific Philosophy
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  The fundamental driver of functionality in modern nanodevices is the interface. 
                  Our research philosophy centers on interface-driven physics in nanoscale systems, 
                  where device functionality emerges directly from precise materials engineering.
                </p>
                <p>
                  We aim to bridge the conceptual gap between condensed matter physics and applied nanoelectronics. 
                  By understanding the delicate interplay of charge, spin, and orbital degrees of freedom at 
                  heterostructure interfaces, we design and demonstrate scalable fabrication pathways for next-generation 
                  functional devices.
                </p>
                <p>
                  Rigor, reproducibility, and physical insight form the foundation of our laboratory culture.
                </p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Lab Vision</h2>
              <p className="text-muted-foreground leading-relaxed p-6 bg-secondary rounded-lg border-l-4 border-primary">
                "Interface-engineered spintronic and functional nano-device systems."
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
