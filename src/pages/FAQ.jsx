import{useState}from'react';
import{ChevronDown,ChevronUp}from'lucide-react';
const bgTexture=new URL('../../bg-texture.jpg',import.meta.url).href;
function FAQ(){
const faqs=[{q:'How long does a typical project take?',a:'Most residential projects are completed within 3-7 days, depending on size and complexity. We provide a detailed timeline during the consultation.'},{q:'Do you offer warranties?',a:'Yes! All our work comes with a warranty. Concrete installations have a 5-year warranty, and materials are covered by manufacturer warranties.'},{q:'What areas do you serve?',a:'We proudly serve 8+ cities across Texas including Blue Ridge, McKinney, Frisco, Melissa, Celina, Plano, Allen, and Leonard.'},{q:'How much does a project cost?',a:'Costs vary based on project size, materials, and complexity. Contact us for a free, no-obligation quote tailored to your needs.'},{q:'What payment methods do you accept?',a:'We accept cash, checks, and all major credit cards. Payment terms are discussed during the consultation.'}];
const[open,setOpen]=useState(null);
return(
<div className="bg-cream" style={{backgroundImage:`linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${bgTexture})`,backgroundRepeat:'repeat',backgroundSize:'auto'}}>
<section className="py-16">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">QUESTIONS</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Frequently Asked Questions</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600">Find answers to common questions about our services</p>
</div>
<div className="space-y-4">
{faqs.map((f,i)=>(
<div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
<button onClick={()=>setOpen(open===i?null:i)} className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition">
<span className="font-serif text-xl text-charcoal">{f.q}</span>
{open===i?<ChevronUp className="text-gold" size={24}/>:<ChevronDown className="text-gold" size={24}/>}
</button>
{open===i&&<div className="px-6 pb-6 text-gray-600">{f.a}</div>}
</div>
))}
</div>
</div>
</section>
</div>
);
}
export default FAQ;