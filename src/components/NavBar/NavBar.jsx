import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import "./NavBar.css"

// Not destructuring props this time
export default function NavBar(props) {
 

  return (
    <nav>
      <Link to="/projects">My Projects</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Me</Link>
      <div>
      <a href="https://github.com/henrygillard" target="_blank" rel="noreferrer"><GitHubIcon /></a>
      <a href="https://www.linkedin.com/in/henrygillard/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
    </nav>
  );
}