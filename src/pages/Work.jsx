import{useState}from'react';
import{ChevronLeft,ChevronRight}from'lucide-react';
function Work(){
const projects=[{id:1,title:'Driveway Installation',desc:'Complete driveway transformation in McKinney, TX',img:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'},{id:2,title:'Paver Patio',desc:'Beautiful backyard patio in Frisco, TX',img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'},{id:3,title:'Concrete Walkway',desc:'Elegant walkway installation in Plano, TX',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'},{id:4,title:'Drainage System',desc:'Professional drainage solution in Allen, TX',img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80'}];
const[before,setBefore]=useState(true);
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">OUR PORTFOLIO</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Project Showcase</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600">See the quality and craftsmanship we bring to every project</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
{projects.map(p=>(
<div key={p.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
<img src={p.img} alt={p.title} className="w-full h-64 object-cover"/>
<div className="p-4">
<h3 className="font-serif text-xl text-charcoal mb-2">{p.title}</h3>
<p className="text-gray-600 text-sm">{p.desc}</p>
</div>
</div>
))}
</div>
<div className="bg-white p-8 rounded-lg shadow-xl">
<h2 className="font-serif text-4xl text-charcoal text-center mb-8">BEFORE & AFTER — DRAG THE SLIDER</h2>
<div className="relative max-w-4xl mx-auto">
<div className="flex space-x-2 mb-4 justify-center">
<button onClick={()=>setBefore(true)} className={`px-6 py-2 rounded font-semibold transition ${before?'bg-gold text-charcoal':'bg-gray-200 text-gray-700'}`}>BEFORE</button>
<button onClick={()=>setBefore(false)} className={`px-6 py-2 rounded font-semibold transition ${!before?'bg-gold text-charcoal':'bg-gray-200 text-gray-700'}`}>AFTER</button>
</div>
<div className="relative h-96 rounded-lg overflow-hidden">
<img src={before?'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60':'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'} alt={before?'Before':'After'} className="w-full h-full object-cover"/>
</div>
<div className="flex justify-between mt-4 text-sm">
<span className="text-gray-600">{before?'Old concrete driveway':''}</span>
<span className="text-gray-600">{!before?'Professional Vega transformation':''}</span>
</div>
</div>
</div>
</div>
</section>
</div>
);
}
export default Work;