import React, { useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import Shopping from "../assets/Shopping.png";
import infoHRM from "../assets/infoHRM.png";
import infoGen from "../assets/InfoGen.png";

import "./MyWork.css";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MyWork = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section ref={ref} className="services1">
        <div className="services-header1">
          <div className="services-intro1">
            <h3 id="mainhead" data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">Projects</h3>
            <p data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">
              Here are my projects, showcasing my skills with code links and
              live demos.
            </p>
          </div>
        </div>

        <div
          className="services-grid"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <a
            href="https://online-shopping-platform.vercel.app/"
            id="links"
            target="_blank"
            rel="noopener noreferrer"
            className="service-cards"
            style={{ cursor: "pointer" }}
          >
            <div className="service-cards" style={{ cursor: "pointer" }}>
              <div className="service-icon">
                <img src={Shopping} alt="" width={300} height={200} />
              </div>
              <h3>Online Shopping Platform  </h3>
              <p>
                Developed a full-stack online shopping platform using
                React.js, HTML, and CSS for the frontend, and Node.js,
                Express.js, MongoDB, and Stripe for the backend.
                This platform allows users to browse and purchase products,
                manage their cart, and checkout securely.
              </p>
              <p>
                <span style={{ color: "#61DBFB" }}>#ReactJS </span>
                <span style={{ color: "#3178C6" }}>#ReactBootstrap </span>
                <span style={{ color: "#38BDF8" }}>#Axios </span>
                <span style={{ color: "#A855F7" }}>#React-Redux </span>
                {/* <span style={{ color: "#F02E65" }}>#Appwrite </span> */}
                <span style={{ color: "#FF4154" }}>#React-Query</span>
              </p>
            </div>
          </a>
          <a
            href="https://info-hrm.vercel.app/"
            id="links"
            target="_blank"
            rel="noopener noreferrer"
            className="service-cards"
            style={{ cursor: "pointer" }}
          >
            <div className="service-cards">
              <div className="service-icon">
                <img src={infoHRM} alt="" width={300} height={200} />
              </div>
              <h3>InfoHRM</h3>
              <p>
                Developed an interactive setup wizard for InfoHRM Starter v5.3
                using React.js, HTML, CSS, and JavaScript, with a clean UI and
                React hooks for state management and reusability.
              </p>
              <p>
                <span style={{ color: "#61DBFB" }}>#ReactJS </span>
                <span style={{ color: "#3178C6" }}>#Bootstrap </span>
                <span style={{ color: "#38BDF8" }}>#React-Redux </span>
                <span style={{ color: "#A855F7" }}>#NodeJS </span>
                <span style={{ color: "#F02E65" }}>#ExpressJS </span>
              </p>
            </div>
          </a>
          <a
            href="https://gen-ai-chatbot-steel.vercel.app/"
            id="links"
            target="_blank"
            rel="noopener noreferrer"
            className="service-cards"
            style={{ cursor: "pointer" }}
          >
            <div className="service-cards">
              <div className="service-icon">
                <img src={infoGen} alt="" width={300} height={200} />
              </div>
              <h3>Gen AI Chatbot</h3>
              <p>
                Designed a responsive landing page for InfoGen using HTML5,
                CSS3, JavaScript, and jQuery, featuring an AI-powered chatbot
                with smooth animations for an engaging user experience.
              </p>
              <p>
                <span style={{ color: "#61DBFB" }}>#ReactJS </span>
                <span style={{ color: "#3178C6" }}>#TReactBootsrap </span>
                <span style={{ color: "#38BDF8" }}>#Responsive </span>
                <span style={{ color: "#A855F7" }}>#UI-Design </span>
                <span style={{ color: "#FF4154" }}>#React-Query</span>
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
});

export default MyWork;
