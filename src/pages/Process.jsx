import{ClipboardCheck,Calendar,Hammer,CheckCircle}from'lucide-react';
function Process(){
const steps=[{icon:ClipboardCheck,num:'01',title:'Consultation',desc:'We start with a free consultation to understand your needs and provide expert recommendations.'},{icon:Calendar,num:'02',title:'Planning',desc:'Our team creates a detailed project plan, timeline, and transparent quote for your approval.'},{icon:Hammer,num:'03',title:'Execution',desc:'Our skilled craftsmen bring your vision to life with precision and quality materials.'},{icon:CheckCircle,num:'04',title:'Completion',desc:'Final walkthrough and inspection to ensure 100% satisfaction before project sign-off.'}];
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">HOW WE WORK</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Our Process</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600 max-w-2xl mx-auto">From initial consultation to project completion, we guide you through every step</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{steps.map((s,i)=>{
const Icon=s.icon;
return(
<div key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center">
<div className="text-gold text-4xl font-bold mb-4">{s.num}</div>
<div className="flex justify-center mb-4">
<Icon className="text-gold" size={48}/>
</div>
<h3 className="font-serif text-2xl text-charcoal mb-3">{s.title}</h3>
<p className="text-gray-600">{s.desc}</p>
</div>
);})}
</div>
</div>
</section>
</div>
);
}
export default Process;