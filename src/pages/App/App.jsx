import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "../../components/NavBar/NavBar";
import Projects from '../../components/Projects/Projects';
import Footer from "../../components/Footer/Footer"
import About from '../../components/About/About';

export default function App() {

  return (
    <main className="App">
      
          <NavBar />
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Redirect to="/projects" />
          </Switch>
            <Footer />
    </main>
  );
}