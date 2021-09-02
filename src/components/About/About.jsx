import "./About.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from "@material-ui/icons/LinkedIn"

export default function Projects() {
    return(
        <div className="container">
            <h1>About Me</h1>
            <div className="images">
                <img src="https://i.imgur.com/t19hd23.jpg" alt="me-1" style={{width: "25rem", height: '32rem'}}></img>
            </div>
            <p>I am an aspiring Software Developer, 
                recently graduated form General Assembly’s Software Engineering Immersive Program, 
                and a Musician. I love blending my passion for creativity/art with tech. 
                My favorite pieces of art are those that are crafted with ingenuity/design at the fore-front, 
                and are executed with simplicity. I’m competitive with mostly everything I try to create, 
                but it is not my main motivating factor to create great work. Put simply, 
                I enjoy the creative process!</p>
            <div className="about-me-links">
                
                <a href="https://github.com/henrygillard" target="_blank" rel="noreferrer"><GitHubIcon /></a>
               
                <a href="https://www.linkedin.com/in/henrygillard/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
        </div>
    )
}