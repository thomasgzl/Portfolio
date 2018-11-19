import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import "./Apropos.css";
import git from "./github-brands.svg";
import Photo from "../img/Photo.png";
import anime from "animejs";
import { SocialIcon } from "react-social-icons";

class Apropos extends Component {
  componentDidMount() {
    let specificPropertyParameters = anime({
      targets: "#specificPropertyParameters .myPhoto",
      rotate: {
        value: 360,
        duration: 1800,
        easing: "easeInOutSine"
      },
      scale: {
        value: 1.5,
        duration: 1600,
        delay: 800,
        easing: "easeInOutQuart"
      },
      delay: 250
    });
  }

  render() {
    return (
      <ScrollableAnchor id={"Apropos"}>
        <div className="aPropos">
          <h1>A PROPOS</h1>
          <p className="paragraphe">
            Passionné par l'univers de l'informatique ainsi que les nouvelles
            technologies, je me suis tout d'abord dirigé vers le design, puis,
            ayant soif d'en apprendre plus, j'ai ensuite continué vers le
            développement web. <br />
            Mon intérêt pour les jeux-vidéo, la musique et la mode
            alimente mon esprit sur l'image et le détail.
            <br />
            Friand de découvrir le monde, l'univers du numérique étant pour
            moi universel, le développement informatique ouvre des possibilités
            intéressantes sur le monde.
            <br />
            Titulaire d’un BTS en Design Graphique, je suis actuellement en
            formation dans le développement web JavaScript REACT à la Wild Code
            School de Bordeaux.
          </p>

          <a href="https://github.com/thomasgzl" target="_blank">
            <button className="buttonGit">
            GITHUB
            </button>
          </a>

          <a href="https://github.com/thomasgzl" target="_blank">
            <button className="buttonCV">
            CV
            </button>
          </a>

        </div>
      </ScrollableAnchor>
    );
  }
}

export default Apropos;
