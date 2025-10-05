import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import About from "./About";
import Services from "./Services";
import Navbar from "../components/Navbar";
import MyWork from "./MyWork";
import Contact from "./Contact";
import SplineViewer from "../splineviewer/SplineViewer";
import useIsMobile from "./useIsMobile";
import heroVideo from "../assets/hero.mp4";

export default function Home() {
  const isMobile = useIsMobile();

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
    link.href = "/Portfolio/junaid.pdf";
    link.setAttribute("download", "junaid.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        myworkRef={myworkRef}
        serviceRef={serviceRef}
        homeRef={homeRef}
        contactRef={contactRef}
      />
      <section ref={homeRef} className="section">
        <div className="section__container" id="home">
          <div className="content" data-aos="fade-right">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm{" "}
              <span className="lettersize">
                Junaid Ali
                <br />a <span className="type-animation"></span>Front End
                Developer
              </span>
            </h1>
            <p
              className="description"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              Welcome! I'm Junaid Ali — a Front-End Developer skilled in the
              MERN stack, crafting responsive, user-centric applications with
              React.js and seamless backend integration using Node.js and
              MongoDB.
            </p>
            <div className="action__btns">
              <button
                className="hire__me"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                onClick={() => {
                  scrollToSection(contactRef);
                }}
              >
                Contact me
              </button>
              <button
                className="portfolio"
                onClick={handleDownload}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="image">
            {isMobile ? (
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "300px",
                  height: "auto",
                  borderRadius: "8px",
                  display: "block",
                  margin: "120px auto 0",
                  transform: "translateX(60px)",
                }}
              />
            ) : (
              <SplineViewer />
            )}
          </div>
        </div>
      </section>
      <About ref={aboutRef} />
      <Services ref={serviceRef} />
      <MyWork ref={myworkRef} />
      <Contact ref={contactRef} />
    </>
  );
}
