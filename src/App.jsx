import{BrowserRouter as Router,Routes,Route}from'react-router-dom';
import{QoboBanner}from'@qobo/banner';
import Nav from'./components/Nav';
import Footer from'./components/Footer';
import Home from'./pages/Home';
import About from'./pages/About';
import Services from'./pages/Services';
import Work from'./pages/Work';
import Areas from'./pages/Areas';
import Contact from'./pages/Contact';
import Quote from'./pages/Quote';
import FAQ from'./pages/FAQ';
import Process from'./pages/Process';
function App(){
return(
<Router>
<div className="min-h-screen flex flex-col">
<QoboBanner/>
<Nav/>
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/work" element={<Work/>}/>
<Route path="/areas" element={<Areas/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/quote" element={<Quote/>}/>
<Route path="/faq" element={<FAQ/>}/>
<Route path="/process" element={<Process/>}/>
</Routes>
</main>
<Footer/>
</div>
</Router>
);
}
export default App;