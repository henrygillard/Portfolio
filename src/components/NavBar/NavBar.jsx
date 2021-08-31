import { Link } from "react-router-dom";

// Not destructuring props this time
export default function NavBar(props) {
 

  return (
    <nav>
      <Link to="/projects">My Projects</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Me</Link>
    </nav>
  );
}