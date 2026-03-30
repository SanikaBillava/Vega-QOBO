function Quote(){
return(
<div className="bg-cream">
<section className="py-16">
<div className="max-w-3xl mx-auto px-4">
<div className="text-center mb-12">
<p className="text-gold font-sans text-sm mb-2">FREE ESTIMATE</p>
<h1 className="font-serif text-5xl text-charcoal mb-6">Get a Free Quote</h1>
<div className="h-1 w-24 bg-gold mx-auto mb-4"></div>
<p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
</div>
<div className="bg-white p-8 rounded-lg shadow-xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">FIRST NAME *</label>
<input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">LAST NAME *</label>
<input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">PHONE NUMBER *</label>
<input type="tel" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">EMAIL ADDRESS *</label>
<input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">SERVICE TYPE *</label>
<select required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition">
<option value="">Select a service</option>
<option>Concrete Installation</option>
<option>Drainage Installation</option>
<option>Paver Installation</option>
<option>Concrete Bar Installation</option>
<option>Stain and Sealer</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">PROJECT ADDRESS</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition"/>
</div>
<div>
<label className="block text-sm font-semibold text-gray-700 mb-2">PROJECT DETAILS</label>
<textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold transition" placeholder="Tell us about your project..."></textarea>
</div>
<button type="submit" className="w-full bg-gold text-charcoal py-4 rounded font-semibold hover:bg-yellow-500 transition text-lg">Submit Quote Request</button>
</form>
</div>
</div>
</section>
</div>
);
}
export default Quote;