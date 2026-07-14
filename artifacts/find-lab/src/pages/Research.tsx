import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const areas = [
  {
    id: "spintronics",
    label: "Primary Focus",
    labelVariant: "default" as const,
    title: "Spintronic Devices & Memory Technologies",
    description:
      "Engineering next-generation spintronic devices through interface engineering, magnetic heterostructures, and nanoscale transport for memory and sensing applications.",
    subtopics: [
      "Magnetic Tunnel Junctions (MTJs)",
      "MRAM Technologies",
      "Spin Transport Physics",
      "Interface Engineering",
      "Magnetic Sensors",
      "Beyond-CMOS Spintronics",
    ],
    image: "/images/research-mtj-cobefb.png",
    featured: true,
  },
  {
    id: "functional-materials",
    label: "Enabling Technologies",
    labelVariant: "secondary" as const,
    title: "Functional Materials & Nanostructures",
    description:
      "Exploring functional materials and engineering nanostructures for developing advanced nanoelectronic devices through innovative fabrication and interface engineering.",
    subtopics: [
      "Functional Thin Films",
      "2D & Emerging Materials",
      "Nanostructure Engineering",
      "Advanced Nanofabrication",
      "Nano-Bio Interfaces",
    ],
    image: "/images/research-nanofab.png",
    featured: false,
  },
  {
    id: "flexible-electronics",
    label: "Emerging Applications",
    labelVariant: "outline" as const,
    title: "Flexible Electronics & Wearable Systems",
    description:
      "Developing flexible and wearable electronic systems for next-generation sensing and sustainable technologies.",
    subtopics: [
      "Flexible Electronics",
      "Stretchable Devices",
      "Wearable Sensors and Actuators",
      "Flexible Displays",
    ],
    image: "/images/research-flexible-device.png",
    featured: false,
  },
];

export default function Research() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Research</h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The FIND Lab develops functional nano devices by combining device physics, advanced
            materials, interface engineering, and nanofabrication. Our research is organized around
            three interconnected areas spanning spintronic devices, enabling materials and
            nanostructures, and flexible electronic systems.
          </p>
        </motion.div>

        {/* Featured area 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 rounded-2xl overflow-hidden border border-primary/20 shadow-xl bg-card"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image — takes ~45% on large screens */}
            <div className="lg:w-[45%] shrink-0 relative">
              <img
                src={areas[0].image}
                alt={areas[0].title}
                className="w-full h-72 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-4">
                <Badge className="bg-primary text-primary-foreground mb-3">{areas[0].label}</Badge>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                  {areas[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{areas[0].description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas[0].subtopics.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Areas 2 & 3 — equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.slice(1).map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-border/50 shadow-md bg-card flex flex-col"
            >
              <div className="relative h-52 shrink-0">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <Badge variant={area.labelVariant} className="self-start mb-3">{area.label}</Badge>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                  {area.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{area.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.subtopics.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
