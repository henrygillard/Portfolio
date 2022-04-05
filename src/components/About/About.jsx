import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import VerticalTimelineComponent from "../VerticalTimeline";
import { useState } from "react";
import Particles from "react-particles-js";
import { forwardArrow } from "../../shared/Icons";
import { backArrow } from "../../shared/Icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Projects({ currentPage, setCurrentPage }) {
  const [selected, setSelected] = useState(false);
  const classes = useStyles();
  return (
    <div
      id="about"
      className={
        (currentPage === 0 && "about-container") ||
        (currentPage === 1 && "about-container2") ||
        (currentPage === 2 && "about-container3")
      }
    >
      <div style={{ width: "50%" }}>
        <div>
          <img
            style={{ maxWidth: "25rem" }}
            src="https://i.imgur.com/GQr4Qc6.png"
            alt="me-1"
          ></img>
          <div className="about-me">
            <h1>
              <span>About Me</span>
            </h1>
          </div>
        </div>
        <div style={{ color: "white", padding: "1rem", fontWeight: "bold" }}>
          <hr />
          <p>
            I am a Software Developer, student of General Assembly’s Software
            Engineering Immersive Program, and a Musician. I love blending my
            passion for creativity/art with tech. My favorite pieces of art are
            those that are crafted with ingenuity/design at the fore-front, and
            are executed with simplicity. I’m competitive with mostly everything
            I try to create, but it is not my main motivating factor to create
            great work. Put simply, I enjoy the creative process!
          </p>
          <hr />
        </div>
      </div>
      <div style={{ width: "50%", marginTop: "1rem", overflow: "auto" }}>
        <VerticalTimelineComponent />
      </div>
    </div>
  );
}
