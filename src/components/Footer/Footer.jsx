import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useState } from "react";
import "./Footer.css"
import { Link } from "react-scroll";
import React from "react"


  

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
          const anchor = document.querySelector('#home')
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}
        >
        Home
      </div>
      </div>
      <div className="coffee-button">
          <ProductDisplay />
        </div>
    </footer>
  );
}