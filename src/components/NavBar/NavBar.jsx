import  React  from "react"
import { Link as Scroll} from "react-scroll";
import M, { Sidenav } from "materialize-css";


import "./NavBar.css"

// Not destructuring props this time
export default function NavBar() {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
 

  return (
    <>
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img src="https://i.imgur.com/oDgXfnf.png"></img></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li onClick={() => {
              const anchor = document.querySelector('#projects')
              anchor.scrollIntoView({ behavior: 'smooth' })}}
              >
            <a>My Projects</a></li>
        <li onClick={() => {
              const anchor = document.querySelector('#about')
              anchor.scrollIntoView({ behavior: 'smooth' })}}
              >
            <a>About Me</a></li>
        <li onClick={() => {
              const anchor = document.querySelector('#footer')
              anchor.scrollIntoView({ behavior: 'smooth' })}}
              >
            <a>Contact</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li onClick={() => {
              const anchor = document.querySelector('#projects')
              anchor.scrollIntoView({ behavior: 'smooth' })}}><a>Projects</a></li>
    <li onClick={() => {
              const anchor = document.querySelector('#about')
              anchor.scrollIntoView({ behavior: 'smooth' })}}><a>About</a></li>
    <li onClick={() => {
              const anchor = document.querySelector('#footer')
              anchor.scrollIntoView({ behavior: 'smooth' })}}><a>Contact</a></li>
  </ul>
    {/* <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <div class="hide-on-med-and-down" id="regular-nav">
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
          </div>
      </div>
    </nav> */}
      </>
  );
}