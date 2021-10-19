import "./Skills.css"
import { useState } from "react";
import  React  from "react"


export default function Skills({ selected, setSelected }) {
   
    return(
    <>
      <button className="show-skills" onClick={(evt) => setSelected(prevSelected => !prevSelected)}>{selected ? `Hide Skills` : `Show Skills`}</button>   
      { selected ?
      <div id="skills" className="skills-container">
        <h1><span>Skills</span></h1>
        <div className="skills-cards">
          <div className="skill-card">
            <h4 className="skill-title">Front-End</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>BootStrap</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div className="skill-card">
          <h4 className="skill-title">Back-End</h4>
            <ul>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="skill-card">
          <h4 className="skill-title">More</h4>
            <ul>
              <li>Git</li>
              <li>Adobe Acrobat</li>
              <li>AWS S3</li>
              <li>VSCode</li>
              <li>Photoshop</li>
              <li>Premiere Pro</li>
            </ul>
          </div>
        </div>
      </div>
       : <div></div> }
    </>
    )
}