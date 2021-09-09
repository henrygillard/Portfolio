import "./About.css"
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useState } from "react";

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

        <div className="container">
            <h1>About Me!</h1>
            <p>I am an aspiring Software Developer, 
                recently graduated form General Assembly’s Software Engineering Immersive Program, 
                and a Musician. I love blending my passion for creativity/art with tech. 
                My favorite pieces of art are those that are crafted with ingenuity/design at the fore-front, 
                and are executed with simplicity. I’m competitive with mostly everything I try to create, 
                but it is not my main motivating factor to create great work. Put simply, 
                I enjoy the creative process!</p>
            <div className="images">
                <img src="https://i.imgur.com/t19hd23.jpg" alt="me-1"></img>
            </div>
            <div className="about-me-links">
                <a href="https://github.com/henrygillard" target="_blank" rel="noreferrer" style={{borderRight: 'solid thin'}}><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/henrygillard/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
            <div className={classes.root}>
            <Button  onClick={() => setSelected(true)} variant="contained">Buy Me a Coffee </Button> 
            </div>
            {selected ?
            <>
            <ProductDisplay />
            <hr />
            </>
            :<hr />
         }
        </div>
    )
}