import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Microscope, Layers, Cpu, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroBackground } from "@/components/hero/HeroBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        
        <div className="container relative z-10 mx-auto px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 backdrop-blur-md text-sm font-medium mb-6 uppercase tracking-widest">
              NYCU • ICST
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Functional Innovations in Nano Devices
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Engineering the interface between condensed matter physics and nanoelectronics.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <Link href="/research">Explore Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 text-white border-white/20 hover:bg-background/20 backdrop-blur-sm w-full sm:w-auto">
              <Link href="/join">Join the Lab</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lab Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground">Welcome to the FIND Lab</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by Dr. Akhil K. Ramesh at the Institute of Computational Science and Technology (ICST), NYCU, 
              the FIND Lab is dedicated to interface-engineered spintronic and functional nano-device systems. 
              We explore the fundamental physics of nanoscale interfaces and translate these discoveries into 
              scalable, functional device architectures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Research Highlights</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our work bridges the gap between condensed matter physics and practical device engineering.
              </p>
            </div>
            <Button asChild variant="link" className="hidden md:flex mt-4 md:mt-0">
              <Link href="/research">View all research <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Spintronics & 2D Materials",
                desc: "Magnetic tunnel junctions and spin-dependent transport in heterostructures.",
                icon: Layers
              },
              {
                title: "Interface Engineering",
                desc: "Atomic-scale interface control in thin film systems and structure-property correlations.",
                icon: Minimize2
              },
              {
                title: "Flexible Nanoelectronics",
                desc: "Strain-dependent transport phenomena and wearable device concepts.",
                icon: Cpu
              },
              {
                title: "Nanofabrication",
                desc: "Laser interference lithography and high-aspect-ratio patterning.",
                icon: Microscope
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-card hover:shadow-md transition-shadow border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <item.icon size={24} />
                    </div>
                    <CardTitle className="font-serif">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/research">View all research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Join */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Join the FIND Lab</h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            We are actively recruiting motivated PhD and Master's students for Fall 2026. 
            Join us in exploring the frontiers of spintronics and nanodevice engineering.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/join">View Open Positions</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
