import { MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import areasData from '../data/areas.json';
import { PHONE } from '../constants';

const bgTexture = new URL('../../bg-texture.jpg', import.meta.url).href;
const texasMap = new URL('../../texas.png', import.meta.url).href; // Updated path based on your directory

function Areas() {
  return (
    <div 
      className="relative min-h-screen" 
      style={{
        backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.95), rgba(253, 251, 247, 0.95)), url(${bgTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col mb-20 text-left max-w-xl">
            <p className="text-gold font-sans text-[10px] tracking-[0.3em] font-bold mb-3 uppercase">
              COVERAGE
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4 leading-tight">
              Areas We Serve
            </h1>
            <div className="h-[2px] w-12 bg-gold"></div>
            <p className="text-charcoal/70 mt-6 font-medium leading-relaxed">
              Proudly serving 8+ cities across Texas with premium decorative concrete and professional installation services.
            </p>
          </div>

          {/* MAIN CONTENT SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE: THE CITIES LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areasData.map((a) => (
                <div 
                  key={a.id} 
                  className="group flex items-center space-x-4 p-5 bg-white/50 backdrop-blur-sm border border-charcoal/5 rounded-sm hover:border-gold/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <MapPin className="text-[#E11D48] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" size={20} />
                  </div>
                  <span className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors">
                    {a.name}
                  </span>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: THE TEXAS MAP VISUAL */}
<div className="relative flex justify-center items-start lg:sticky lg:top-24 -mt-12 md:-mt-20">
  {/* Subtle background glow - moved up with the map */}
  <div className="absolute w-72 h-72 bg-gold/5 rounded-full blur-[120px] -top-10"></div>
  
  <img 
    src={texasMap} 
    alt="Texas Service Area" 
    className="relative z-10 w-full max-w-[480px] h-auto object-contain drop-shadow-2xl opacity-95 transition-transform duration-700 hover:scale-105" 
  />
</div>
          </div>

          {/* CONTACT CTA BAR */}
          <div className="mt-24 bg-charcoal text-white p-10 md:p-14 rounded-sm shadow-2xl relative overflow-hidden border-b-8 border-gold">
             {/* Decorative pattern for the CTA box */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="font-serif text-3xl mb-2">Not sure if we cover your area?</h2>
                  <p className="text-gray-400 text-sm max-w-md">We're always expanding. Contact us today to see if we can bring our expertise to your project.</p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    to="/contact" 
                    className="bg-gold text-charcoal px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-lg text-center"
                  >
                    Check Availability
                  </Link>
                  <a 
                    href={`tel:${PHONE}`} 
                    className="border border-white/20 text-white px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all flex items-center justify-center space-x-2"
                  >
                    <Phone size={14}/><span>Call {PHONE}</span>
                  </a>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Areas;