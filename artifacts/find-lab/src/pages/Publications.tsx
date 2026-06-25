import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GOOGLE_SCHOLAR_URL = "https://scholar.google.com/citations?user=xZBJnUcAAAAJ&hl=en";

type BadgeStyle = "acs" | "ieee" | "iop" | "wiley" | "rsc" | "elsevier" | "nature" | "science";

interface Publication {
  badge: BadgeStyle;
  badgeLabel: string;
  title: string;
  url: string;
  authors: string;
  piSpan: string;
  journal: string;
  year: number;
  isNew?: boolean;
}

interface Talk {
  title: string;
  event: string;
  location: string;
  year: number;
  type: "invited" | "contributed" | "keynote";
}

const publications: Publication[] = [
  {
    badge: "ieee",
    badgeLabel: "IEEE",
    title: "Interface-Engineered STT-MRAM for Device-to-Device Variation-Aware, Energy-Efficient, and Reliable Computing-in-Memory Arrays",
    url: "https://doi.org/10.1109/ted.2026.3692177",
    authors: "Wu ZY, Ramesh AK, Bhukya VN, Wei JH, Sheu SS, Hsin YC, Tseng YC.",
    piSpan: "Ramesh AK",
    journal: "IEEE Transactions on Electron Devices",
    year: 2026,
    isNew: true,
  },
  {
    badge: "acs",
    badgeLabel: "ACS",
    title: "Facile Single-Step Pyrolysis and Activation of Waste Cotton Textiles for High-Throughput Synthesis of Nanoporous Carbon",
    url: "https://pubs.acs.org/doi/full/10.1021/acssusresmgt.5c00641",
    authors: "Tan WX, Chiang PJ, Lim GY, Tan HT, Seetoh IP, Guo Y, Ramesh AK, Lai CQ.",
    piSpan: "Ramesh AK",
    journal: "ACS Sustainable Resource Management",
    year: 2026,
    isNew: true,
  },
  {
    badge: "wiley",
    badgeLabel: "Wiley",
    title: "Stereolithography Additive Manufacturing of Conductive SiOC‐Cu Interpenetrating Phase Composite with Improved Ductility, Thermal Stability, and Corrosion Resistance",
    url: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admt.202501276",
    authors: "Zhou Z, Lim GY, Zhou X, Ramesh AK, Wang J, Guo Y, Liu M, Lai CQ.",
    piSpan: "Ramesh AK",
    journal: "Advanced Materials Technologies",
    year: 2026,
  },
  {
    badge: "acs",
    badgeLabel: "ACS",
    title: "Polydopamine Assisted Electroless Deposition of Strongly Adhesive NiFe Films for Flexible Spintronics",
    url: "https://pubs.acs.org/doi/abs/10.1021/acsami.4c19118",
    authors: "Ramesh AK, Chen X, Seetoh IP, Lim GY, Tan WX, Thirunavukkarasu V, Jin T, Lew WS, Lai C.",
    piSpan: "Ramesh AK",
    journal: "ACS Applied Materials & Interfaces",
    year: 2025,
  },
  {
    badge: "rsc",
    badgeLabel: "RSC",
    title: "Enhanced Photoelectrochemical Water Splitting using Carbon Cloth Functionalized with ZnO Nanostructures via Polydopamine Assisted Electroless Deposition",
    url: "https://pubs.rsc.org/en/content/articlehtml/2024/nr/d4nr00761a",
    authors: "Seetoh IP, Ramesh AK, Tan WX, Lai CQ.",
    piSpan: "Ramesh AK",
    journal: "Nanoscale",
    year: 2024,
  },
  {
    badge: "acs",
    badgeLabel: "ACS",
    title: "Gamma-Ray Irradiation Induced Ultrahigh Room-Temperature Ferromagnetism in MoS₂ Sputtered Few-Layered Thin Films",
    url: "https://pubs.acs.org/doi/abs/10.1021/acsnano.2c11955",
    authors: "Anbalagan AK, Hu FC, Chan WK, Gandhi AC, Gupta S, Chaudhary M, Chuang KW, Ramesh AK, Billo T, Sabbah A, Chiang CY.",
    piSpan: "Ramesh AK",
    journal: "ACS Nano",
    year: 2023,
  },
  {
    badge: "ieee",
    badgeLabel: "IEEE",
    title: "High-Performing Polycrystalline MoS₂-Based Microelectromechanical Piezoresistive Pressure Sensor",
    url: "https://ieeexplore.ieee.org/abstract/document/9863737",
    authors: "Rana V, Gangwar P, Ramesh AK, Sharma T, Bhat KN, Nayak MM, Das S, Singh P.",
    piSpan: "Ramesh AK",
    journal: "IEEE Sensors Journal",
    year: 2022,
  },
  {
    badge: "iop",
    badgeLabel: "IOP",
    title: "Biological Sensing Using Anomalous Hall Effect Devices",
    url: "https://iopscience.iop.org/article/10.1088/1361-6528/ac6c32/meta",
    authors: "Ramesh AK, Chou YT, Lu MT, Singh P, Tseng YC.",
    piSpan: "Ramesh AK",
    journal: "Nanotechnology",
    year: 2022,
  },
  {
    badge: "iop",
    badgeLabel: "IOP",
    title: "Interface Imperfection Effects on Spin Transfer Torque Switching: An Atomistic Approach",
    url: "https://iopscience.iop.org/article/10.1088/1361-6463/ac55c2/meta",
    authors: "Ramesh AK, Cheng CW, Ku TC, Rana V, Gangwar P, Singh P, Tseng YC.",
    piSpan: "Ramesh AK",
    journal: "Journal of Physics D: Applied Physics",
    year: 2022,
  },
  {
    badge: "elsevier",
    badgeLabel: "Elsevier",
    title: "Investigating the Mechanism of Magnetic Phase Transition Temperature of FeRh Thin Films by Doping Copper Impurities",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S025405842101035X",
    authors: "Chung JC, Kumar Anbalagan A, Fan CL, Liao YH, Ramesh AK, Gupta S, Tseng YC, Tai NH, Lee CH.",
    piSpan: "Ramesh AK",
    journal: "Materials Chemistry and Physics",
    year: 2021,
  },
  {
    badge: "acs",
    badgeLabel: "ACS",
    title: "Insertion Trade-off Effects on the Spin-Transfer Torque Memory Explored by In Situ X-ray",
    url: "https://pubs.acs.org/doi/abs/10.1021/acsaelm.1c00554",
    authors: "Ramesh AK, Chen KM, Lin YJ, Singh P, Wei JH, Hsin YC, Wu CI, Tseng YC.",
    piSpan: "Ramesh AK",
    journal: "ACS Applied Electronic Materials",
    year: 2021,
  },
  {
    badge: "iop",
    badgeLabel: "IOP",
    title: "A Highly Sensitive Wearable Flexible Strain Sensor Based on Polycrystalline MoS₂ Thin Film",
    url: "https://iopscience.iop.org/article/10.1088/1361-6528/ab9970/meta",
    authors: "Rana V, Gangwar P, Meena JS, Ramesh AK, Bhat KN, Das S, Singh P.",
    piSpan: "Ramesh AK",
    journal: "Nanotechnology",
    year: 2020,
  },
  {
    badge: "ieee",
    badgeLabel: "IEEE",
    title: "Diameter-Dependent Piezoresistive Sensing Performance of Junctionless Gate-All-Around Nanowire FET",
    url: "https://ieeexplore.ieee.org/abstract/document/9091184",
    authors: "Rana V, Ahmad G, Ramesh AK, Das S, Singh P.",
    piSpan: "Ramesh AK",
    journal: "IEEE Transactions on Electron Devices",
    year: 2020,
  },
];

const talks: Talk[] = [];

const badgeClasses: Record<BadgeStyle, string> = {
  acs:      "bg-[#1b4f8a] text-[#f5c518]",
  ieee:     "bg-[#00629b] text-white",
  iop:      "bg-[#87ceeb] text-[#cc0000] font-black",
  wiley:    "bg-white text-black border border-gray-300",
  rsc:      "bg-[#e8e832] text-[#1a3d6e]",
  elsevier: "bg-white text-[#ff6c00] border border-[#ff6c00]",
  nature:   "bg-black text-white",
  science:  "bg-[#8b0000] text-white",
};

const talkTypeBadge: Record<Talk["type"], string> = {
  invited:    "bg-[#eef3fb] text-[#1e6fa8]",
  contributed: "bg-[#f0fdf4] text-[#16a34a]",
  keynote:    "bg-[#fff3e0] text-[#c9973a]",
};

function renderAuthors(authors: string, piSpan: string) {
  const parts = authors.split(piSpan);
  return (
    <>
      {parts[0]}
      <span className="font-bold text-[#0a1628] underline decoration-[#c9973a]">{piSpan}</span>
      {parts[1]}
    </>
  );
}

export default function Publications() {
  const total = publications.length;

  return (
    <div className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Research Contributions</h1>
          <div className="w-20 h-1 bg-accent mb-6"></div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              PI name (<span className="font-bold text-foreground underline decoration-[#c9973a]">Ramesh AK</span>) is underlined in amber throughout.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 shrink-0"
              asChild
              data-testid="button-google-scholar"
            >
              <a href={GOOGLE_SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                <BookOpen size={15} />
                Google Scholar
                <ExternalLink size={13} />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Tabs defaultValue="journals">
            <TabsList className="mb-8 h-auto p-1 bg-muted/60 rounded-lg">
              <TabsTrigger
                value="journals"
                className="gap-2 px-5 py-2.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md"
              >
                <BookOpen size={15} />
                Journal Publications
                <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                  {total}
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="talks"
                className="gap-2 px-5 py-2.5 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-md"
              >
                <Mic size={15} />
                Conferences &amp; Talks
                {talks.length > 0 && (
                  <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                    {talks.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            {/* Journal Publications */}
            <TabsContent value="journals">
              <motion.ol
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="list-none p-0 m-0 divide-y divide-border/60"
                data-testid="publications-list"
              >
                {publications.map((pub, index) => {
                  const number = total - index;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
                      className="group relative flex items-start gap-4 py-5 px-2 hover:bg-muted/40 rounded-lg transition-colors"
                      data-testid={`publication-item-${number}`}
                    >
                      <span
                        className="absolute left-2 top-[22px] text-base font-bold min-w-[26px] text-right select-none"
                        style={{ color: "#c9973a" }}
                        aria-hidden="true"
                      >
                        {number}.
                      </span>

                      <div
                        className={`shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-[11px] font-extrabold text-center leading-tight tracking-wide ml-8 mt-0.5 ${badgeClasses[pub.badge]}`}
                        aria-label={`Published in ${pub.badgeLabel}`}
                      >
                        {pub.badgeLabel}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] font-bold text-[#0a1628] dark:text-foreground leading-snug mb-1.5">
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[#c9973a] hover:text-[#1e6fa8] hover:border-[#1e6fa8] transition-colors"
                            data-testid={`link-publication-${number}`}
                          >
                            {pub.title}
                          </a>
                        </div>

                        <div className="text-[13px] text-[#3a4560] dark:text-muted-foreground mb-2 leading-relaxed">
                          {renderAuthors(pub.authors, pub.piSpan)}
                        </div>

                        <div className="flex items-center flex-wrap gap-2">
                          <span className="text-[13px] text-[#1e6fa8] italic">{pub.journal}</span>
                          <span className="text-[11.5px] bg-[#eef3fb] text-[#1e6fa8] dark:bg-primary/10 dark:text-primary px-2.5 py-0.5 rounded-full font-semibold not-italic">
                            {pub.year}
                          </span>
                          {pub.isNew && (
                            <span className="text-[10.5px] bg-[#fff3e0] text-[#c9973a] dark:bg-amber-900/30 dark:text-amber-400 px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ol>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mt-8 pt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground"
              >
                <span>Total: {total} journal publications</span>
                <a
                  href={GOOGLE_SCHOLAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                  data-testid="link-scholar-footer"
                >
                  View on Google Scholar <ExternalLink size={11} className="inline" />
                </a>
              </motion.div>
            </TabsContent>

            {/* Conferences & Talks */}
            <TabsContent value="talks">
              {talks.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Mic className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Conference talks to be added</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Invited talks, conference presentations, and seminars will be listed here.
                  </p>
                </motion.div>
              ) : (
                <div className="divide-y divide-border/60">
                  {talks.map((talk, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
                      className="py-5 px-2 hover:bg-muted/40 rounded-lg transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`shrink-0 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mt-0.5 ${talkTypeBadge[talk.type]}`}
                        >
                          {talk.type}
                        </span>
                        <div>
                          <p className="text-[14.5px] font-bold text-[#0a1628] dark:text-foreground leading-snug mb-1">
                            {talk.title}
                          </p>
                          <p className="text-[13px] text-muted-foreground">
                            {talk.event} · {talk.location} · {talk.year}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
