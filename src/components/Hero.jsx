import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE } from '../constants';

// using hero image from project root
const heroImage = new URL('../../hero-img.png', import.meta.url).href;

function Hero() {
  return (
    <section className="bg-charcoal text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Badge - Stagger 1 */}
          <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-2 border border-gold/40 bg-gold/5 px-4 py-1.5 rounded-full w-fit mb-6">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
              <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.15em] text-white uppercase">
                Serving Texas Since Day One
              </span>
            </div>
          </div>

          {/* Heading - Stagger 2 */}
          <h1 className="font-serif text-5xl lg:text-6xl leading-tight animate-reveal" style={{ animationDelay: '0.2s' }}>
            Premium Concrete & <span className="italic text-gold">Paver Installation</span> in Texas
          </h1>

          {/* Paragraph - Stagger 3 */}
          <p className="text-gray-300 text-lg animate-reveal" style={{ animationDelay: '0.3s' }}>
            Transform your outdoor and indoor spaces with durable, stylish, and professionally installed concrete solutions built to last a lifetime.
          </p>

          {/* Buttons - Stagger 4 */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-reveal" style={{ animationDelay: '0.4s' }}>
            <Link to="/quote" className="bg-gold text-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition flex items-center justify-center space-x-2">
              <span>Get a Free Quote</span>
            </Link>
            <a href={`tel:${PHONE}`} className="border border-gold text-gold px-8 py-4 rounded font-semibold hover:bg-gold hover:text-charcoal transition flex items-center justify-center space-x-2">
              <Phone size={18} /><span>Call {PHONE}</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {/* Image - Stagger 5 */}
          <div className="animate-reveal" style={{ animationDelay: '0.5s' }}>
            <img src={heroImage} alt="Hero" className="w-full h-[220px] lg:h-[280px] object-cover rounded-2xl shadow-xl border border-white/20" />
          </div>

          {/* Stats - Stagger 6 */}
          <div className="grid grid-cols-3 gap-6 text-center animate-reveal" style={{ animationDelay: '0.6s' }}>
            <div>
              <div className="text-gold text-4xl font-bold">8+</div>
              <div className="text-sm text-gray-400">CITIES SERVED</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-bold">5</div>
              <div className="text-sm text-gray-400">CORE SERVICES</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-bold">100%</div>
              <div className="text-sm text-gray-400">SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;