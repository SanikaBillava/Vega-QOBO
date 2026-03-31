import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bgTexture = new URL('../../bg-texture.jpg', import.meta.url).href;

function Work() {
  const projects = [
    { id: 1, title: 'Driveway Installation', desc: 'Complete driveway transformation in McKinney, TX', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Paver Patio', desc: 'Beautiful backyard patio in Frisco, TX', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Concrete Walkway', desc: 'Elegant walkway installation in Plano, TX', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Drainage System', desc: 'Professional drainage solution in Allen, TX', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80' }
  ];

  // --- NEW SLIDER STATE ---
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="bg-transparent" style={{ backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.9), rgba(253, 251, 247, 0.9)), url(${bgTexture})`, backgroundRepeat: 'repeat', backgroundSize: 'auto' }}>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-sans text-[10px] tracking-[0.2em] font-bold mb-2 uppercase">OUR PORTFOLIO</p>
            <h1 className="font-serif text-5xl text-charcoal mb-6">Project Showcase</h1>
            <div className="h-[2px] w-24 bg-gold mx-auto mb-4"></div>
            <p className="text-charcoal/70 font-medium">See the quality and craftsmanship we bring to every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {projects.map(p => (
              <div key={p.id} className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-all border-b-4 border-charcoal/10 hover:border-gold">
                <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{p.title}</h3>
                  <p className="text-charcoal/60 text-xs font-sans tracking-wide uppercase">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- UPDATED BEFORE & AFTER SLIDER SECTION --- */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-8 text-charcoal/60 uppercase tracking-[0.2em] font-bold text-[10px]">
              <span>✦</span>
              <span>Before & After — Drag the Slider</span>
            </div>

            <div className="relative group select-none overflow-hidden rounded-sm shadow-2xl border-b-[12px] border-charcoal">
              
              {/* After Image (Base Layer) */}
              <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden bg-charcoal">
                <img 
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80" 
                  alt="After" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-gold text-charcoal px-4 py-1.5 text-[10px] font-black rounded-sm z-20 shadow-md">
                  AFTER
                </div>
              </div>

              {/* Before Image (Clipping Layer) */}
              <div 
                className="absolute inset-0 h-full overflow-hidden z-10"
                style={{ width: `${sliderPos}%` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60" 
                  alt="Before" 
                  className="absolute inset-0 h-full object-cover max-w-none"
                  style={{ width: 'max(900px, 80vw)' }} // Prevents image shrinking when container narrows
                />
                <div className="absolute top-6 left-6 bg-charcoal text-white px-4 py-1.5 text-[10px] font-black rounded-sm z-20 shadow-md">
                  BEFORE
                </div>
              </div>

              {/* The Control Line & Handle */}
              <div 
                className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="h-full w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-[3px] border-white pointer-events-auto cursor-ew-resize">
                   <div className="flex space-x-1">
                      <ChevronLeft size={18} className="text-charcoal -mr-1" />
                      <ChevronRight size={18} className="text-charcoal -ml-1" />
                   </div>
                </div>
              </div>

              {/* Interaction Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize"
              />
              
              {/* Labels Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-charcoal/90 backdrop-blur-sm py-4 px-8 flex justify-between items-center z-30">
                 <p className="text-white/50 text-[10px] tracking-widest uppercase italic font-bold">Old concrete driveway</p>
                 <p className="text-gold text-[10px] tracking-widest uppercase font-bold">Professional Vega transformation</p>
              </div>
            </div>
          </div>
          {/* --- END SLIDER SECTION --- */}

        </div>
      </section>
    </div>
  );
}

export default Work;