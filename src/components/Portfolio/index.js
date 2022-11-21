import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Book-Nook",
      description: "MERN Stack",
      link: " https://book-nook2.herokuapp.com/",
      repo: "https://github.com/kristafrancis/book-nook-v2",
    },
    {
      name: "Now-Were-Cookin",
      description:
        "HTML, CSS, Javascript, Materialize, Edamam API, Google Maps API",
      link: "https://kristafrancis.github.io/now-were-cookin/",
      repo: "https://github.com/kristafrancis/now-were-cookin",
    },
    {
      name: "Between-the-Looking-Glass",
      description: "Node.js, Express.js, MySQL, Handlebars",
      link: "https://dry-temple-13792.herokuapp.com/",
      repo: "https://github.com/kristafrancis/between-the-looking-glass",
    },
    {
      name: "Weather-Dashboard",
      description: "HTML, CSS, Javascript, Open Weather API",
      link: "https://kristafrancis.github.io./weather-dashboard-one/",
      repo: "https://github.com/kristafrancis/weather-dashboard-one",
    },
    {
      name: "Portfolio",
      description: "HTML, CSS",
      link: "https://kristafrancis.github.io.Portfolio/",
      repo: "https://github.com/kristafrancis/portfolio",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
