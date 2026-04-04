import{Link}from'react-router-dom';
import{MapPin,Trophy,Gem,DollarSign,Clock,Star,Phone}from'lucide-react';
import Hero from'../components/Hero';
import Carousel from'../components/Carousel';
import testimonialsData from'../data/testimonials.json';
import areasData from'../data/areas.json';
import{PHONE}from'../constants';
const bgTexture=new URL('../../bg-texture.jpg',import.meta.url).href;
function Home(){
const slides=[{img:new URL('../../bar-flip.jpeg', import.meta.url).href,alt:'Modern home exterior',title:'Premium Concrete Solutions',desc:'Transform your outdoor spaces'},{img:new URL('../../home1.jpeg', import.meta.url).href,alt:'Elegant driveway',title:'Expert Paver Installation',desc:'Enhance your property value'},{img:new URL('../../home2.jpeg', import.meta.url).href,alt:'Beautiful patio',title:'Custom Concrete Designs',desc:'Built to last a lifetime'}];
const why=[{icon:Trophy,title:'Experienced Professionals',desc:'Skilled craftsmen with years of expertise'},{icon:Gem,title:'High-Quality Materials',desc:'We use only the best materials'},{icon:DollarSign,title:'Affordable Pricing',desc:'Competitive rates without compromising quality'},{icon:Clock,title:'On-Time Delivery',desc:'Projects delivered on schedule, guaranteed'}];
return(
<div style={{backgroundImage:`linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${bgTexture})`,backgroundRepeat:'repeat',backgroundSize:'auto'}}>
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
<div className="text-center bg-charcoal border-x-4 border-gold pl-6 py-6">
<p className="font-serif text-3xl italic mb-2">Every project is treated like it's our own home.</p>
<p className="text-gold">- The Vega Team</p>
</div>
</div>
</section>
<section className="bg-cream py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
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
<section className="bg-gold relative py-16 overflow-hidden">
  {/* --- SUBTLE FLOWY WHITE PATTERN --- */}
  
  {/* Top Flowing Path */}
  <svg 
    className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"
  >
    <path 
      fill="#ffffff" 
      d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>

  {/* Bottom Flowing Path (Inverted for depth) */}
  <svg 
    className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none transform rotate-180" 
    viewBox="0 0 1440 320" 
    preserveAspectRatio="none"
  >
    <path 
      fill="#ffffff" 
      d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,101.3C840,85,960,107,1080,128C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
  <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
    <h2 className="font-serif text-3xl md:text-4xl mb-3 text-charcoal font-medium tracking-tight">
      Ready to Upgrade Your Space?
    </h2>
    <p className="text-charcoal/80 mb-8 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
      Get a free quote today and bring your vision to life with Texas's premier decorative concrete specialists.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <Link 
        to="/quote" 
        className="bg-charcoal text-white px-8 py-3.5 rounded shadow-lg flex items-center space-x-2 hover:bg-black transition-all duration-300 font-bold tracking-wider text-xs uppercase"
      >
        <span>✦</span>
        <span>Get Free Quote</span>
      </Link>

      <a 
        href={`tel:${PHONE}`} 
        className="bg-white text-charcoal px-8 py-3.5 rounded shadow-md flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all duration-300 font-bold tracking-wider text-xs uppercase"
      >
        <Phone size={16} fill="#E11D48" stroke="none" />
        <span>Call {PHONE}</span>
      </a>
    </div>
  </div>
</section>
</div>
);
}
export default Home;