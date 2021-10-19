import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useState } from "react";
import "./Footer.css"
import { Link } from "react-scroll";
import { React } from "react"


  

// Not destructuring props this time
export default function NavBar(props) {
  const [selected, setSelected] = useState(false)

 

  return (
    <footer id="footer">
      <div>
        <h3>Contact</h3>
      </div>
      <div className="social-links">
        <a href="mailto:henrywyattgillard@gmail.com" target="_blank"> <EmailIcon /></a>
        <a href="https://github.com/henrygillard" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/henrygillard/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
      <div className="footer-nav">
        <Link 
          duration={5}
          smooth={true}
          to="projects" 
          href="#"
          offset={-110}
          >
          My Projects
          </Link>
          <Link 
          smooth={true}
          to="about" 
          href="#" 
          duration={5}
          offset={-110}
          >
            About Me
        </Link>
          <Link 
          smooth={true}
          to="home" 
          href="#" 
          duration={5}
          offset={-110}
          >
            Home
        </Link>
      </div>
      <div className="coffee-button">
          <ProductDisplay />
        </div>
    </footer>
  );
}