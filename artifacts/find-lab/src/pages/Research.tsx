import { motion } from "framer-motion";

const researchAreas = [
  {
    id: "spintronics",
    title: "Spintronics & 2D Material Heterostructures",
    description: "Magnetic tunnel junctions (MTJs) and spin-dependent transport. Magnetic multilayers and interface control. 2D materials: MoS₂, WSe₂, graphene heterostructures. Spin–orbit torque phenomena and current-induced switching.",
    image: "/images/spintronics.png"
  },
  {
    id: "interface",
    title: "Interface Engineering in Nanodevices",
    description: "Atomic-scale interface control in thin film systems. Oxide/metal and van der Waals heterostructures. Defect, strain, and crystal symmetry engineering. Structure–property correlations in functional materials.",
    image: "/images/hero-bg.png"
  },
  {
    id: "flexible",
    title: "Flexible Nanoelectronics",
    description: "Flexible spintronic and electronic device architectures. Strain-dependent transport phenomena. Low-temperature fabrication processes. Wearable-compatible device concepts (research-grade, scientifically framed).",
    image: "/images/nanoelectronics.png"
  },
  {
    id: "nanofabrication",
    title: "High-Aspect-Ratio Nanofabrication",
    description: "Laser interference lithography for nanopatterning. Nano/micro pattern transfer techniques. Thin film stacks and lift-off processes. High-aspect-ratio nanostructure fabrication.",
    image: "/images/spintronics.png" // Reusing image for placeholder
  }
];

export default function Research() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Research Focus Areas</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our research bridges condensed matter physics and applied nanoelectronics through 
            precise engineering of functional interfaces.
          </p>
        </motion.div>

        <div className="space-y-24">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-xl border border-border/50 relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-5xl font-serif text-accent opacity-50">0{index + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{area.title}</h2>
                </div>
                <div className="w-12 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
