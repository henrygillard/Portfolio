import "./About.css"

export default function Projects() {
    return(
        <div>
            <h1>About Me</h1>
            <div className="images">
                <img src="https://i.imgur.com/t19hd23.jpg" alt="me-1" style={{width: "25rem", height: '32rem'}}></img>
                <img src="https://i.imgur.com/XGEVayS.jpg" alt="me-2" style={{width: "23rem", height: '32rem'}}></img>
                <img src="https://i.imgur.com/oqhuS09.jpg" alt="me-3" style={{width: "30rem", height: '28rem'}}></img>
            </div>
            <p>I am an aspiring Software Developer, 
                recently graduated form General Assembly’s Software Engineering Immersive Program, 
                and a Musician. I love blending my passion for creativity/art with tech. 
                My favorite pieces of art are those that are crafted with ingenuity/design at the fore-front, 
                and are executed with simplicity. I’m competitive with mostly everything I try to create, 
                but it is not my main motivating factor to create great work. Put simply, 
                I enjoy the creative process!</p>
        </div>
    )
}