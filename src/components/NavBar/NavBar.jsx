import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'

// Not destructuring props this time
export default function NavBar(props) {
 

  return (
    <nav>
      <Link to="/projects">My Projects</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Me</Link>
      <a href="https://github.com/henrygillard"><GitHubIcon /></a>
    </nav>
  );
}