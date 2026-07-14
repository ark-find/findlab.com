import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#020813]">
      {/* Soft watercolor gradient base */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.png')" }} />
      
      {/* Animated glowing lattice points */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 3 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lattice" width="60" height="104" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="26" r="2" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s' }} />
              <circle cx="60" cy="78" r="2" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              <circle cx="0" cy="78" r="2" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
              <path d="M30 26 L60 78 M30 26 L0 78" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lattice)" />
        </svg>
      </motion.div>

      {/* Layered 2D material sheets */}
      <motion.div
        className="absolute top-[30%] left-[-10%] w-[120%] h-[40%] border-y border-primary/20 bg-primary/5 transform -skew-y-6 blur-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[-10%] w-[120%] h-[40%] border-y border-accent/10 bg-accent/5 transform -skew-y-6 blur-md"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Magnetic field lines (subtle SVGs) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <motion.path
          d="M0,500 C300,400 700,600 1000,500 C1300,400 1700,600 2000,500"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <motion.path
          d="M0,550 C300,450 700,650 1000,550 C1300,450 1700,650 2000,550"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 1 }}
        />
      </svg>

      {/* Deep gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>
  );
}
