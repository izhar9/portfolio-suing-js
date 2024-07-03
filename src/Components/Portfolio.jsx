/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Weather app",
    description:
      "ReactJS-based weather app providing current weather information globally. Offers real-time weather updates, customizable settings, and location-based forecasts",
    url: " weatherr-app1.netlify.app/",
  },
  {
    title: "Resume-Builder",
    description:
      "Crafted an intuitive user interface facilitating effortless resume creation and editing. Provided a diverse selection of industry-specific templates.Implemented a PDF export feature, enabling seamless downloading of resumes in a professional format",
    url: "rresume-builder.netlify.app/",
  },
  {
    title: "rock-paper-scissors",
    description:
      "Rock paper scissors is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are rock, paper, and scissors.",
    url: "https://1rock-paper-scissors.netlify.app",
  },
  {
    title: "speech-to-text",
    description:
      "Speech to text is a speech recognition software that enables the recognition and translation of spoken language into text through computational linguistics",
    url: "https://speech-to-text1.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
