import { motion } from "framer-motion";
import { Cog, Wrench, Zap, ThermometerSnowflake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Facilities() {
  const facilities = [
    {
      title: "Thin Film Deposition",
      icon: Zap,
      desc: "Systems for atomic-scale material growth."
    },
    {
      title: "Lithography Setup",
      icon: Cog,
      desc: "Laser interference lithography for large-area nanopatterning."
    },
    {
      title: "Magnetotransport Measurement",
      icon: ThermometerSnowflake,
      desc: "Cryogenic systems for precision electrical characterization."
    },
    {
      title: "Device Fabrication",
      icon: Wrench,
      desc: "Cleanroom-compatible processing and assembly capabilities."
    }
  ];

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
            at the International College of Semiconductor Technology (ICST), NYCU.
          </p>
          
          <div className="mt-6 inline-block bg-muted text-muted-foreground px-4 py-2 rounded text-sm border border-border">
            Detailed equipment list to be updated as the laboratory is commissioned.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card border-border/50">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 bg-secondary rounded-lg text-primary">
                    <fac.icon size={24} />
                  </div>
                  <CardTitle className="text-xl font-serif">{fac.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fac.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
