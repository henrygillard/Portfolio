import { Link } from "react-router-dom";

import "./NavBar.css"

// Not destructuring props this time
export default function NavBar(props) {
 

  return (
    <nav>
      <Link to="/projects">My Projects</Link>
      <Link to="/about">About Me</Link>
    </nav>
  );
}