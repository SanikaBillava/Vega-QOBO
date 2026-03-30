import{MapPin,Phone}from'lucide-react';
import{Link}from'react-router-dom';
import areasData from'../data/areas.json';
import{PHONE}from'../constants';
function Areas(){
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">COVERAGE</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Areas We Serve</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600 max-w-2xl mx-auto">Proudly serving 8+ cities across Texas with premium concrete and paver installation services</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
{areasData.map(a=>(
<div key={a.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
<div className="flex items-center space-x-3">
<MapPin className="text-red-500" size={32}/>
<span className="font-sans text-lg text-charcoal font-semibold">{a.name}</span>
</div>
</div>
))}
</div>
<div className="bg-charcoal text-white p-12 rounded-lg shadow-xl text-center">
<h2 className="font-serif text-3xl mb-4">Not sure if we cover your area?</h2>
<p className="text-gray-300 mb-6">We're always expanding our service areas across Texas. Contact us today to see if we can help with your project!</p>
<div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
<Link to="/contact" className="bg-gold text-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition">Contact Us Today</Link>
<a href={`tel:${PHONE}`} className="border border-gold text-gold px-8 py-4 rounded font-semibold hover:bg-gold hover:text-charcoal transition flex items-center justify-center space-x-2">
<Phone size={18}/><span>Call {PHONE}</span>
</a>
</div>
</div>
</div>
</section>
</div>
);
}
export default Areas;