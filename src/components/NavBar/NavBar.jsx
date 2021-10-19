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
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
        >
        My Projects
      </div>
      <div 
        onClick={() => {
          const anchor = document.querySelector('#about')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
        >
        About Me
      </div>
      <div 
        onClick={() => {
          const anchor = document.querySelector('#footer')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
        >
        Contact
      </div>
    </nav>
  );
}