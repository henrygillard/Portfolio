import M from "materialize-css";
import "./Projects.css";
import React from "react";
import { forwardArrow } from "../../shared/Icons";
import { backArrow } from "../../shared/Icons";

export default function Projects({ currentPage, setCurrentPage }) {
  return (
    <section
      id="projects"
      className={
        (currentPage === 0 && "projects-container") ||
        (currentPage === 1 && "projects-container2") ||
        (currentPage === 2 && "projects-container3")
      }
    >
      <h1>
        <span>My Projects</span>
      </h1>
      <div className="links">
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-1"
              src="https://i.imgur.com/i8gs9SN.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              MERN APP: Marching Arts DB<i class="material-icons right"></i>
            </span>
            <a href="https://marchingartsdb.herokuapp.com/" target="_blank">
              <span className="link-text">Marching Arts DB</span>
            </a>
          </div>
          <div class="card-reveal grey-text text-darken-4">
            <span class="card-title grey-text text-darken-4">
              MERN APP: Marching Arts DB
              <i class="material-icons right">close</i>
            </span>
            <p>
              Utilized a MERN stack (MongoDB, Express, Node.js) to build a full
              stack application with create, read, update, delete (CRUD)
              operations hitting all RESTful API calls. Created an application
              with a mobile-first approach and styled using Styled-Components
              and CSS3 with flexbox layouts. The app allows a user to sign in
              using JWT token Authentication.
            </p>
            <a href="https://marchingartsdb.herokuapp.com/" target="_blank">
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-1"
              src="https://i.imgur.com/Eis64Iq.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              Ecommerce StoreFront<i class="material-icons right"></i>
            </span>
            <a
              href="https://henrys-ecommerce-app.herokuapp.com"
              target="_blank"
            >
              <span className="link-text">Ecommerce StoreFront</span>
            </a>
          </div>
          <div class="card-reveal grey-text text-darken-4">
            <span class="card-title grey-text text-darken-4">
              MERN APP: Marching Arts DB
              <i class="material-icons right">close</i>
            </span>
            <p>
              Mock eCommerce storefront that uses REST API to display products.
              Products are organized by Category and displayed dynamically.
              Products can be sorted by Price and Rating.
            </p>
            <a
              href="https://henrys-ecommerce-app.herokuapp.com"
              target="_blank"
            >
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-4"
              src="https://i.imgur.com/ay6pUHK.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              HTML/CSS/Javascript Game: BlackJack
              <i class="material-icons right"></i>
            </span>
            <a
              href="https://henrygillard.github.io/BlackJackGame/"
              target="_blank"
            >
              <span className="link-text">Casino BlackJack</span>
            </a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              HTML/CSS/JAVASCRIPT Game: BlackJack
              <i class="material-icons right">close</i>
            </span>
            <p>
              An in-browser application that was created using
              HTML/CSS/JAVASCRIPT. Wireframed and planned UI design of
              application using Photoshop Utilized Git control during the
              production of the application with frequent commits until
              deployment. The game is a fully functioning BlackJack game with
              features such as CSS Card libraries, interactive sound based on
              game scenarios, and betting logic.
            </p>
            <a
              href="https://henrygillard.github.io/BlackJackGame/"
              target="_blank"
            >
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-1"
              src="https://i.imgur.com/bLf7pfB.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              Sing-Page-App: Static Website<i class="material-icons right"></i>
            </span>
            <a href="http://hollymccravey.herokuapp.com/" target="_blank">
              <span className="link-text">
                Holly McCravey's Static Web Page
              </span>
            </a>
          </div>
          <div class="card-reveal grey-text text-darken-4">
            <span class="card-title grey-text text-darken-4">
              MERN APP: Marching Arts DB
              <i class="material-icons right">close</i>
            </span>
            <p>
              A Single Page Application created using React. The app displays
              the static information for a person's business contacts,
              achievements, and personal branding statement.
            </p>
            <a href="http://hollymccravey.herokuapp.com/" target="_blank">
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-1"
              src="https://i.imgur.com/SzaFXIy.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              MERN APP: Palette Picker<i class="material-icons right"></i>
            </span>
            <a
              href="https://pretty-palette-picker.herokuapp.com/"
              target="_blank"
            >
              <span className="link-text">Palette Picker</span>
            </a>
          </div>
          <div class="card-reveal grey-text text-darken-4">
            <span class="card-title grey-text text-darken-4">
              MERN APP: Palette Picker<i class="material-icons right">close</i>
            </span>
            <p>
              Utilized a MERN stack (MongoDB, Express, Node.js) to build a full
              stack application with create, read, update, delete (CRUD)
              operations hitting all RESTful API calls. Created an application
              with a mobile-first approach and styled using Styled-Components
              and CSS3 with flexbox layouts. The app allows a user to
              dynamically style the elements of the app by selecting colors in
              color palettes. A user can create and delete data in the mongo
              database using forms in the application.
            </p>
            <a
              href="https://pretty-palette-picker.herokuapp.com/"
              target="_blank"
            >
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-2"
              src="https://i.imgur.com/TvVcJ3R.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              Express App: Shop-List<i class="material-icons right"></i>
            </span>
            <a
              href="https://henrys-recipe-shopping-list.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <span className="link-text">Shop-List</span>
            </a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Express App: Shop-List<i class="material-icons right">close</i>
            </span>
            <p>
              Utilized a MEN stack (MongoDB, Express, Node.js) to build a full
              stack application in 2 days. With full create, read, update,
              delete (CRUD) operations hitting all RESTful API calls. Created an
              application with a mobile-first approach and styled using
              Styled-Components and CSS3 with flexbox layouts. The app allows
              the user to create data for ingredients for a recipe, which stores
              that data in the app, and allows the user to manipulate the data
              by updating and deleting recipes/ingredients and adding comments
              such as directions and cook time.
            </p>
            <a
              href="https://henrys-recipe-shopping-list.herokuapp.com/"
              target="_blank"
            >
              {" "}
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
        <div className="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              alt="project-3"
              src="https://i.imgur.com/udqK9k1.png"
            ></img>
          </div>
          <div class="card-content">
            <span class="card-title activator ">
              Python/Django APP: Vacations<i class="material-icons right"></i>
            </span>
            <a href="http://alephnullvacations.herokuapp.com/" target="_blank">
              <span className="link-text">Aleph Null Vacations</span>
            </a>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">
              Aleph Null Vacations<i class="material-icons right">close</i>
            </span>
            <p>
              A Full CRUD App designed for users to post vacation stories and
              upload images to amazon???s S3 cloud service. The app utilizes
              Django???s web framework, PostgreSQL database system and Python3.
            </p>
            <a href="http://alephnullvacations.herokuapp.com/" target="_blank">
              <span className="link-text">Check It Out!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
