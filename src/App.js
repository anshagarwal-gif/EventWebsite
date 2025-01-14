import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import News from './pages/News/News';
import Gallery from './pages/Gallery/Gallery';
import Aboutus from './pages/Aboutus/Aboutus';
import ContactUs from './pages/ContactUs/ContactUs';
import Events from './pages/Events/events';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';


function App() {
  return (
    <Router>
      
        <div className='flex flex-1 items-center'>
          
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/whatwedo' element={<WhatWeDo />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/Aboutus' element={<Aboutus />}/>
            <Route path='/Contactus' element={<ContactUs />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/blog' element={<Blog />}/>
          </Routes>
          
          <Footer/>
          
        </div>
    </Router>
  )
}
export default App;