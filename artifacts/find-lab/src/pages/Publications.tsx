import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Mic, Presentation } from "lucide-react";
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

interface TalkItem {
  text: string;
  year: number;
  type: "invited" | "contributed";
}

interface ConferencePaper {
  title: string;
  authors: string;
  piSpan: string;
  conference: string;
  year: number;
  badge: BadgeStyle;
  badgeLabel: string;
  url?: string;
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

const talks: TalkItem[] = [
  {
    text: 'Invited Talk on "Spin Degree of Freedom Unlocks Nano to Quantum" at Material Science and Engineering Graduate Student Club, NTU Singapore',
    year: 2024,
    type: "invited",
  },
  {
    text: 'MMM 2023, 68th Annual Conference on Magnetism and Magnetic Materials — "Electroless Deposition of NiFe on Flexible Substrate: Towards Wearable Magnetic Devices for High Temperature Applications"',
    year: 2023,
    type: "contributed",
  },
  {
    text: 'Case study "Academic Collaborations Leading to Joint/Dual Degrees" at the Global Symposium on Deepening International Collaborations, IEEE Education Society',
    year: 2023,
    type: "invited",
  },
  {
    text: 'Invited Talk on "Advancements in Technology for Interdisciplinary Research" — Kerala APJ Abdul Kalam Technological University sponsored FDP, Universal Engineering College, Thrissur, Kerala',
    year: 2022,
    type: "invited",
  },
  {
    text: 'Invited Talk on "Opportunities of B.Tech courses beyond just IT jobs" — Yuvavani All India Radio Kochi FM',
    year: 2022,
    type: "invited",
  },
  {
    text: 'Invited Talk on "Converting Projects into Publications" — Webinar, Department of Electronics and Communication Engineering, Universal Engineering College, Thrissur, Kerala',
    year: 2021,
    type: "invited",
  },
  {
    text: 'Ramesh A, Chen K, Lin Y, Singh P, Wei J, Hsin Y, Tseng Y. "Virtualizing CoFeB/MgO Reconstruction Effects on the STT pMTJ\'s Performance" — INTERMAG 2021',
    year: 2021,
    type: "contributed",
  },
  {
    text: 'Invited Talk on "Spintronics" — Christ College of Engineering, Irinjalakuda, Kerala',
    year: 2021,
    type: "invited",
  },
  {
    text: "MEMS'19, IEEE International Conference on MEMS, Seoul, South Korea",
    year: 2019,
    type: "contributed",
  },
  {
    text: 'INDICON 2018, Coimbatore, India — "Effect of Annealing on Magnetostrictive Sense Layer for Ultrasensitive Spintronic MEMS Sensor"',
    year: 2018,
    type: "contributed",
  },
  {
    text: 'IWPSD, New Delhi, India — "Magnetostrictive Sense Layer for MTJ based Ultrasensitive MEMS Pressure Sensor"',
    year: 2017,
    type: "contributed",
  },
  {
    text: 'COMSOL Conference, Bangalore — "FEM analysis of MEMS capacitive pressure sensor with segmented boss structure for diaphragm"',
    year: 2016,
    type: "contributed",
  },
  {
    text: "TENCON 2015, IEEE Region 10 Conference, Macau, China",
    year: 2015,
    type: "contributed",
  },
  {
    text: 'INSTRUMENTANIA 2015, National Conference on Instrumentation and Control Engineering — "Design of Segmented Boss Structure for MEMS Capacitive Sensor Diaphragm"',
    year: 2015,
    type: "contributed",
  },
  {
    text: 'National Conference on Recent Advancements in Electronic Communication and Allied Areas — "Range analysis of MEMS Capacitive Pressure Sensor with Bossed Diaphragm"',
    year: 2015,
    type: "contributed",
  },
];

const conferencePapers: ConferencePaper[] = [
  {
    title: "Poly-Crystalline MoS₂ Thin Film Based Low Cost Flexible Sensors",
    authors: "Rana V, Gangwar P, Ramesh AK, Chauhan SS, Shrivastava PK, Das S, Singh P.",
    piSpan: "Ramesh AK",
    conference: "5th IEEE International Conference on Emerging Electronics (ICEE), pp. 1–4. IEEE.",
    year: 2020,
    badge: "ieee",
    badgeLabel: "IEEE",
  },
  {
    title: "Sidewall Transfer Patterning-Based Nano-Crystalline MoS₂ Sensing Element for Stress and Optical MEMS Sensor",
    authors: "Rana V, Singh A, Ramesh A, Dhyani V, Das S, Singh P.",
    piSpan: "Ramesh A",
    conference: "IEEE 32nd International Conference on Micro Electro Mechanical Systems (MEMS), pp. 636–639. IEEE.",
    year: 2019,
    badge: "ieee",
    badgeLabel: "IEEE",
  },
  {
    title: "Polycrystalline Sense Layer for Magnetic Tunnel Junction (MTJ) as Ultrasensitive Sensing Element for MEMS Pressure Sensors",
    authors: "Ramesh AK, Rana V, Das P, Singh P.",
    piSpan: "Ramesh AK",
    conference: "IEEE 32nd International Conference on Micro Electro Mechanical Systems (MEMS), pp. 99–102. IEEE.",
    year: 2019,
    badge: "ieee",
    badgeLabel: "IEEE",
  },
  {
    title: "Effect of Annealing on Magnetostrictive Sense Layer for Ultrasensitive Spintronic MEMS Sensor",
    authors: "Ramesh AK, Singh P, Das P.",
    piSpan: "Ramesh AK",
    conference: "15th IEEE India Council International Conference (INDICON), pp. 1–4. IEEE.",
    year: 2018,
    badge: "ieee",
    badgeLabel: "IEEE",
  },
  {
    title: "A Novel Equivalent Circuit for Analysing the Effect of Local Hotspots in Micro PEM Fuel Cells",
    authors: "Krishnan JR, Ramesh AK, Indhu KK, Ramesh P.",
    piSpan: "Ramesh AK",
    conference: "Procedia Technology, 25:635–642.",
    year: 2016,
    badge: "elsevier",
    badgeLabel: "Elsevier",
  },
  {
    title: "Trade-off Between Sensitivity and Dynamic Range in Designing MEMS Capacitive Pressure Sensor",
    authors: "Ramesh AK, Ramesh P.",
    piSpan: "Ramesh AK",
    conference: "TENCON 2015 — IEEE Region 10 Conference, pp. 1–3. IEEE.",
    year: 2015,
    badge: "ieee",
    badgeLabel: "IEEE",
  },
];

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

const talkTypeBadge: Record<TalkItem["type"], string> = {
  invited:    "bg-[#eef3fb] text-[#1e6fa8]",
  contributed: "bg-[#f0fdf4] text-[#16a34a]",
};

function renderAuthors(authors: string, piSpan: string) {
  const parts = authors.split(piSpan);
  if (parts.length < 2) return <>{authors}</>;
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
  const totalConfsAndTalks = talks.length + conferencePapers.length;

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
                <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                  {totalConfsAndTalks}
                </span>
              </TabsTrigger>
            </TabsList>

            {/* ── Journal Publications ── */}
            <TabsContent value="journals">
              <motion.ol
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="list-none p-0 m-0 divide-y divide-border/60"
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
                >
                  View on Google Scholar <ExternalLink size={11} className="inline" />
                </a>
              </motion.div>
            </TabsContent>

            {/* ── Conferences & Talks ── */}
            <TabsContent value="talks">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

                {/* Subsection: Talks */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#eef3fb] flex items-center justify-center">
                      <Mic size={16} className="text-[#1e6fa8]" />
                    </div>
                    <h2 className="text-lg font-serif font-bold text-foreground">Talks &amp; Invited Presentations</h2>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
                      {talks.length}
                    </span>
                  </div>

                  <div className="divide-y divide-border/60">
                    {talks.map((talk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.25) }}
                        className="flex items-start gap-3 py-4 px-2 hover:bg-muted/40 rounded-lg transition-colors"
                      >
                        <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-0.5 ${talkTypeBadge[talk.type]}`}>
                          {talk.type === "invited" ? "Invited" : "Contributed"}
                        </span>
                        <div className="flex-1">
                          <p className="text-[13.5px] text-foreground leading-relaxed">{talk.text}</p>
                        </div>
                        <span className="shrink-0 text-[11.5px] text-muted-foreground font-medium">{talk.year}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/60 mb-10" />

                {/* Subsection: Conference Papers */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] flex items-center justify-center">
                      <Presentation size={16} className="text-[#16a34a]" />
                    </div>
                    <h2 className="text-lg font-serif font-bold text-foreground">Conference Papers</h2>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-semibold">
                      {conferencePapers.length}
                    </span>
                  </div>

                  <div className="divide-y divide-border/60">
                    {conferencePapers.map((paper, index) => {
                      const number = conferencePapers.length - index;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-30px" }}
                          transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.25) }}
                          className="relative flex items-start gap-4 py-5 px-2 hover:bg-muted/40 rounded-lg transition-colors"
                        >
                          <span
                            className="absolute left-2 top-[22px] text-base font-bold min-w-[22px] text-right select-none"
                            style={{ color: "#c9973a" }}
                          >
                            {number}.
                          </span>

                          <div
                            className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-[10px] font-extrabold text-center leading-tight tracking-wide ml-7 mt-0.5 ${badgeClasses[paper.badge]}`}
                          >
                            {paper.badgeLabel}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-[14px] font-bold text-[#0a1628] dark:text-foreground leading-snug mb-1.5">
                              {paper.title}
                            </p>
                            <div className="text-[12.5px] text-[#3a4560] dark:text-muted-foreground mb-1.5 leading-relaxed">
                              {renderAuthors(paper.authors, paper.piSpan)}
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[12.5px] text-[#1e6fa8] italic">{paper.conference}</span>
                              <span className="text-[11px] bg-[#eef3fb] text-[#1e6fa8] px-2 py-0.5 rounded-full font-semibold not-italic">
                                {paper.year}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border/60 text-xs text-muted-foreground">
                  Total: {talks.length} talks &amp; invited presentations · {conferencePapers.length} conference papers
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
