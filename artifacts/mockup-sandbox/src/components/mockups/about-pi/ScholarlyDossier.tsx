import React from "react";

export function ScholarlyDossier() {
  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#1a2432] font-serif selection:bg-[#d4af37] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-source { font-family: 'Source Serif 4', serif; }
        .bg-navy { background-color: #0b1528; }
        .text-navy { color: #0b1528; }
        .border-amber { border-color: #c49a45; }
        .text-amber { color: #c49a45; }
      `}} />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row bg-navy overflow-hidden">
        {/* Navy Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 z-10 text-[#faf8f3] font-playfair">
          <div className="max-w-xl">
            <span className="text-amber uppercase tracking-widest text-xs md:text-sm font-source font-semibold mb-4 block">Director & Principal Investigator</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">Dr. Akhil K. Ramesh</h1>
            <p className="text-xl md:text-2xl text-[#b0b8c4] italic mt-2 font-source font-light">FIND Lab, International College of Semiconductor Technology (ICST), NYCU Taiwan</p>
            
            <div className="mt-12 md:mt-16 border-l-2 border-amber pl-6">
              <p className="text-lg md:text-xl font-source font-light italic leading-relaxed text-[#e2e6eb]">
                "Interface-engineered spintronic and functional nano-device systems."
              </p>
            </div>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="w-full md:w-5/12 lg:w-1/2 relative min-h-[40vh] md:min-h-full">
          {/* Blend gradient for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent md:hidden z-10" />
          <img 
            src="/__mockup/images/pi-headshot.png" 
            alt="Dr. Akhil K. Ramesh" 
            className="absolute inset-0 w-full h-full object-cover object-top grayscale-[20%] contrast-125"
          />
          {/* Subtle overlay for editorial feel */}
          <div className="absolute inset-0 bg-navy/10 mix-blend-multiply" />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 font-source">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column - Academic Pedigree (Timeline) */}
          <div className="lg:col-span-4">
            <div className="sticky top-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-8 pb-4 border-b border-amber/30">Academic Pedigree</h2>
              
              <div className="relative border-l border-amber/30 ml-3 space-y-10 py-2">
                
                {/* Item */}
                <div className="relative pl-8">
                  <div className="absolute w-2 h-2 rounded-full bg-amber -left-[4.5px] top-2 shadow-[0_0_0_4px_#faf8f3]"></div>
                  <span className="text-sm font-bold text-amber uppercase tracking-wider block mb-1">Present</span>
                  <h3 className="font-playfair font-bold text-lg text-navy leading-snug">Director, FIND Lab</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">International College of Semiconductor Technology (ICST), National Yang Ming Chiao Tung University (NYCU), Taiwan</p>
                </div>

                {/* Item */}
                <div className="relative pl-8">
                  <div className="absolute w-2 h-2 rounded-full bg-navy -left-[4.5px] top-2 shadow-[0_0_0_4px_#faf8f3]"></div>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Postdoctoral</span>
                  <h3 className="font-playfair font-bold text-lg text-navy leading-snug">Postdoc in Flexible Electronics & Nanodevices</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">Advanced research on next-generation functional materials and flexible substrates.</p>
                </div>

                {/* Item */}
                <div className="relative pl-8">
                  <div className="absolute w-2 h-2 rounded-full bg-navy -left-[4.5px] top-2 shadow-[0_0_0_4px_#faf8f3]"></div>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-1">Doctoral</span>
                  <h3 className="font-playfair font-bold text-lg text-navy leading-snug">Ph.D., Joint Program</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">IIT Delhi & NYCU Taiwan</p>
                  <p className="text-sm text-gray-500 mt-1 italic">Focus: Spintronics and Nanofabrication</p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column - Scientific Philosophy */}
          <div className="lg:col-span-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-8 pb-4 border-b border-amber/30">Scientific Philosophy</h2>
            
            <div className="prose prose-lg prose-headings:font-playfair prose-headings:text-navy prose-p:text-gray-800 prose-p:leading-relaxed max-w-none font-source">
              <p className="text-xl leading-loose first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-playfair first-letter:font-bold first-letter:text-navy first-letter:mt-2">
                At the frontier of modern physics, the most compelling phenomena do not occur within the bulk of a material, but at its boundaries. Our research is driven by the conviction that the interfaces between dissimilar materials hold the key to the next generation of computing and memory devices.
              </p>

              <p className="mt-6">
                By carefully engineering these atomic-scale junctions, we can harness spin-orbit torques, manipulate magnetic states, and create functional nanodevices that operate with unprecedented energy efficiency. The interplay of spintronics and advanced nanofabrication is not merely an engineering challenge—it is a deeply fundamental exploration of quantum mechanics manifest in solid-state systems.
              </p>

              <blockquote className="my-10 border-l-4 border-amber pl-6 py-2 bg-white/40 italic text-xl md:text-2xl font-playfair text-navy">
                "True innovation in device physics requires a delicate balance between rigorous theoretical understanding and precise, atomic-scale material synthesis."
              </blockquote>

              <p>
                Our laboratory is dedicated to bridging the gap between fundamental condensed matter physics and scalable device architectures. Through rigorous investigation of flexible electronics, novel spintronic paradigms, and highly integrated functional nanodevices, we aim to lay the groundwork for a post-CMOS technological landscape.
              </p>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
              <div className="flex gap-4">
                <a href="#" className="text-sm font-bold text-navy hover:text-amber transition-colors uppercase tracking-widest border-b border-transparent hover:border-amber">Publications</a>
                <a href="#" className="text-sm font-bold text-navy hover:text-amber transition-colors uppercase tracking-widest border-b border-transparent hover:border-amber">Contact PI</a>
              </div>
              <div className="w-12 h-1 bg-amber"></div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
