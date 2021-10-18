import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Projects from '../../components/Projects/Projects';
import Footer from "../../components/Footer/Footer"
import About from '../../components/About/About';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Header from '../../components/Header/Header';
import Skills from "../../components/Skills/Skills";

const Message = ({ message }) => (
  <section>
    <div className="container">
    <p>{message}</p>
    </div>
  </section>
);



export default function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const [selected, setSelected] = useState(false)
 

  return (
    <>
    <main className="App">
      <NavBar selected={selected} setSelected={setSelected}/>
      <Header />
      <About />
      <Skills selected={selected} setSelected={setSelected}/>
      <Projects />
      <Route path="/checkout">
        {message ? (
        <Message message={message} />
        ) : (
        <ProductDisplay />
        )}
      </Route>
    </main>
      <Footer />
    </>
  );
}