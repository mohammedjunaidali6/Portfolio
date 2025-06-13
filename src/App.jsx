import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import MyWork from './Pages/MyWork';
import Contact from './Pages/Contact';

function App() {
  return (
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
    </div>
  )
}

export default App
