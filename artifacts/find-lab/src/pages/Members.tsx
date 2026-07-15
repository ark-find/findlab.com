import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Award, Users, UserPlus } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Members() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* ── Principal Investigator ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Members</h1>
          <div className="w-20 h-1 bg-accent mb-10"></div>

          <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3 text-foreground">
            <GraduationCap className="text-primary" /> Principal Investigator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Photo + contact */}
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
                  <p className="text-sm opacity-90">Assistant Professor, ICST NYCU</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">International College of Semiconductor Technology (ICST), National Yang Ming Chiao Tung University (NYCU), Taiwan</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <a href="mailto:ark.st08@nycu.edu.tw" className="text-sm hover:text-primary transition-colors">
                    ark.st08@nycu.edu.tw
                  </a>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full mt-2">
                  <Link href="/pi-biography">Full Biography &amp; CV →</Link>
                </Button>
              </div>
            </motion.div>

            {/* Academic background + philosophy + vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 space-y-8"
            >
              <section>
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground flex items-center gap-2">
                  <GraduationCap className="text-accent" /> Academic Background
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex flex-col">
                    <span className="font-medium text-foreground">Postdoctoral Research</span>
                    <span>Flexible electronics and nanodevices</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium text-foreground">Ph.D.</span>
                    <span>Joint program, IIT Delhi &amp; NYCU Taiwan</span>
                    <span className="text-sm italic">Focus: Spintronics and Nanofabrication</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Award className="text-accent" /> Scientific Philosophy
                </h3>
                <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-3">
                  <p>
                    The fundamental driver of functionality in modern nanodevices is the interface.
                    Our research philosophy centers on interface-driven physics in nanoscale systems,
                    where device functionality emerges directly from precise materials engineering.
                  </p>
                  <p>
                    We aim to bridge the conceptual gap between condensed matter physics and applied nanoelectronics.
                    By understanding the delicate interplay of charge, spin, and orbital degrees of freedom at
                    heterostructure interfaces, we design and demonstrate scalable fabrication pathways for
                    next-generation functional devices.
                  </p>
                  <p>
                    Rigor, reproducibility, and physical insight form the foundation of our laboratory culture.
                  </p>
                </div>
              </section>

            </motion.div>
          </div>
        </motion.div>

        {/* ── Current Members ── */}
        <section className="mb-20">
          <div className="w-full h-px bg-border/60 mb-12"></div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3"
          >
            <Users className="text-primary" /> Current Members
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-colors h-full">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <span className="text-4xl font-serif text-muted-foreground/30">AS</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg">Akshay S.</h3>
                  <p className="text-primary text-sm font-medium mb-2">PhD Student</p>
                  <p className="text-muted-foreground text-sm">Joining Fall 2026</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Open position card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/join" className="block h-full group">
                <Card className="overflow-hidden border-dashed border-2 border-accent/40 bg-accent/5 hover:border-accent hover:bg-accent/10 transition-all h-full cursor-pointer">
                  <div className="aspect-square flex flex-col items-center justify-center gap-3">
                    <UserPlus className="w-10 h-10 text-accent/50 group-hover:text-accent transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-lg text-foreground">You?</h3>
                    <p className="text-accent text-sm font-medium mb-2">Open Position</p>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      We're recruiting — apply now →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Open Positions ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <UserPlus size={100} />
            </div>

            <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground relative z-10">
              Open Positions
            </h2>
            <div className="space-y-4 mb-8 relative z-10 text-muted-foreground">
              <p className="font-medium text-foreground">The FIND Lab is actively recruiting motivated PhD and Master's students.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>PhD positions available (Fall 2026 onwards)</li>
                <li>Master's student positions available</li>
              </ul>
            </div>

            <Button asChild size="lg" className="relative z-10 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/join">Apply Now</Link>
            </Button>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
