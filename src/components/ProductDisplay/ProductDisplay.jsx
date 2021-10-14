import Button from '@material-ui/core/Button';
import "./ProductDisplay.css"


export default function ProductDisplay() {
    return (
    <section className="coffee-button-container">
      <div className="product">
        {/* <div className="description">
          <h3 style={{color: 'white'}}>☕️</h3>
          <h5 style={{color: 'white'}}>$5.00</h5>
        </div> */}
      </div>
      <form className="buy-form" action="/create-checkout-session" method="POST">
        <button id="buy-button"type="submit">
          Buy Me a Coffee
        </button>
      </form>
  </section>
    )
}