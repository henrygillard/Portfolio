import "./About.css"
import  React  from "react";
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useState } from "react";
import Particles from "react-particles-js";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Projects() {
    const [selected, setSelected] = useState(false)
    const classes = useStyles();
    return(

        <div id="about" className="about-container">
            <div className="images">
                <img src="https://i.imgur.com/GQr4Qc6.png" alt="me-1"></img>
            </div>
            <div className="about-me">
              <h1><span>About Me</span></h1>
              <Particles className="particles-canvas"
              params={{
                particles: {
                  number: {
                    value: 25,
                    density: {
                      enable: true,
                      value_area: 600,
                    },
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 5,
                      color: "#45ad81",
                    },
                  },
                },
              }}/>
              <p>I am an aspiring Software Developer, 
                  recently graduated form General Assembly’s Software Engineering Immersive Program, 
                  and a Musician. I love blending my passion for creativity/art with tech. 
                  My favorite pieces of art are those that are crafted with ingenuity/design at the fore-front, 
                  and are executed with simplicity. I’m competitive with mostly everything I try to create, 
                  but it is not my main motivating factor to create great work. Put simply, 
                  I enjoy the creative process!</p>
            </div>
        </div>
    )
}