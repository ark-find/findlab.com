import React from 'react';

export function InterfaceLab() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-300 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        .scanline {
          width: 100%;
          height: 1px;
          background: rgba(0, 195, 255, 0.4);
          box-shadow: 0 0 10px rgba(0, 195, 255, 0.8), 0 0 20px rgba(0, 195, 255, 0.4);
        }
        
        .instrument-border {
          border: 1px solid rgba(0, 195, 255, 0.2);
          background: rgba(10, 15, 30, 0.8);
          backdrop-filter: blur(8px);
        }
        
        .glow-border {
          box-shadow: 0 0 25px rgba(0, 195, 255, 0.15);
        }

        .data-grid {
          background-image: 
            linear-gradient(rgba(0, 195, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 195, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}} />

      {/* Top Header Line */}
      <div className="scanline" />

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <header className="mb-16 flex flex-col md:flex-row gap-8 items-start justify-between border-b border-[#00c3ff]/20 pb-12 relative">
          <div className="absolute top-0 right-0 font-mono text-[10px] text-[#00c3ff]/50 tracking-widest hidden md:block">
            SYS.OP.MODE: ACTIVE // ID: FIND-LAB-PI // STATUS: NOMINAL
          </div>
          
          <div>
            <div className="font-mono text-xs text-[#00c3ff] mb-4 uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 bg-[#00c3ff] animate-pulse rounded-sm shadow-[0_0_8px_#00c3ff]"></span>
              Principal Investigator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Dr. Akhil K. <br className="hidden md:block"/>Ramesh
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <span>Director of FIND Lab</span>
              <span className="hidden md:block text-[#00c3ff]/50">|</span>
              <span className="text-slate-500">International College of Semiconductor Technology (ICST), NYCU Taiwan</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Photo & Credentials */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative p-2 instrument-border z-10 glow-border group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00c3ff]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00c3ff]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00c3ff]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00c3ff]"></div>
              
              <div className="relative overflow-hidden bg-[#050810]">
                <img 
                  src="/__mockup/images/pi-headshot.png" 
                  alt="Dr. Akhil K. Ramesh" 
                  className="w-full aspect-[3/4] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out mix-blend-luminosity hover:mix-blend-normal hover:scale-105"
                />
                
                {/* Scanning overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00c3ff]/10 to-transparent h-[10%] w-full animate-[scan_4s_ease-in-out_infinite] pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-4 left-4 font-mono text-[10px] bg-[#050810]/90 px-2 py-1 text-[#00c3ff] border border-[#00c3ff]/30 backdrop-blur-md flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                IMG_SRC: OPTICAL_SENSOR_01
              </div>
            </div>

            <div className="instrument-border p-6 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#00c3ff]/50 to-transparent"></div>
              
              <div className="font-mono text-xs text-amber-500 mb-6 pb-2 border-b border-amber-500/20 flex justify-between items-center">
                <span>[ACADEMIC_METADATA]</span>
                <span className="text-[#00c3ff]/40">v2.4.1</span>
              </div>
              
              <ul className="space-y-6 font-mono text-sm">
                <li className="relative pl-4 border-l border-[#00c3ff]/20">
                  <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 bg-[#00c3ff]"></div>
                  <div className="text-[#00c3ff]/70 text-[10px] mb-1 tracking-wider">POSTDOCTORAL_RESEARCH</div>
                  <div className="text-slate-200 leading-snug">Flexible Electronics &<br/>Nanodevices</div>
                </li>
                <li className="relative pl-4 border-l border-[#00c3ff]/20">
                  <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 bg-[#00c3ff]"></div>
                  <div className="text-[#00c3ff]/70 text-[10px] mb-1 tracking-wider">PH.D._JOINT_PROGRAM</div>
                  <div className="text-slate-200">IIT Delhi & NYCU Taiwan</div>
                  <div className="text-amber-500/80 mt-2 text-xs bg-amber-500/10 inline-block px-2 py-1 rounded-sm border border-amber-500/20">
                    Focus: Spintronics & Nanofabrication
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Philosophy & Vision */}
          <div className="lg:col-span-8 space-y-16 mt-4 lg:mt-0">
            
            <section className="relative">
              <div className="font-mono text-[10px] text-[#00c3ff] mb-8 flex items-center gap-4 tracking-widest uppercase">
                <span className="border border-[#00c3ff]/30 px-2 py-1 bg-[#00c3ff]/5">Section // Scientific_Philosophy</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00c3ff]/30 to-transparent"></div>
              </div>
              
              <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-8 leading-[1.8] font-light">
                <p>
                  At the FIND Lab, our research is fundamentally rooted in <span className="text-amber-500 font-medium px-1 bg-amber-500/10 border border-amber-500/20 rounded-sm">interface-driven physics</span>. We believe that the most compelling phenomena in modern condensed matter physics emerge not within the bulk of materials, but at the precise boundaries where distinct quantum states interact.
                </p>
                <p>
                  By controlling the atomic-scale interfaces between ferromagnets, heavy metals, and emerging 2D materials, we can manipulate spin-orbit torques, Dzyaloshinskii-Moriya interactions, and magnetic anisotropies. This deliberate engineering allows us to tune macroscopic device behavior from the ground up, pushing the limits of current technological paradigms.
                </p>
                <p>
                  Our goal is to translate these fundamental quantum mechanical insights into tangible, <span className="text-[#00c3ff] font-medium px-1 bg-[#00c3ff]/10 border border-[#00c3ff]/20 rounded-sm">next-generation architectures</span>. We are not just observing physical phenomena; we are actively harnessing them to design highly efficient, non-volatile memory and logic devices that will define the future of computing.
                </p>
              </div>
            </section>

            <div className="flex items-center justify-center gap-4 py-4">
              <div className="w-1.5 h-1.5 bg-[#00c3ff]/30 rounded-full"></div>
              <div className="w-1 h-1 bg-[#00c3ff]/20 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#00c3ff]/30 rounded-full"></div>
            </div>

            <section className="instrument-border p-8 md:p-12 relative overflow-hidden bg-[#050810]/80">
               {/* Grid Background */}
              <div className="absolute inset-0 data-grid opacity-50"></div>
              
              {/* Decorative brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#00c3ff]/40"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#00c3ff]/40"></div>
              
              <div className="relative z-10 pl-6 border-l-2 border-amber-500">
                <div className="font-mono text-[10px] text-amber-500 mb-6 tracking-widest">
                  &gt; SYS.OUT // LAB_VISION_STATEMENT
                </div>
                
                <blockquote className="font-mono text-xl md:text-3xl text-white leading-[1.4] uppercase tracking-wide">
                  "Interface-engineered spintronic and functional nano-device systems."
                </blockquote>
                
                <div className="mt-8 flex items-center gap-3 text-[#00c3ff] font-mono text-xs">
                  <div className="w-2 h-4 bg-[#00c3ff] animate-[pulse_1s_ease-in-out_infinite]"></div>
                  AWAITING_INPUT_
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      {/* Bottom Header Line */}
      <div className="scanline mt-12 opacity-50" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}} />
    </div>
  );
}
