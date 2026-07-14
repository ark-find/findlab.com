import { motion } from "framer-motion";
import { Zap, Atom, Cpu } from "lucide-react";

const researchAreas = [
  {
    id: "spintronic-devices",
    icon: Zap,
    label: "Primary Focus",
    title: "Spintronic Devices & Memory Technologies",
    subtitle: "Spin-dependent transport, MTJs, and non-volatile memory",
    description:
      "Engineering next-generation spintronic devices through interface engineering, magnetic heterostructures, and nanoscale transport for memory and sensing applications.",
    bullets: [
      "Magnetic Tunnel Junctions (MTJs)",
      "MRAM Technologies",
      "Spintronic Sensors",
      "Interface Engineering",
      "Neuromorphic Computing",
      "Spintronics-based AI Hardware",
    ],
    image: "/images/research-mtj-cobefb.png",
  },
  {
    id: "functional-materials",
    icon: Atom,
    label: "Enabling Technologies",
    title: "Functional Materials & Nanostructures",
    subtitle: "Engineering material properties at the nanoscale for device functionality",
    description:
      "Exploring functional materials and engineering nanostructures for developing advanced nanoelectronic devices through innovative fabrication and interface engineering.",
    bullets: [
      "Functional Thin Films",
      "2D & Emerging Materials",
      "Nanostructure Engineering",
      "Advanced Nanofabrication",
      "Nano-Bio Interfaces",
    ],
    image: "/images/research-nanofab.png",
  },
  {
    id: "flexible-electronics",
    icon: Cpu,
    label: "Emerging Applications",
    title: "Flexible Electronics & Wearable Systems",
    subtitle: "Strain-tolerant device architectures for next-generation wearable technology",
    description:
      "Developing flexible and wearable electronic systems for next-generation sensing and sustainable technologies.",
    bullets: [
      "Flexible Electronics",
      "Stretchable Devices",
      "Wearable Sensors and Actuators",
      "Flexible Displays",
    ],
    image: "/images/research-flexible-device.png",
  },
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
            The FIND Lab develops functional nano devices by combining device physics, advanced
            materials, interface engineering, and nanofabrication. Our research is organized around
            three interconnected areas spanning spintronic devices, enabling materials and
            nanostructures, and flexible electronic systems.
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
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center`}
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
                  <span className="text-xs font-medium uppercase tracking-widest text-accent border border-accent/40 rounded-full px-3 py-1">
                    {area.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <area.icon size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{area.title}</h2>
                </div>
                <p className="text-sm text-accent font-medium tracking-wide uppercase">{area.subtitle}</p>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
                <ul className="space-y-3 pt-2">
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
