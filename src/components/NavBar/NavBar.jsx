import  React  from "react"
import { Link as Scroll} from "react-scroll";


import "./NavBar.css"

// Not destructuring props this time
export default function NavBar() {
 

  return (
    <nav>
      <div 
        onClick={() => {
          const anchor = document.querySelector('#projects')
          anchor.scrollIntoView({ behavior: 'smooth' })}}
        >
        My Projects
      </div>
      <div 
        onClick={() => {
          const anchor = document.querySelector('#about')
          anchor.scrollIntoView({ behavior: 'smooth' })}}
        >
        About Me
      </div>
      <div 
        onClick={() => {
          const anchor = document.querySelector('#footer')
          anchor.scrollIntoView({ behavior: 'smooth' })}}
        >
        Contact
      </div>
    </nav>
  );
}