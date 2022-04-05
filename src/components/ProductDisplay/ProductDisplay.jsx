import Button from "@material-ui/core/Button";
import "./ProductDisplay.css";
import React from "react";

export default function ProductDisplay() {
  return (
    <section className="coffee-button-container">
      <div className="product"></div>
      <form
        className="buy-form"
        action="/create-checkout-session"
        method="POST"
      >
        <button id="buy-button" type="submit">
          Buy Me a Coffee
        </button>
      </form>
    </section>
  );
}
