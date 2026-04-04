import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE } from '../constants';

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: '/', txt: 'HOME' },
    { to: '/about', txt: 'ABOUT' },
    { to: '/services', txt: 'SERVICES' },
    { to: '/work', txt: 'GALLERY' },
    { to: '/areas', txt: 'AREAS' },
    { to: '/contact', txt: 'CONTACT' }
  ];

  return (
    <nav className="bg-charcoal text-white sticky z-50 shadow-lg" style={{ top: 'var(--qobo-banner-height, 0px)' }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO: "Concrete" moved to next line using block and leading-tight */}
        <Link to="/" className="flex items-center">
          <div className="font-serif text-2xl leading-tight">
            <span className="text-white">Vega </span>
            <span className="text-gold">Decorative</span>
            <span className="block text-white">Concrete</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="text-sm font-sans hover:text-gold transition">
              {l.txt}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA: Flex ensures icon and text stay in one line */}
        <a 
          href={`tel:${PHONE}`} 
          className="hidden lg:flex items-center justify-center space-x-2 bg-gold text-charcoal px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition whitespace-nowrap"
        >
          <Phone size={18} strokeWidth={2.5} />
          <span>Call {PHONE}</span>
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-charcoal border-t border-gray-700 px-4 py-4 space-y-3">
          {links.map(l => (
            <Link 
              key={l.to} 
              to={l.to} 
              className="block text-sm hover:text-gold transition" 
              onClick={() => setOpen(false)}
            >
              {l.txt}
            </Link>
          ))}
          <a 
            href={`tel:${PHONE}`} 
            className="flex items-center justify-center space-x-2 bg-gold text-charcoal px-4 py-2 rounded text-center font-semibold"
          >
            <Phone size={16} />
            <span>Call {PHONE}</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;