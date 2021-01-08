import React, { useState, useEffect } from "react";
import backgroundHeader from "../images/background-header.jpg";

function Services() {
  const [slidingElementWidth, setSlidingElementWidth] = useState();
  const [windowWidth, setWindowWidth] = useState();

  useEffect(function handleResize() {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  console.log(windowWidth);

  useEffect(() => {
    if (windowWidth > 1000) {
      setSlidingElementWidth((windowWidth * 0.8) / 4);
    } else if (windowWidth > 600) {
      setSlidingElementWidth((windowWidth * 0.8) / 2);
    } else {
      setSlidingElementWidth(windowWidth * 0.8);
    }
  }, [windowWidth]);

  console.log(slidingElementWidth);

  const [servicesObject, setServicesObject] = useState([]);

  useEffect(() => {
    setServicesObject([
      {
        title: "Papillon de nuit",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon de jour",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "souris de nuit",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon des bois",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon d'automne",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon d'automne",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon d'automne",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
      {
        title: "Papillon d'automne",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quas iure.",
        image: "to define",
      },
    ]);
  }, []);

  let count = 0;

  const moveSlidingElements = tempParam => {
    if (tempParam == "clicked") {
      console.log("cleared");
    }

    let allSlidingElements = document.querySelectorAll(".sliding-element");

    let easeTime = "0.4s";

    if (
      count >
      -allSlidingElements.length +
        (windowWidth > 1000 ? 4 : windowWidth > 600 ? 2 : 1)
    ) {
      count--;
    } else {
      count = 0;
      easeTime = "2s";
    }

    allSlidingElements.forEach(elem => {
      elem.style.transition = `transform ${easeTime} ease-in-out`;
      elem.style.transform = `translateX(${slidingElementWidth * count}px)`;
    });
  };

  return (
    <section id="services" className="services">
      <h3>Mes services</h3>
      <h5>
        Mon but est de creer un environnement paisible et agreable pour tous mes
        patients
      </h5>
      <div className="slider-container">
        {servicesObject.map((object, i) => {
          return (
            <div
              style={{ width: `${slidingElementWidth}px` }}
              className="sliding-element"
            >
              <img src={backgroundHeader} alt="" />
              <h4>{object.title}</h4>
              <p>{object.description}</p>
            </div>
          );
        })}
      </div>
      <div className="slider-button-container">
        <button onClick={() => moveSlidingElements("clicked")}>
          Voir Plus
        </button>
      </div>
    </section>
  );
}

export default Services;
