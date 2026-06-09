import { motion } from "framer-motion";
import { Zap, Atom, Layers, Cpu, FlaskConical } from "lucide-react";

const researchAreas = [
  {
    id: "spintronic-devices",
    icon: Zap,
    title: "Spintronic Devices",
    subtitle: "Spin-dependent transport and magnetic heterostructures",
    bullets: [
      "Magnetic tunnel junctions (MTJs) and spin-dependent transport",
      "Magnetic multilayers and interface control",
      "2D materials: MoS₂, WSe₂, graphene heterostructures",
      "Spin–orbit torque phenomena and current-induced switching"
    ],
    image: "/images/spintronics.png"
  },
  {
    id: "functional-materials",
    icon: Atom,
    title: "Functional Materials for Nano Devices",
    subtitle: "Engineering material properties for device functionality",
    bullets: [
      "Oxide and van der Waals heterostructure design",
      "Ferroelectric, magnetic, and topological thin films",
      "Structure–property correlations in functional oxides",
      "Phase-change and strongly correlated electron systems"
    ],
    image: "/images/hero-bg.png"
  },
  {
    id: "interface-engineering",
    icon: Layers,
    title: "Interface Engineering of Nano Devices",
    subtitle: "Atomic-scale control of interfaces in thin film systems",
    bullets: [
      "Atomic-scale interface control in thin film systems",
      "Defect, strain, and crystal symmetry engineering",
      "Oxide/metal and van der Waals heterostructures",
      "Interface-driven emergent phenomena and device implications"
    ],
    image: "/images/nanoelectronics.png"
  },
  {
    id: "flexible-electronics",
    icon: Cpu,
    title: "Flexible Electronic Devices",
    subtitle: "Strain-tolerant and mechanically adaptable device architectures",
    bullets: [
      "Flexible spintronic and electronic device architectures",
      "Strain-dependent transport and electromechanical coupling",
      "Low-temperature fabrication on flexible substrates",
      "Wearable-compatible device concepts (research-grade)"
    ],
    image: "/images/spintronics.png"
  },
  {
    id: "nano-fabrication",
    icon: FlaskConical,
    title: "Nano Fabrication",
    subtitle: "High-precision patterning and thin film processing",
    bullets: [
      "Laser interference lithography for nanopatterning",
      "Nano/micro pattern transfer techniques",
      "Thin film stacks and lift-off processes",
      "High-aspect-ratio nanostructure fabrication"
    ],
    image: "/images/hero-bg.png"
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
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our research bridges condensed matter physics and applied nanoelectronics through 
            precise engineering of functional interfaces, materials, and device architectures 
            within the semiconductor technology ecosystem at ICST, NYCU.
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
              data-testid={`research-area-${area.id}`}
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
                  <span className="text-5xl font-serif text-accent opacity-40">0{index + 1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <area.icon size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{area.title}</h2>
                </div>
                <p className="text-sm text-accent font-medium tracking-wide uppercase">{area.subtitle}</p>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <ul className="space-y-3">
                  {area.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
