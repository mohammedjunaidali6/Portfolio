import React, { useEffect, useRef } from 'react'
import size from "../assets/size.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import About from './About';
import Services from './Services';
import Navbar from '../components/Navbar';
import MyWork from './MyWork';
import Contact from './Contact';

export default function Home() {

  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const homeRef = useRef(null);
  const myworkRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Junaid Ali CV.pdf";
    link.setAttribute("download", "Junaid Ali CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection} aboutRef={aboutRef} myworkRef={myworkRef} serviceRef={serviceRef} homeRef={homeRef} contactRef={contactRef}
      />
      <section ref={homeRef} className="section" >
        <div className="section__container" id='home'>
          <div className="content" data-aos="fade-right">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm <span>Junaid Ali<br />a</span> Front End Developer
            </h1>
            <p className="description" data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">
              Welcome to my web developer portfolio! I'm Junaid Ali, a skilled and
              creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
            </p>
            <div className="action__btns">
              <a href="#contact-section">
                <button className="hire__me" data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">Contact me</button>
              </a>
              <button className="portfolio" onClick={handleDownload} data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine">Download CV</button>
            </div>
          </div>
          <div className="image" data-aos="fade-left">
            <img src={size} alt="profile" />
          </div>
        </div>
      </section>
      <About ref={aboutRef} />
      <Services ref={serviceRef} />
      <MyWork ref={myworkRef} />
      <Contact ref={contactRef} />
    </>
  )
}
