import{Link}from'react-router-dom';
import{MapPin,Trophy,Gem,DollarSign,Clock,Star,Phone}from'lucide-react';
import Hero from'../components/Hero';
import Carousel from'../components/Carousel';
import testimonialsData from'../data/testimonials.json';
import areasData from'../data/areas.json';
import{PHONE}from'../constants';
function Home(){
const slides=[{img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',alt:'Modern home exterior',title:'Premium Concrete Solutions',desc:'Transform your outdoor spaces'},{img:'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',alt:'Elegant driveway',title:'Expert Paver Installation',desc:'Enhance your property value'},{img:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',alt:'Beautiful patio',title:'Custom Concrete Designs',desc:'Built to last a lifetime'}];
const why=[{icon:Trophy,title:'Experienced Professionals',desc:'Skilled craftsmen with years of expertise'},{icon:Gem,title:'High-Quality Materials',desc:'We use only the best materials'},{icon:DollarSign,title:'Affordable Pricing',desc:'Competitive rates without compromising quality'},{icon:Clock,title:'On-Time Delivery',desc:'Projects delivered on schedule, guaranteed'}];
return(
<div>
<Hero/>
<section className="bg-cream py-16">
<div className="max-w-7xl mx-auto px-4">
<Carousel items={slides}/>
</div>
</section>
{/* <section className="bg-cream py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">COVERAGE</p>
<h2 className="font-serif text-4xl text-charcoal">Areas We Serve</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
{areasData.map(a=>(
<div key={a.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex items-center space-x-3">
<MapPin className="text-red-500" size={24}/>
<span className="font-sans text-charcoal">{a.name}</span>
</div>
))}
</div>
<div className="bg-charcoal text-white p-8 rounded-lg">
<h3 className="font-serif text-2xl mb-3">Not sure if we cover your area?</h3>
<p className="mb-4">We're always expanding our service areas. Contact us today to see if we can help!</p>
<Link to="/contact" className="inline-flex items-center space-x-2 text-gold hover:text-yellow-400 transition">
<span>Contact Us Today</span><span>→</span>
</Link>
</div>
</div>
</section> */}
<section className="bg-charcoal text-white py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">WHY VEGA</p>
<h2 className="font-serif text-4xl">Why Choose Vega Decorative Concrete?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
{why.map((w,i)=>{
const Icon=w.icon;
return(
<div key={i} className="text-center">
<div className="flex justify-center mb-4">
<Icon className="text-gold" size={48}/>
</div>
<h3 className="font-serif text-xl mb-2">{w.title}</h3>
<p className="text-gray-300 text-sm">{w.desc}</p>
</div>
);})}
</div>
<div className="text-center bg-charcoal border-l-4 border-gold pl-6 py-6">
<p className="font-serif text-3xl italic mb-2">Every project is treated like it's our own home.</p>
<p className="text-gold">- The Vega Team</p>
</div>
</div>
</section>
<section className="bg-cream py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">CLIENT REVIEWS</p>
<h2 className="font-serif text-4xl text-charcoal">What Our Clients Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{testimonialsData.map(t=>(
<div key={t.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
<div className="flex mb-3">
{[...Array(t.rating)].map((_,i)=><Star key={i} className="text-gold fill-gold" size={20}/>)}
</div>
<p className="text-gray-700 mb-4 italic">"{t.text}"</p>
<div className="font-semibold text-charcoal">{t.name}</div>
<div className="text-sm text-gray-500">{t.location}</div>
</div>
))}
</div>
</div>
</section>
<section className="bg-charcoal text-white py-16">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="font-serif text-4xl mb-4">Ready to Upgrade Your Space?</h2>
<p className="text-gray-300 mb-8">Get a free quote today and bring your vision to life.</p>
<div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
<Link to="/quote" className="bg-gold text-charcoal px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition">Get Free Quote</Link>
<a href={`tel:${PHONE}`} className="border border-gold text-gold px-8 py-4 rounded font-semibold hover:bg-gold hover:text-charcoal transition flex items-center justify-center space-x-2">
<Phone size={18}/><span>Call {PHONE}</span>
</a>
</div>
</div>
</section>
</div>
);
}
export default Home;