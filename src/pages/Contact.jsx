import{Phone,Mail,MapPin}from'lucide-react';
import{PHONE,EMAIL,ADDRESS}from'../constants';
function Contact(){
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">REACH OUT</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Contact Us</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600">Get in touch with our team for a free consultation</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="bg-white p-6 rounded-lg shadow-lg">
<div className="flex items-center space-x-4 mb-4">
<MapPin className="text-gold" size={32}/>
<div>
<h3 className="font-serif text-xl text-charcoal">Address</h3>
<p className="text-gray-600">{ADDRESS}</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg">
<div className="flex items-center space-x-4 mb-4">
<Phone className="text-gold" size={32}/>
<div>
<h3 className="font-serif text-xl text-charcoal">Phone</h3>
<a href={`tel:${PHONE}`} className="text-gray-600 hover:text-gold transition">{PHONE}</a>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-lg">
<div className="flex items-center space-x-4 mb-4">
<Mail className="text-gold" size={32}/>
<div>
<h3 className="font-serif text-xl text-charcoal">Email</h3>
<a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-gold transition">{EMAIL}</a>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-lg shadow-lg">
<h2 className="font-serif text-2xl text-charcoal mb-6">Send Us a Message</h2>
<form className="space-y-4">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">YOUR NAME</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">PHONE</label>
<input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">EMAIL</label>
<input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">SERVICE NEEDED</label>
<select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition">
<option>Select a service</option>
<option>Concrete Installation</option>
<option>Drainage Installation</option>
<option>Paver Installation</option>
<option>Concrete Bar Installation</option>
<option>Stain and Sealer</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">MESSAGE</label>
<textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"></textarea>
</div>
<button type="submit" className="w-full bg-gold text-charcoal py-4 rounded font-semibold hover:bg-yellow-500 transition">Send Message</button>
</form>
</div>
</div>
</div>
</section>
</div>
);
}
export default Contact;