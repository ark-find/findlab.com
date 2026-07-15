import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen, ExternalLink, ArrowLeft, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const GOOGLE_SCHOLAR_URL = "https://scholar.google.com/citations?user=xZBJnUcAAAAJ&hl=en";

const education = [
  {
    degree: "Ph.D. in Semiconductor Technology & Spintronics",
    institution: "Indian Institute of Technology (IIT) Delhi & National Yang Ming Chiao Tung University (NYCU), Taiwan",
    period: "~2016–2021",
    note: "Joint degree program · Focus: Spintronic devices, magnetic tunnel junctions, nanofabrication",
  },
  {
    degree: "B.Tech. in Electronics & Communication Engineering",
    institution: "Kerala, India",
    period: "~2010–2014",
    note: "Undergraduate foundation in electronic systems and signal processing",
  },
];

const positions = [
  {
    title: "Assistant Professor & PI, FIND Lab",
    org: "International College of Semiconductor Technology (ICST), NYCU, Taiwan",
    period: "2025 – Present",
    current: true,
  },
  {
    title: "Postdoctoral Research Fellow",
    org: "Nanyang Technological University (NTU), Singapore",
    period: "2021 – 2025",
    current: false,
  },
  {
    title: "Doctoral Researcher",
    org: "IIT Delhi & NYCU Taiwan (Joint PhD)",
    period: "2016 – 2021",
    current: false,
  },
];

const awards = [
  "Invited speaker at NTU Singapore Material Science and Engineering Graduate Student Club (2024)",
  "Invited speaker, IEEE Education Society Global Symposium on International Collaborations (2023)",
  "Best paper contribution at MEMS'19, IEEE International Conference on MEMS, Seoul (2019)",
  "Research contribution recognised at INDICON 2018, Coimbatore, India (2018)",
];

const interests = [
  { label: "Spintronics & Magnetic Memories", desc: "STT-MRAM, magnetic tunnel junctions, interface-engineered spintronic devices" },
  { label: "Functional Materials & Nanostructures", desc: "MoS₂, FeRh, NiFe, CoFeB/MgO, ZnO — growth, characterization, and device integration" },
  { label: "Flexible & Wearable Devices", desc: "Electroless deposition on flexible substrates, piezoresistive MEMS, bio-sensing" },
  { label: "Nanofabrication", desc: "Thin-film deposition, lithography, interface engineering, structural characterization" },
  { label: "Computational Device Physics", desc: "Atomistic modelling of spin-transfer torque switching, FEM simulation of MEMS sensors" },
];

export default function PIBiography() {
  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link href="/members" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={15} /> Back to Members
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-36 h-36 rounded-xl overflow-hidden shrink-0 border border-border/50 shadow-md bg-secondary">
              <img
                src="/images/pi-headshot.png"
                alt="Dr. Akhil K. Ramesh"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                Dr. Akhil K. Ramesh
              </h1>
              <p className="text-primary font-medium mb-1">Assistant Professor &amp; Principal Investigator</p>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-primary" />
                  ICST, National Yang Ming Chiao Tung University (NYCU), Taiwan
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={13} className="text-primary" />
                  <a href="mailto:ark.st08@nycu.edu.tw" className="hover:text-primary transition-colors">
                    ark.st08@nycu.edu.tw
                  </a>
                </span>
              </div>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                  <BookOpen size={14} /> Google Scholar <ExternalLink size={12} />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-14">

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={17} className="text-primary" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">Education</h2>
            </div>

            <div className="relative pl-6 border-l-2 border-border/60 space-y-6">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">{ed.period}</p>
                  <p className="font-semibold text-foreground leading-snug">{ed.degree}</p>
                  <p className="text-sm text-primary mt-0.5">{ed.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1 italic">{ed.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Positions */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase size={17} className="text-primary" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">Academic &amp; Research Positions</h2>
            </div>

            <div className="relative pl-6 border-l-2 border-border/60 space-y-6">
              {positions.map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className={`absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full border-2 border-background ${pos.current ? "bg-accent" : "bg-primary"}`} />
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-foreground leading-snug">{pos.title}</p>
                    {pos.current && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary mt-0.5">{pos.org}</p>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mt-0.5">{pos.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Research Interests */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen size={17} className="text-primary" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">Research Interests</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-card border border-border/50 rounded-lg px-4 py-3 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Awards */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Award size={17} className="text-primary" />
              </div>
              <h2 className="text-xl font-serif font-bold text-foreground">Recognition &amp; Invited Roles</h2>
            </div>

            <ul className="space-y-3">
              {awards.map((award, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  {award}
                </motion.li>
              ))}
            </ul>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
