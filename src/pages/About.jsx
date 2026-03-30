import{Users,Award,Target,Shield}from'lucide-react';
function About(){
const vals=[{icon:Users,title:'Customer First',desc:'Your satisfaction is our top priority'},{icon:Award,title:'Excellence',desc:'We deliver nothing but the best'},{icon:Target,title:'Precision',desc:'Every detail matters to us'},{icon:Shield,title:'Trust',desc:'Licensed, insured, and reliable'}];
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">WHO WE ARE</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">About Vega Decorative Concrete</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
<div>
<p className="text-gray-700 text-lg mb-6">At Vega Decorative Concrete, we specialize in delivering high-quality concrete and outdoor installation services across Texas. Whether you're upgrading your driveway, installing drainage, or enhancing your outdoor space with pavers, we bring precision, durability, and craftsmanship to every project.</p>
<p className="text-gray-700 text-lg mb-6">Our team of skilled professionals is committed to exceeding expectations — on time, every time.</p>
<ul className="space-y-3">
<li className="flex items-center space-x-3 text-gray-700">
<span className="text-gold text-xl">●</span>
<span>Licensed & Insured Professionals</span>
</li>
<li className="flex items-center space-x-3 text-gray-700">
<span className="text-gold text-xl">●</span>
<span>Serving 8+ Cities Across Texas</span>
</li>
<li className="flex items-center space-x-3 text-gray-700">
<span className="text-gold text-xl">●</span>
<span>100% Customer Satisfaction Guarantee</span>
</li>
</ul>
</div>
<div className="bg-gradient-to-br from-gold to-yellow-600 p-12 rounded-lg shadow-xl text-center">
<h2 className="font-serif text-6xl text-white mb-4">TEXAS</h2>
<p className="text-white text-xl font-semibold">PROUDLY SERVING ALL ACROSS TEXAS</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{vals.map((v,i)=>{
const Icon=v.icon;
return(
<div key={i} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
<div className="flex justify-center mb-4">
<Icon className="text-gold" size={48}/>
</div>
<h3 className="font-serif text-xl text-charcoal mb-2">{v.title}</h3>
<p className="text-gray-600">{v.desc}</p>
</div>
);})}
</div>
</div>
</section>
</div>
);
}
export default About;