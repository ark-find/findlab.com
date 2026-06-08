import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, UserPlus } from "lucide-react";

export default function People() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our People</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
            <Users className="text-primary" /> Current Members
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-colors">
                <div className="aspect-square bg-secondary relative">
                  <img src="/images/pi-headshot.png" alt="Dr. Akhil K. Ramesh" className="object-cover w-full h-full grayscale-[20%]" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-lg">Dr. Akhil K. Ramesh</h3>
                  <p className="text-primary text-sm font-medium mb-2">Principal Investigator</p>
                  <p className="text-muted-foreground text-sm">Ph.D. IIT Delhi & NYCU</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
          </div>
        </section>

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
