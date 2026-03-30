import{Link}from'react-router-dom';
import{Phone,Mail,MapPin,Facebook,Instagram}from'lucide-react';
import{COMPANY_NAME,PHONE,EMAIL,ADDRESS}from'../constants';
function Footer(){
return(
<footer className="bg-charcoal text-white py-12">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="font-serif text-gold text-xl mb-4">{COMPANY_NAME}</h3>
<p className="text-sm text-gray-300">Premium Concrete & Paver Installation in Texas. Serving 8+ cities with 5 core services.</p>
</div>
<div>
<h4 className="font-sans text-gold mb-3">Quick Links</h4>
<div className="space-y-2 text-sm">
<Link to="/about" className="block hover:text-gold transition">About Us</Link>
<Link to="/services" className="block hover:text-gold transition">Services</Link>
<Link to="/work" className="block hover:text-gold transition">Our Work</Link>
<Link to="/areas" className="block hover:text-gold transition">Areas We Serve</Link>
<Link to="/contact" className="block hover:text-gold transition">Contact</Link>
</div>
</div>
<div>
<h4 className="font-sans text-gold mb-3">Contact Info</h4>
<div className="space-y-2 text-sm">
<div className="flex items-start space-x-2">
<MapPin size={16} className="text-gold mt-1"/>
<span>{ADDRESS}</span>
</div>
<div className="flex items-center space-x-2">
<Phone size={16} className="text-gold"/>
<a href={`tel:${PHONE}`} className="hover:text-gold transition">{PHONE}</a>
</div>
<div className="flex items-center space-x-2">
<Mail size={16} className="text-gold"/>
<a href={`mailto:${EMAIL}`} className="hover:text-gold transition">{EMAIL}</a>
</div>
</div>
<div className="flex items-center space-x-4 mt-4">
<a href="#" className="text-gold hover:text-yellow-400 transition"><Facebook size={20}/></a>
<a href="#" className="text-gold hover:text-yellow-400 transition"><Instagram size={20}/></a>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
<p>&copy; 2025 {COMPANY_NAME}. All rights reserved.</p>
<p className="mt-2">Made with ❤️ by QOBO</p>
</div>
</footer>
);
}
export default Footer;