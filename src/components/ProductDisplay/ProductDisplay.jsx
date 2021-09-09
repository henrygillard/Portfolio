import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function ProductDisplay() {
    const classes = useStyles();
    return (
        <section className="container">
    <div className="product">
      <div className="description">
      <h3 style={{color: 'white'}}>☕️</h3>
      <h5 style={{color: 'white'}}>$5.00</h5>
      </div>
    </div>
    <form className={classes.root} action="/create-checkout-session" method="POST">
      <Button variant="contained"  type="submit">
        Checkout
      </Button>
    </form>
  </section>
    )
}