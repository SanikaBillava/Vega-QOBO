import { Users, Award, Target, Shield } from 'lucide-react';

// Ensure the path to your texture is correct
const bgTexture = new URL('../../bg-texture.jpg', import.meta.url).href;
const aboutImage = new URL('../../about-1.jpeg', import.meta.url).href;

function About() {
  const bulletPoints = [
    "Licensed & Insured Professionals",
    "Premium-Grade Materials Only",
    "On-Time, Every Project",
    "Free, No-Obligation Estimates"
  ];

  return (
    /* 1. Changed bg-cream to bg-transparent and added the style object to handle the texture layering */
    <div 
      className="relative py-20 px-4 overflow-hidden bg-transparent"
      style={{
        backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.9), rgba(253, 251, 247, 0.9)), url(${bgTexture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: THE OVERLAPPING IMAGE BOXES --- */}
        <div className="relative h-[450px] w-full max-w-[500px] mx-auto lg:mx-0">
          {/* Large Image Box */}
          <div className="absolute top-0 left-0 w-[85%] h-[90%] bg-[#1A1A1A] rounded-sm shadow-2xl overflow-hidden">
            <img src={aboutImage} alt="About Vega project" className="w-full h-full object-cover opacity-90" />
          </div>

        {/* Small Gold Box (Refined & Compact) */}
<div className="absolute bottom-4 -right-4 w-[40%] h-[45%] bg-[#D4AF37] rounded-sm shadow-2xl flex flex-col items-center justify-center p-6 text-center z-20 border border-white/10 transform hover:scale-105 transition-transform duration-300">
  
  {/* 1. Main Heading: Bold and tight */}
  <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-0 leading-none tracking-tight">
    Texas
  </h2>

  {/* 2. Divider: Very thin and short */}
  <div className="w-8 h-[1px] bg-charcoal/20 my-3"></div>

  {/* 3. Subtext: Micro-typography style */}
  <p className="font-sans text-[8px] md:text-[9px] tracking-[0.3em] font-black text-charcoal uppercase leading-tight">
    Proudly<br/>
    Serving All<br/>
    Across Texas
  </p>
  
</div>
        </div>

        {/* --- RIGHT SIDE: THE CONTENT --- */}
        <div className="flex flex-col">
          <p className="text-[#D4AF37] font-sans text-[10px] tracking-[0.2em] font-bold mb-4 uppercase">
            WHO WE ARE
          </p>
          
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight mb-4">
            About Vega Decorative<br />Concrete
          </h1>
          
          <div className="h-[2px] w-12 bg-[#D4AF37] mb-8"></div>

          <div className="space-y-6 max-w-xl">
            <p className="text-charcoal/80 font-sans leading-relaxed text-sm">
              At Vega Decorative Concrete, we specialize in delivering high-quality concrete and outdoor installation services across Texas. Whether you're upgrading your driveway, installing drainage, or enhancing your outdoor space with pavers, we bring precision, durability, and craftsmanship to every project.
            </p>
            
            <p className="text-charcoal/80 font-sans leading-relaxed text-sm">
              Our team of skilled professionals is committed to exceeding expectations — on time, every time.
            </p>

            <ul className="space-y-4 pt-4">
              {bulletPoints.map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-charcoal/80 font-sans font-bold text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;