import M from "materialize-css";
import "./Projects.css"

export default function Projects() {



    return(
        <div>
            <h1>My Projects</h1>
            <div className="links">
                <div className="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://i.imgur.com/SzaFXIy.png"></img>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">MERN APP: Palette Picker<i class="material-icons right"></i></span>
                        <a href="https://pretty-palette-picker.herokuapp.com/">Palette Picker</a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">MERN APP: Palette Picker<i class="material-icons right">close</i></span>
                        <p>Utilized a MERN stack (MongoDB, Express, Node.js) to build a full stack application with create, read, update, delete (CRUD) operations hitting all RESTful API calls.
                        Created an application with a mobile-first approach and styled using Styled-Components and CSS3 with flexbox layouts.
                        The app allows a user to dynamically style the elements of the app by selecting colors in color palettes. A user can create and delete data in the mongo database using forms in the application.
                        </p>
                    </div>
                </div>
                
                <div className="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://i.imgur.com/TvVcJ3R.png"></img>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Express App: Shop-List<i class="material-icons right"></i></span>
                        <a href="https://henrys-recipe-shopping-list.herokuapp.com/">Shop-List</a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Express App: Shop-List<i class="material-icons right">close</i></span>
                        <p>Utilized a MEN stack (MongoDB, Express, Node.js) to build a full stack application in 2 days. With full create, read, update, delete (CRUD) operations hitting all RESTful API calls.
                        Created an application with a mobile-first approach and styled using Styled-Components and CSS3 with flexbox layouts.
                        The app allows the user to create data for ingredients for a recipe, which stores that data in the app, and allows the user to manipulate the data by updating and deleting recipes/ingredients and adding comments such as directions and cook time.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://i.imgur.com/udqK9k1.png"></img>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Vacations App<i class="material-icons right"></i></span>
                        <a href="http://alephnullvacations.herokuapp.com/">Aleph Null Vacations</a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Aleph Null Vacations<i class="material-icons right">close</i></span>
                        <p>A Full CRUD App designed for users to post vacation stories and upload images to amazon’s S3 cloud service.  
                            The app utilizes Django’s web framework, PostgreSQL database system and Python3.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://i.imgur.com/ay6pUHK.png"></img>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Browser Game: BlackJack<i class="material-icons right"></i></span>
                        <a href="https://henrygillard.github.io/BlackJackGame/">Casino BlackJack</a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Browser Game: BlackJack<i class="material-icons right">close</i></span>
                        <p>An in-browser application that was created using HTML/CSS/JAVASCRIPT. 
                        Wireframed and planned UI design of application  using Photoshop
                        Utilized Git control during the production of the application with frequent commits until deployment.
                        The game is a fully functioning BlackJack game with features such as CSS Card libraries, interactive sound based on game scenarios, and betting logic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}