import React from 'react';
import { GraduationCap, TestTube, Lightbulb, Microscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function WarmAcademic() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Outfit:wght@300..600&display=swap');
        
        .font-serif { font-family: 'Fraunces', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
      `}} />
      <div 
        className="min-h-screen font-sans text-stone-800 pb-24" 
        style={{ backgroundColor: '#fdfcf9' }}
      >
        <div className="max-w-4xl mx-auto px-6 pt-24">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
            <div className="shrink-0 relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#fdfcf9] z-10 relative shadow-[0_12px_40px_-12px_rgba(107,143,113,0.3)]">
                <img 
                  src="/__mockup/images/pi-headshot.png" 
                  alt="Dr. Akhil K. Ramesh"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent behind photo */}
              <div className="absolute -inset-2 rounded-full border border-amber-200/60 -z-10 bg-amber-50/30 translate-y-2 translate-x-2"></div>
            </div>

            <div className="text-center md:text-left flex flex-col justify-center h-full pt-4">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-stone-900 mb-3 tracking-tight">
                Dr. Akhil K. Ramesh
              </h1>
              <p className="text-lg md:text-xl text-[#6b8f71] font-medium mb-6">
                Director of FIND Lab • ICST, NYCU Taiwan
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <div className="flex items-center gap-2 bg-white/60 border border-stone-200/60 px-4 py-2 rounded-full text-sm font-medium text-stone-700 shadow-sm shadow-stone-100">
                  <GraduationCap className="w-4 h-4 text-amber-600" />
                  Ph.D. IIT Delhi × NYCU
                </div>
                <div className="flex items-center gap-2 bg-white/60 border border-stone-200/60 px-4 py-2 rounded-full text-sm font-medium text-stone-700 shadow-sm shadow-stone-100">
                  <Microscope className="w-4 h-4 text-[#6b8f71]" />
                  Postdoc, Flexible Electronics
                </div>
              </div>
            </div>
          </div>

          {/* Vision Quote */}
          <div className="mb-24 relative">
            <div className="absolute left-1/2 -top-6 -translate-x-1/2 bg-[#fdfcf9] px-4 text-amber-300">
              <Lightbulb className="w-8 h-8" />
            </div>
            <blockquote className="border border-[#6b8f71]/30 rounded-3xl p-10 md:p-14 text-center bg-[#6b8f71]/5 shadow-sm">
              <p className="font-serif italic text-2xl md:text-3xl text-stone-800 leading-snug">
                "Interface-engineered spintronic and functional nano-device systems."
              </p>
            </blockquote>
          </div>

          <div className="grid md:grid-cols-12 gap-16">
            
            {/* Sidebar / Quick Info */}
            <div className="md:col-span-4 space-y-12">
              <section>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#6b8f71] mb-5 flex items-center gap-2">
                  <div className="w-6 h-px bg-[#6b8f71]"></div>
                  Focus Areas
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                    <span className="text-stone-700 leading-relaxed">Spintronics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                    <span className="text-stone-700 leading-relaxed">Nanofabrication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                    <span className="text-stone-700 leading-relaxed">Flexible Electronics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                    <span className="text-stone-700 leading-relaxed">Nanodevices</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Main Content */}
            <div className="md:col-span-8 space-y-12">
              <section>
                <h2 className="font-serif text-3xl text-stone-900 mb-6">Scientific Philosophy</h2>
                <div className="space-y-6 text-lg text-stone-700 leading-relaxed font-light">
                  <p>
                    Science at the nanoscale is fundamentally driven by interfaces. When materials are thinned down to their atomic limits, the boundary between them ceases to be just a physical division—it becomes the active region where new physics emerges. My research philosophy is rooted in understanding, engineering, and ultimately harnessing these interfacial phenomena.
                  </p>
                  <p>
                    I believe that the next generation of functional electronics will not come simply from making things smaller, but from making them smarter. By integrating spintronic effects with flexible substrates and nanodevice architectures, we open pathways to technologies that are not only faster and more energy-efficient, but fundamentally adaptable to human and environmental needs.
                  </p>
                  <p>
                    In the FIND Lab, our approach is inherently collaborative and multidisciplinary. We bridge the gap between fundamental materials physics and practical device engineering. Whether we are fabricating novel heterostructures or probing spin transport mechanics, our guiding principle remains the same: meticulous observation at the interface leads to macroscopic technological breakthroughs.
                  </p>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
