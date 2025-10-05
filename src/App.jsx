import React, { useState, useEffect } from 'react'
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import MyWork from './Pages/MyWork';
import Contact from './Pages/Contact';
import PageLoad from './pageload/PageLoad';
import WhatsAppIcon from './whatsappicon/WhatsAppIcon';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <PageLoad /> : (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
      </Router>
      <WhatsAppIcon />
    </div>
  );
}


export default App