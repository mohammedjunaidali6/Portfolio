import React, { useEffect, forwardRef } from 'react'
import "./Services.css";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaShoppingCart, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = forwardRef((props, ref) => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="ser" >
      <section ref={ref} className="services">
        <div className="services-header">
          <div className="services-intro">
            <h3 id="mainhead" data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">What I Do</h3>
            <p data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine">I provide top-notch web development and design services to help businesses grow online.</p>
          </div>
        </div>

        <div className="services-grid" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          <div className="service-card">
            <div className="service-icon"><FaCode /></div>
            <h3>Web Development</h3>
            <p>Building fast and scalable web applications.</p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaMobileAlt /></div>
            <h3>Mobile View Design</h3>
            <p>Creating Responsive layout.</p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaPaintBrush /></div>
            <h3>UI/UX Design</h3>
            <p>Designing beautiful and functional interfaces.</p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaServer /></div>
            <h3>API Integration</h3>
            <p>Building robust and secure APIs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaShoppingCart /></div>
            <h3>E-commerce Solutions</h3>
            <p>Developing high-performing online stores.</p>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaChartLine /></div>
            <h3>SEO Optimization</h3>
            <p>Improving website rankings on search engines.</p>
          </div>
        </div>

      </section>
    </div>
  );
});

export default Services;
