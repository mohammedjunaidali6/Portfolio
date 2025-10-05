import React, { useEffect, forwardRef } from "react";
import "./About.css";
import junaid from "../assets/junaid.jpg";

import html from "../assets/html.svg";
import firebase from "../assets/firebase.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.png";
import node from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section ref={ref} className="about-container">
        <div id="aboutpage">
          <h2
            className="about-heading"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            About Me
          </h2>
          <div className="about-content">
            <div className="about-image" data-aos="fade-right">
              <img src={junaid} alt="About Me" />
            </div>
            <div className="about-text" data-aos="fade-left">
              <p
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              >
                Experienced Front-End Developer with over 3 years of experience
                in building scalable, high-performance web applications.
                Proficient and with hands-on experience in the MERN stack
                (MongoDB, Express.js, React.js, and Node.js). Skilled in
                developing both monolithic architectures and micro frontend
                structures, writing clean and maintainable code, designing
                responsive interfaces, and performing thorough testing to ensure
                functionality and reliability.
              </p>
              <p
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              >
                With a strong foundation in frontend development, I build
                responsive applications with seamless API integration and secure
                authentication. I’m experienced in optimizing performance across
                platforms and setting up CI/CD pipelines using GitHub Actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <div className="container">
        <div className="column" data-aos="fade-up">
          <h2 className="title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <p className="date">2015 - 2019</p>
                <h3 id="headings">Computer Science & Engineering</h3>
                <p>
                  I have studied in JNTUH University, where I gained a strong
                  foundation in computer science and technology. My academic
                  journey helped me develop problem-solving skills and a deep
                  understanding of software development principles.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <p className="date">2020</p>
                <h3 id="headings">Training & Development</h3>
                <p>
                  I have trained as a Front-End Developer at SS Labs, gaining
                  hands-on experience in building responsive web applications,
                  creating reusable UI components, and optimizing performance
                  for better user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="column" data-aos="fade-down">
          <h2 className="title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <p className="date">
                  Unicorn Currencies, Hyd | Feb 2024 – April 2025
                </p>
                <h3 id="headings">Front End Developer</h3>
                <p>
                  As a Frontend Developer, I build Single Page Applications
                  (SPAs) using React.js, focusing on reusable UI components and
                  maintaining a Custom Component Library. I optimize
                  performance, collaborate using Git workflows, and enhance user
                  experiences with Glyphr Studio, Figma, and Canva.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <p className="date">
                  Infomerica, Hyd | May 2022 – Jan 2024
                </p>
                <h3 id="headings">Associate Software Engineer</h3>
                <p>
                  I have designed and developed websites and web applications
                  using React.js, focusing on reusable UI components and
                  maintaining a Custom Component Library. I have optimized
                  performance through code splitting and state management while
                  integrating RESTful APIs for smooth data flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        className="teck-stack"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <div className="skills-container">
          <h2 className="skills-title">Tech Stack</h2>
        </div>
        <div className="tech-stack-container">
          <div
            className="tech-row"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
          >
            <div className="tech-item">
              <img src={html} alt="HTML5" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={css} alt="CSS3" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={javascript} alt="JavaScript" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={bootstrap} alt="Bootstrap" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={react} alt="React" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={git} alt="Git" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={tailwind} alt="Tailwind CSS" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={node} alt="Node.js" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={mongodb} alt="MongoDB" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={figma} alt="Figma" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={redux} alt="Redux" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img src={firebase} alt="Firebase" className="tech-logo" />
            </div>
            <div className="tech-item">
              <img
                src={postman}
                alt="GitHub"
                className="tech-logo"
                id="postman"
              />
            </div>
            <div className="tech-item">
              <img
                src={github}
                alt="GitHub"
                className="tech-logo"
                id="github"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default About;
