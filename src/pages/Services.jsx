import{Truck,Droplet,Blocks,Wine,Palette}from'lucide-react';
import servicesData from'../data/services.json';
import{Link}from'react-router-dom';
import{PHONE}from'../constants';
const bgTexture=new URL('../../bg-texture.jpg',import.meta.url).href;
function Services(){
const iconMap={Truck,Droplet,Blocks,Wine,Palette};
return(
<div className="bg-charcoal text-white" style={{backgroundImage:`linear-gradient(rgba(31,31,31,0.85), rgba(31,31,31,0.85)), url(${bgTexture})`,backgroundRepeat:'repeat',backgroundSize:'auto'}}>
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">WHAT WE DO</p>
<h1 className="font-serif text-5xl mb-6">Our Services</h1>
<div className="h-1 w-24 bg-gold mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
{servicesData.slice(0,4).map(s=>{
const Icon=iconMap[s.icon];
return(
<div key={s.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
<div className="text-gold text-4xl font-bold mb-4">{s.num}</div>
<div className="flex justify-center mb-4">
<Icon className="text-gold" size={48}/>
</div>
<h3 className="font-serif text-xl text-gold mb-3">{s.title}</h3>
<p className="text-gray-300">{s.desc}</p>
</div>
);})}
</div>
<div className="grid grid-cols-1 gap-8">
{servicesData.slice(4).map(s=>{
const Icon=iconMap[s.icon];
return(
<div key={s.id} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
<div className="flex items-center space-x-4">
<div className="text-gold text-4xl font-bold">{s.num}</div>
<Icon className="text-gold" size={48}/>
<div>
<h3 className="font-serif text-xl text-gold mb-2">{s.title}</h3>
<p className="text-gray-300">{s.desc}</p>
</div>
</div>
</div>
);})}
</div>
</div>
</section>
<section className="bg-charcoal py-16 border-t border-gray-700">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="font-serif text-4xl mb-4">Ready to Upgrade Your Space?</h2>
<p className="text-gray-300 mb-8">Get a free quote today and bring your vision to life.</p>
<div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
<Link to="/quote" className="bg-gold text-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition">Get Free Quote</Link>
<a href={`tel:${PHONE}`} className="border border-gold text-gold px-8 py-4 rounded font-semibold hover:bg-gold hover:text-charcoal transition">Call {PHONE}</a>
</div>
</div>
</section>
</div>
);
}
export default Services;