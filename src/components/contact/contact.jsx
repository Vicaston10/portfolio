import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import  { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e97yrqg",
        "template_jf5udtn",
        form.current,
        "EzNnYHVmAf9qILel7"
      )
      .then((response) => {
        console.log("Email sent successfully!");
        // Add any additional logic or notifications here
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle any errors or display error messages here
      });
     e.target.reset()
  };

  return (
    <section id="contact">
      Contact
      <h5>Get in Touch </h5>
      <h2> Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4> Email </h4>
            <h5> vaston56@gmail.com </h5>
            <a href="mailto:vaston56@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4> Linkedin </h4>
            <h5> linkedin.com/in/victor-aston-342940159/ </h5>
            <a
              href="https://www.linkedin.com/in/victor-aston-342940159/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <VscGithub className="contact__option-icon" />
            <h4> Github </h4>
            <h5> github.com/Vicaston10 </h5>
            <a href="https://github.com/Vicaston10" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4> WhatsApp </h4>
            <h5> +233248440118 </h5>
            <a
              href="https://wa.me/233248440118"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
