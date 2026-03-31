import { Truck, Droplet, Blocks, Wine, Palette, Phone } from 'lucide-react';
import servicesData from '../data/services.json';
import { Link } from 'react-router-dom';
import { PHONE } from '../constants';

// 1. Correct paths to the root folder images
const globalBgTexture = new URL('../../bg-texture.jpg', import.meta.url).href;

const getFlipImage = (id) => {
  const images = {
    1: 'concrete-flip.jpeg', // Adjusted extensions to .jpeg as per your screenshot
    2: 'drainage-flip.jpeg',
    3: 'paver-flip.jpeg', 
    4: 'bar-flip.jpeg',
    5: 'stain-flip.jpeg'
  };
  // Goes up two levels: pages -> src -> root
  return new URL(`../../${images[id]}`, import.meta.url).href;
};

function Services() {
  const iconMap = { Truck, Droplet, Blocks, Wine, Palette };

  return (
    <div 
      className="bg-[#111] text-charcoal relative overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${globalBgTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col mb-16 text-left max-w-xl">
            <p className="text-gold font-sans text-[10px] tracking-[0.25em] font-bold mb-3 uppercase">
              WHAT WE DO - HOVER OVER A TILE TO SEE OUR CREATIONS
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4 leading-tight">
              Our Services
            </h1>
            <div className="h-[2px] w-12 bg-gold"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((s) => {
              const IconComponent = iconMap[s.icon];
              const flipImg = getFlipImage(s.id);

              return (
                <div key={s.id} className="group h-[450px] [perspective:1000px]">
                  <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-[#1A1A1A] p-10 rounded-sm shadow-xl flex flex-col items-center justify-center text-center">
                      <div className="absolute top-0 left-0 w-full h-full border-t border-l border-white/5 rounded-sm pointer-events-none"></div>
                      <div className="text-gold/40 text-[10px] tracking-[0.3em] font-black uppercase mb-6">SERVICE {s.num}</div>
                      <div className="flex justify-center mb-8 border border-white/10 p-5 rounded-full bg-charcoal/30 shadow-inner group-hover:border-gold/30 transition-colors">
                        {IconComponent && <IconComponent className="text-gold" size={40} strokeWidth={1.5} />}
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-4">{s.title}</h3>
                      <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-[280px]">{s.desc}</p>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 h-full w-full rounded-sm [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-2xl">
                      <img src={flipImg} alt={s.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-left">
                        <p className="text-gold font-sans text-[10px] tracking-[0.2em] font-bold uppercase mb-1">Craftsmanship</p>
                        <h4 className="font-serif text-xl text-white italic">{s.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold relative py-20 px-4 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl text-charcoal mb-4">Ready to Upgrade Your Space?</h2>
          <p className="text-charcoal/90 mb-10 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Get a free quote today and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/quote" className="bg-charcoal text-white px-10 py-4 rounded-sm shadow-xl flex items-center space-x-2 hover:bg-black transition-all duration-300 font-bold tracking-wider text-xs uppercase">
              <span>✦</span><span>Get Free Quote</span>
            </Link>
            <a href={`tel:${PHONE}`} className="bg-white text-charcoal px-10 py-4 rounded-sm shadow-md flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all duration-300 font-bold tracking-wider text-xs uppercase">
              <Phone size={16} fill="#E11D48" stroke="none" />
              <span>Call {PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;