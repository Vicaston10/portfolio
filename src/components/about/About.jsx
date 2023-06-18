import React from "react";
import "./about.css";
import ME from "../../assets/selfie.jpeg";
import { BsAwardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2> Aston Victor </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5> Experience </h5>
              <small> Over 3 Years Working Experience </small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5> Clients </h5>
              <small> 20+ Worldwide </small>
            </article>

            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5> Projects </h5>
              <small> 10+ Finished Projects </small>
            </article>
          </div>


        <p>
          I am a highly skilled Front-end Engineer with years of experience in
          developing responsive and user-friendly websites. I am proficient in
          utilizing various web development tools and technologies, such as
          HTML, CSS, JavaScript, and React, to create visually appealing,
          user-friendly and functional websites. I possess excellent
          communication and interpersonal skills, with the ability to work
          collaboratively with cross-functional teams. I am a results-driven and
          detail-oriented professional who thrives in fast-paced environments
          and is committed to delivering high-quality work.
        </p>

        <a href="#contact" className="btn btn-primary"> Contact Me </a>
        </div>
      </div>
    </section>
  );
};

export default About;
