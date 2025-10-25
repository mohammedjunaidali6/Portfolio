import React, { useEffect, useState, forwardRef } from "react";
import Shopping from "../assets/Shopping.png";
import infoHRM from "../assets/infoHRM.png";
import infoGen from "../assets/InfoGen.png";
import Auth from "../assets/auth.png";
import Sale from "../assets/sale.png";


import "./MyWork.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Online Shopping Platform",
    image: Shopping,
    link: "https://github.com/mohammedjunaidali6/Online_Shopping_Platform",
    description:
      "Full-stack shopping platform with secure checkout, cart management, and product browsing.",
    tags: ["#ReactJS", "#Bootstrap", "#Axios", "#React #Redux", "#Query"],
  },
  {
    title: "InfoHRM",
    image: infoHRM,
    link: "https://github.com/mohammedjunaidali6/InfoHRM",
    description: "Setup wizard for HRM Starter v5.3 with React hooks and clean UI.",
    tags: ["#ReactJS", "#Bootstrap", "#Redux", "#NodeJS"],
  },
  {
    title: "Gen AI Chatbot",
    image: infoGen,
    link: "https://github.com/mohammedjunaidali6/GenAiChatbot",
    description: "AI-powered chatbot landing page with smooth animations and responsive design.",
    tags: ["#ReactJS", "#Bootstrap", "#Responsive",],
  },
  {
    title: "Mern_Auth",
    image: Auth,
    link: "https://github.com/mohammedjunaidali6/Mern_App",
    description: "Authentication systems to ensure secure user access and robust identity management.",
    tags: ["#ReactJS", "#NodeJS", "#Express", "#MongoDB"],
  },
  {
    title: "Sales_Analytics_System",
    image: Sale,
    link: "https://github.com/mohammedjunaidali6/Sales_Analytics_System",
    description: "Sales Analytics System built to track performance, visualize trends, and support data-driven decisions.",
    tags: ["#React", "#TypeScript", "#TailwindCSS"],
  },

];

const MyWork = forwardRef((props, ref) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < projects.length) setStartIndex(startIndex + 1);
  };

  return (
    <section ref={ref} className="services1">
      <div className="services-header1">
        <div className="services-intro1">
          <h3
            id="mainhead"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            Projects
          </h3>
          <p
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            Here are my projects, showcasing my skills with code links and live demos.
          </p>
        </div>
      </div>

      <div className="scroll-buttons">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>

      <div className="carousel-track" data-aos="fade-up">
        {projects.slice(startIndex, startIndex + 3).map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="service-cards"
          >
            <div className="service-icon">
              <img src={proj.image} alt={proj.title} width={220} height={140} />
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p>
              {proj.tags.map((tag, idx) => (
                <span key={idx} style={{ color: "#3178C6", marginRight: "6px" }}>{tag}</span>
              ))}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
});

export default MyWork;
