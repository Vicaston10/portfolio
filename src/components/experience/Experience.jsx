import React from "react";
import "./experience.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      Experience
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Tech Stacks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> HTML </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> CSS </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> JavaScript </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> Typescript </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> React </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> Agile CRM </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Tech Stacks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> MySQL </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> NodeJs </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> GIT </h5>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> Jira </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> HTML 5 </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div>
                <h5> CSS 3 </h5>
                <small className="text-light"> Advanced </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
