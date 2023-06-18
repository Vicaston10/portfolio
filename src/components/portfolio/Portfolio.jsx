import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/aston-catering-services.png";
import IMG2 from "../../assets/aston-store.png";
import IMG3 from "../../assets/loan-platform.png";
import IMG4 from "../../assets/monster-rolodex.png";
import IMG5 from "../../assets/guessing-game.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Eatery Website",
    github: "https://github.com/Vicaston10/Canteen-Web",
    live: "https://vicastoncanteenweb.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "e-Commerce Website",
    github: "https://github.com/Vicaston10/astonstore",
    live: "https://astonstore.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Loan Platform Website",
    github: "https://github.com/Vicaston10/lendsqr-fe-test",
    live: "https://aston-victor-lendsqr-fe-test.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "SuperHeroes Website",
    github: "https://github.com/Vicaston10/Super-Hero-Rolodex",
    live: "https://superheroesrolodex.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Guessing Game",
    github: "https://github.com/Vicaston10/guess-game",
    live: "https://vicastonguessinggame.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      Open Source Projects
      <h5> My Recent Projects</h5>
      <h2> Projects </h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GITHUB
                </a>
                <a href={live} className="btn btn-primary" target="_blank">
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
