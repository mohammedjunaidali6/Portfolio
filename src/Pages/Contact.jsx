import { useState, useEffect, forwardRef } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = forwardRef((props, ref) => {
  const [result, setResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2b50893-fb4d-4cdd-8053-f32e4f88a433");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
      setTimeout(() => setResult(false), 1000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="contact-container" ref={ref}  >
        <div className="contact-card" data-aos="zoom-in">
          <div className="contact-info">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Feel free to reach out! Connect with me on social media or send a
              message using the form.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/junaid-ali-mohammed-60646a197/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mohammedjunaidali6"
                target="_blank"
                rel="noopener noreferrer"
                className="icon github"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/junaidali1507"
                target="_blank"
                rel="noopener noreferrer"
                className="icon twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <h3 className="form-title">Send a Message</h3>

            {result && (
              <p className="success-message">Message sent successfully! ✅</p>
            )}
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Message</label>
            <textarea name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
});
export default Contact;
