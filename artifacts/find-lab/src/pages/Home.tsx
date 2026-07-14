import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Zap, Atom, Layers, Cpu, FlaskConical, MoveRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroBackground } from "@/components/hero/HeroBackground";

const researchTiles = [
  {
    title: "Spintronic Devices & Memory Technologies",
    text: "Investigating spin transport, magnetic heterostructures, memory devices, and interface-controlled spintronic functionality.",
    icon: Zap,
    featured: true,
  },
  {
    title: "Functional Materials & Nanostructures",
    text: "Exploring functional materials, emerging material systems, and engineered nanostructures for advanced nanoelectronic devices.",
    icon: Atom,
    featured: false,
  },
  {
    title: "Flexible Electronics & Wearable Systems",
    text: "Developing flexible device platforms for sensing, wearable electronics, and emerging functional applications.",
    icon: Cpu,
    featured: false,
  },
];

const workflow = [
  { label: "Functional Materials", icon: FlaskConical },
  { label: "Nanostructure Design & Fabrication", icon: Layers },
  { label: "Interface Engineering", icon: Zap },
  { label: "Device Physics", icon: Atom },
  { label: "Functional Nano Devices", icon: MoveRight, highlight: true },
];

const currentFocus = [
  "Magnetic tunnel junctions and MRAM technologies",
  "Interface-controlled spin transport",
  "Functional materials and emerging nanostructures",
  "Flexible thin-film and wearable device platforms",
];

const updates = [
  { date: "2025", text: "FIND Lab established at ICST, National Yang Ming Chiao Tung University (NYCU), Taiwan." },
  { date: "2026", text: "Recruitment open for motivated Master's and PhD students for Fall 2026." },
  { date: "2026", text: "FIND Lab research website launched." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 max-w-6xl pt-20 pb-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <span className="inline-block py-1 px-3 rounded-full bg-white/15 text-white border border-white/25 backdrop-blur-sm text-xs font-medium mb-6 uppercase tracking-widest">
                  ICST · National Yang Ming Chiao Tung University · Taiwan
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              >
                FIND Lab
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-2 text-[color:var(--color-white)] border-t-[color:var(--color-white)] border-r-[color:var(--color-white)] border-b-[color:var(--color-white)] border-l-[color:var(--color-white)] font-bold"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="text-accent font-semibold">F</span>unctional{" "}
                <span className="text-accent font-semibold">I</span>nnovations in{" "}
                <span className="text-accent font-semibold">N</span>ano{" "}
                <span className="text-accent font-semibold">D</span>evices Laboratory
              </motion.p>

              <motion.p
                className="text-base mb-10 font-normal text-[color:var(--color-white)]"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
              >
                International College of Semiconductor Technology<br />
                National Yang Ming Chiao Tung University
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  <Link href="/research">Explore Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-sm w-full sm:w-auto">
                  <Link href="/join">Join FIND Lab</Link>
                </Button>
                <Button asChild variant="link" className="text-white/70 hover:text-white w-full sm:w-auto">
                  <Link href="/publications">Research Contributions <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            </div>

            {/* Right: FIND Lab logo + tagline + description */}
            <div className="flex-1 w-full max-w-sm lg:max-w-md flex flex-col items-center lg:items-start gap-6">
              <motion.img
                src="/images/find-lab-logo.png"
                alt="FIND Lab logo"
                className="w-64 lg:w-72 drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              />

              <motion.p
                className="text-xl md:text-2xl font-serif italic text-foreground leading-snug text-center lg:text-left"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
              >
                Engineering Nano Devices for Emerging Functionalities.
              </motion.p>

              <motion.p
                className="text-sm text-muted-foreground leading-relaxed text-center lg:text-left"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
              >
                FIND Lab explores how nanoscale interfaces, functional materials, nanostructures, and device architectures can be integrated through advanced nanofabrication to realize new functionalities in nanoelectronic devices.
              </motion.p>
            </div>

          </div>
        </div>
      </section>
      {/* ── Section 2: Research Vision ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              At FIND Lab, we investigate how interfaces, materials, nanostructures, and device geometry govern physical behaviour at reduced dimensions. By combining nanofabrication, interface engineering, functional-material integration, and experimental device physics, we aim to understand and realize new functionalities in emerging nanoelectronic systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-xl border-l-4 border-accent bg-accent/5 px-8 py-6 max-w-2xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed">
              "Interfaces are active functional elements, not merely boundaries between materials."
            </p>
          </motion.div>
        </div>
      </section>
      {/* ── Section 3: Research Directions ── */}
      <section className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Research Directions</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {researchTiles.map((tile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className={`h-full border-border/50 hover:shadow-lg hover:border-primary/30 transition-all ${tile.featured ? "ring-1 ring-primary/30 bg-primary/5" : "bg-card"}`}>
                  <CardContent className="p-7 flex flex-col gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tile.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                      <tile.icon size={22} />
                    </div>
                    {tile.featured && (
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">Primary Focus</span>
                    )}
                    <h3 className={`font-serif font-bold text-foreground leading-snug ${tile.featured ? "text-xl" : "text-lg"}`}>
                      {tile.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tile.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/5">
              <Link href="/research">Explore Research <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      {/* ── Section 4: Research Approach ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Our Research Approach</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our research connects material selection, nanoscale architecture, fabrication, and physical measurement to establish clear structure–interface–function relationships in nanoelectronic devices.
            </p>
          </motion.div>

          {/* Desktop: horizontal chain */}
          <div className="hidden md:flex items-center justify-center gap-0 flex-wrap">
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center"
              >
                <div className={`flex flex-col items-center px-4 py-4 rounded-xl border text-center w-32 ${step.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border/50 hover:border-primary/30 transition-colors"}`}>
                  <step.icon size={22} className={step.highlight ? "text-primary-foreground mb-2" : "text-primary mb-2"} />
                  <span className={`text-xs font-medium leading-tight ${step.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {step.label}
                  </span>
                </div>
                {i < workflow.length - 1 && (
                  <ChevronRight size={18} className="text-muted-foreground/50 mx-1 shrink-0" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="flex md:hidden flex-col items-center gap-2 max-w-xs mx-auto">
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 w-full"
              >
                <div className={`flex items-center gap-3 flex-1 px-4 py-3 rounded-lg border ${step.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border/50"}`}>
                  <step.icon size={18} className={step.highlight ? "text-primary-foreground" : "text-primary"} />
                  <span className={`text-sm font-medium ${step.highlight ? "text-primary-foreground" : "text-foreground"}`}>{step.label}</span>
                </div>
                {i < workflow.length - 1 && <div className="w-px h-3 bg-border mx-auto" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Section 5: Collaborators ── */}
      <section className="py-20 bg-primary/5 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Collaborators</h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              FIND Lab maintains active research collaborations with leading institutions across Taiwan, Singapore, and India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                logo: "/images/logo-itri.svg",
                name: "ITRI",
                full: "Industrial Technology Research Institute",
                country: "Taiwan",
                accent: "#00529B",
              },
              {
                logo: "/images/logo-ntu.svg",
                name: "NTU",
                full: "National Taiwan University",
                country: "Taiwan",
                accent: "#8B0000",
              },
              {
                logo: "/images/logo-iitkgp.svg",
                name: "IIT Kharagpur",
                full: "Indian Institute of Technology Kharagpur",
                country: "India",
                accent: "#660000",
              },
            ].map((collab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-full h-16 flex items-center justify-center">
                  <img
                    src={collab.logo}
                    alt={`${collab.name} logo`}
                    className="max-h-14 max-w-[160px] object-contain"
                  />
                </div>
                <div className="w-12 h-px" style={{ background: collab.accent, opacity: 0.4 }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{collab.country}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{collab.full}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Section 6: Join FIND Lab ── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Join FIND Lab</h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-4 leading-relaxed">
              FIND Lab welcomes motivated Master's students, PhD students, visiting researchers, and collaborators interested in nanofabrication, spintronics, functional materials, nanostructures, and emerging nanoelectronic devices.
            </p>
            <p className="text-sm text-primary-foreground/65 mb-10 leading-relaxed">
              Candidates from physics, materials science, electrical engineering, electronics, mechanical engineering, and related disciplines are encouraged to contact the laboratory.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/join">View Opportunities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* ── Section 7: Latest Updates ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Latest Updates</h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {updates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 border-b border-border/40 pb-5 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-2 text-muted-foreground shrink-0 pt-0.5">
                  <Calendar size={15} />
                  <span className="text-xs font-medium uppercase tracking-wide">{item.date}</span>
                </div>
                <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
