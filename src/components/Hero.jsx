import{Phone,ArrowRight}from'lucide-react';
import{Link}from'react-router-dom';
import{PHONE}from'../constants';
function Hero(){
return(
<section className="bg-charcoal text-white py-20 lg:py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="flex items-center space-x-2 text-gold text-sm font-sans">
<span className="w-2 h-2 bg-gold rounded-full"></span>
<span>SERVING TEXAS SINCE DAY ONE</span>
</div>
<h1 className="font-serif text-5xl lg:text-6xl leading-tight">
Premium Concrete & <span className="italic text-gold">Paver Installation</span> in Texas
</h1>
<p className="text-gray-300 text-lg">Transform your outdoor and indoor spaces with durable, stylish, and professionally installed concrete solutions built to last a lifetime.</p>
<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
<Link to="/quote" className="bg-gold text-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition flex items-center justify-center space-x-2">
<span>+ Get a Free Quote</span>
</Link>
<a href={`tel:${PHONE}`} className="border border-gold text-gold px-8 py-4 rounded font-semibold hover:bg-gold hover:text-charcoal transition flex items-center justify-center space-x-2">
<Phone size={18}/><span>Call {PHONE}</span>
</a>
</div>
</div>
<div className="grid grid-cols-3 gap-6 text-center">
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
</section>
);
}
export default Hero;