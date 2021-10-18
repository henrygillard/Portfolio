import { Link } from "react-scroll";

import "./NavBar.css"

// Not destructuring props this time
export default function NavBar() {
 

  return (
    <nav>
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
        to="footer" 
        href="#" 
        duration={5}
        offset={-110}
        >
          Contact
        </Link>
    </nav>
  );
}