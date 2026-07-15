import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen, ExternalLink, ArrowLeft, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const GOOGLE_SCHOLAR_URL = "https://scholar.google.com/citations?user=xZBJnUcAAAAJ&hl=en";

const education = [
  {
    degree: "Ph.D. — Spintronic Devices for Sensing & Memory Applications",
    institution: "Indian Institute of Technology (IIT) Delhi & National Yang Ming Chiao Tung University (NYCU), Taiwan",
    period: "2017 – 2022",
    note: "IITD–NYCU Joint Degree Program · Advisors: Prof. Pushparaj Singh (IIT Delhi) & Prof. Yuan-Chieh Tseng (NYCU) · GPA 8/10",
  },
  {
    degree: "M.Tech in Electronics — VLSI & Embedded Systems",
    institution: "Cochin University of Science and Technology (CUSAT), Kerala, India",
    period: "2013 – 2015",
    note: "GPA 9.24 / 10",
  },
  {
    degree: "B.Tech in Electronics and Instrumentation Engineering",
    institution: "Cochin University of Science and Technology (CUSAT), Kerala, India",
    period: "2008 – 2012",
    note: "69.64%",
  },
];

const positions = [
  {
    title: "Assistant Professor & PI, FIND Lab",
    org: "International College of Semiconductor Technology (ICST), NYCU, Taiwan",
    period: "Jul 2025 – Present",
    current: true,
    note: "Established FIND Lab ahead of first student recruitment cycle.",
  },
  {
    title: "Research Fellow",
    org: "NTI–NTU Corporate Lab, Nanyang Technological University, Singapore",
    period: "May 2024 – 2025",
    current: false,
  },
  {
    title: "Research Scientist",
    org: "Temasek Lab, Nanyang Technological University, Singapore",
    period: "Aug 2022 – May 2024",
    current: false,
  },
  {
    title: "Graduate Teaching Assistant",
    org: "International College of Semiconductor Technology, NYCU, Taiwan",
    period: "Sep 2020 – Jan 2021",
    current: false,
  },
  {
    title: "Graduate Research Student (PhD)",
    org: "IIT Delhi & NYCU Taiwan",
    period: "Jul 2017 – Feb 2022",
    current: false,
  },
  {
    title: "Project Associate",
    org: "Center for Applied Research in Electronics (CARE), IIT Delhi, India",
    period: "Jan 2017 – Jul 2017",
    current: false,
  },
  {
    title: "Assistant Professor",
    org: "Department of ECE, College of Engineering Munnar, Kerala, India",
    period: "Jul 2015 – Jan 2017",
    current: false,
  },
];

const awards = [
  { text: "MediaTek Foundation Scholarship winner, NCTU Taiwan", year: "Nov 2019" },
  { text: "Scholarship for Outstanding New Student Award, ICST NYCU Taiwan", year: "Sep 2019 – 2021" },
  { text: "Research Scholar Travel Award, IIT Delhi", year: "Jan 2019" },
  { text: "Listed among top 10 exhibits visited by President of India (H.E. Pratibha Patil) at the 34th Jawaharlal Nehru National Science Exhibition", year: "Dec 2007" },
  { text: "2nd Prize, National Level Science Exhibition", year: "Oct 2006" },
];

const interests = [
  { label: "Spintronics & Magnetic Memories", desc: "STT-MRAM, magnetic tunnel junctions, CoFeB/MgO interface engineering, PMA optimization" },
  { label: "Flexible & Wearable Devices", desc: "Electroless deposition of NiFe on flexible substrates, polydopamine-assisted processes, magnetostrictive strain sensors" },
  { label: "MEMS & Sensing", desc: "Spintronic MEMS pressure sensors, piezoresistive sensors, AHE biosensors, MoS₂-based sensing elements" },
  { label: "Functional Nanomaterials", desc: "MoS₂, FeRh phase transitions, ZnO nanostructures, photoelectrochemical applications" },
  { label: "Nanofabrication", desc: "RF/DC sputtering, e-beam lithography, RIE/IBE, TEM, XPS, AFM, VSM/SQUID characterization" },
  { label: "Computational Modelling", desc: "Atomistic & micromagnetic simulation (OOMMF, Vampire), FEM device modelling (COMSOL), TCAD" },
];

const reviewer = [
  "Journal of Micromechanics and Microengineering (JMM)",
  "Microelectronic Engineering",
  "Journal of Physics Communications",
  "Discover Nano",
  "SPIN",
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
              <p className="text-sm text-muted-foreground mb-3">FIND Lab · International College of Semiconductor Technology (ICST), NYCU, Taiwan</p>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-2">
                  <MapPin size={13} className="text-primary" />
                  ICST, National Yang Ming Chiao Tung University (NYCU), Hsinchu, Taiwan
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={13} className="text-primary" />
                  <a href="mailto:ark.st08@nycu.edu.tw" className="hover:text-primary transition-colors">
                    ark.st08@nycu.edu.tw
                  </a>
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                    <BookOpen size={14} /> Google Scholar <ExternalLink size={12} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href="mailto:ark.st08@nycu.edu.tw">
                    <Mail size={14} /> Email
                  </a>
                </Button>
              </div>
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

            <div className="relative pl-6 border-l-2 border-border/60 space-y-7">
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

          {/* Professional Experience */}
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
              <h2 className="text-xl font-serif font-bold text-foreground">Professional Experience</h2>
            </div>

            <div className="relative pl-6 border-l-2 border-border/60 space-y-6">
              {positions.map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative"
                >
                  <span className={`absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full border-2 border-background ${pos.current ? "bg-accent" : "bg-primary/60"}`} />
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
                  {"note" in pos && pos.note && (
                    <p className="text-xs text-muted-foreground italic mt-1">{pos.note}</p>
                  )}
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
              <h2 className="text-xl font-serif font-bold text-foreground">Awards &amp; Achievements</h2>
            </div>

            <ul className="space-y-4">
              {awards.map((award, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="text-sm text-foreground">{award.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{award.year}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Professional Service */}
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
              <h2 className="text-xl font-serif font-bold text-foreground">Editorial &amp; Review Service</h2>
            </div>

            <ul className="space-y-2">
              {reviewer.map((j, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  Peer Reviewer — <span className="italic text-muted-foreground">{j}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
