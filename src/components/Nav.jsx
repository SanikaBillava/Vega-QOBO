import{useState}from'react';
import{Link}from'react-router-dom';
import{Phone,Menu,X}from'lucide-react';
import{COMPANY_NAME,PHONE}from'../constants';
function Nav(){
const[open,setOpen]=useState(false);
const links=[{to:'/',txt:'HOME'},{to:'/about',txt:'ABOUT'},{to:'/services',txt:'SERVICES'},{to:'/work',txt:'WORK'},{to:'/areas',txt:'AREAS'},{to:'/contact',txt:'CONTACT'}];
return(
<nav className="bg-charcoal text-white sticky z-50 shadow-lg" style={{top:'var(--qobo-banner-height,0px)'}}>
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="flex items-center space-x-2">
<span className="font-serif text-2xl"><span className="text-gold">Vega</span> <span className="text-white">Decorative Concrete</span></span>
</Link>
<div className="hidden lg:flex items-center space-x-6">
{links.map(l=><Link key={l.to} to={l.to} className="text-sm font-sans hover:text-gold transition">{l.txt}</Link>)}
</div>
<a href={`tel:${PHONE}`} className="hidden lg:block bg-gold text-charcoal px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition flex items-center space-x-2">
<Phone size={18}/><span>Call {PHONE}</span>
</a>
<button className="lg:hidden" onClick={()=>setOpen(!open)}>
{open?<X size={28}/>:<Menu size={28}/>}
</button>
</div>
{open&&<div className="lg:hidden bg-charcoal border-t border-gray-700 px-4 py-4 space-y-3">
{links.map(l=><Link key={l.to} to={l.to} className="block text-sm hover:text-gold transition" onClick={()=>setOpen(false)}>{l.txt}</Link>)}
<a href={`tel:${PHONE}`} className="block bg-gold text-charcoal px-4 py-2 rounded text-center font-semibold">Call {PHONE}</a>
</div>}
</nav>
);
}
export default Nav;