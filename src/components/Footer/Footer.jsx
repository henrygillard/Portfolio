import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import "./Footer.css"

// Not destructuring props this time
export default function NavBar(props) {
 

  return (
    <footer>
      {/* <a href="henrywyattgillard@gmail.com">Contact Me</a> */}
      <div className="social-links">
      <a href="https://github.com/henrygillard" target="_blank" rel="noreferrer"><GitHubIcon /></a>
      <a href="https://www.linkedin.com/in/henrygillard/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
    </footer>
  );
}