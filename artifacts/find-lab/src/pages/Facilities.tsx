import { motion } from "framer-motion";

export default function Facilities() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Facilities</h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            The FIND Lab leverages state-of-the-art fabrication and characterization facilities
            at the International College of Semiconductor Technology (ICST), NYCU, Taiwan
            Semiconductor Research Institute (TSRI) and National Synchrotron Radiation Research
            Center (NSRRC).
          </p>
          
          <div className="mt-6 inline-block bg-muted text-muted-foreground px-4 py-2 rounded text-sm border border-border">
            Detailed equipment list will be updated soon
          </div>
        </motion.div>
      </div>
    </div>
  );
}
