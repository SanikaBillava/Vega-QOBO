import{useState,useEffect}from'react';
import{ChevronLeft,ChevronRight}from'lucide-react';
function Carousel({items}){
const[cur,setCur]=useState(0);
const nxt=()=>setCur((cur+1)%items.length);
const prv=()=>setCur((cur-1+items.length)%items.length);
useEffect(()=>{const t=setInterval(nxt,5000);return()=>clearInterval(t);},[cur]);
return(
<div className="relative w-full h-96 overflow-hidden rounded-lg">
{items.map((it,i)=>(
<div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i===cur?'opacity-100':'opacity-0'}`}>
<img src={it.img} alt={it.alt} className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
<div className="text-center text-white px-4">
<h3 className="font-serif text-3xl mb-2">{it.title}</h3>
<p className="text-lg">{it.desc}</p>
</div>
</div>
</div>
))}
<button onClick={prv} className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold text-charcoal p-2 rounded-full hover:bg-yellow-500 transition">
<ChevronLeft size={24}/>
</button>
<button onClick={nxt} className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold text-charcoal p-2 rounded-full hover:bg-yellow-500 transition">
<ChevronRight size={24}/>
</button>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
{items.map((_,i)=>(
<button key={i} onClick={()=>setCur(i)} className={`w-3 h-3 rounded-full transition ${i===cur?'bg-gold':'bg-white bg-opacity-50'}`}></button>
))}
</div>
</div>
);
}
export default Carousel;