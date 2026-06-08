import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Join() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Actively Recruiting
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Join the FIND Lab</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are looking for motivated students to explore the frontier of spintronics and nanodevice engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-border/50 bg-secondary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-primary">Open Positions</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                    <h3 className="font-bold text-lg mb-1">PhD Students</h3>
                    <p className="text-sm text-muted-foreground">Targeting Fall 2026 entry</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                    <h3 className="font-bold text-lg mb-1">Master's Students</h3>
                    <p className="text-sm text-muted-foreground">Open applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full border-border/50 bg-secondary/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-primary">Preferred Backgrounds</h2>
                <ul className="space-y-3">
                  {["Physics", "Electrical Engineering", "Materials Science", "Nanotechnology"].map((bg) => (
                    <li key={bg} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span>{bg}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif font-semibold mb-6">Relevant Skills</h2>
          <p className="text-muted-foreground mb-6">Candidates with any combination of the following skills are highly encouraged to apply:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Thin film deposition (sputtering, evaporation, ALD)",
              "Lithography (laser interference, EBL, photolithography)",
              "Magnetotransport & electrical characterization",
              "Device fabrication & cleanroom experience",
              "Computational methods in condensed matter (optional)"
            ].map((skill, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-border/50 rounded-lg bg-card">
                <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-4">What We Offer</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            A collaborative research environment at the frontier of spintronics and nanodevice engineering, 
            with access to state-of-the-art fabrication and characterization facilities at NYCU.
          </p>
          <div className="bg-background/10 backdrop-blur border border-white/20 rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="font-semibold text-lg mb-2">How to Apply</h3>
            <p className="text-sm text-primary-foreground/80 mb-6">
              Please reach out via the contact form or direct email. Include your CV, 
              a brief statement of research interests, and transcripts.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Contact to Apply</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
