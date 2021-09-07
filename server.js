const stripe = require('stripe')('sk_test_51JX7nEHofPNnQGYeE0BADEIhrvz1G54JP86qzOVrdOdI3lb2BUmI0JDPWyvn6Jj6VpFViE07IKfG5aJscSqnp2uq009M8BJ6cs');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require near the top
require('dotenv').config();
// Connect to the server
// Make sure that dotenv is already required
require('./config/database');

const app = express();

app.use(logger('dev'));
// body parser middleware - adds properties to req.body
app.use(express.json());
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1JXABUHofPNnQGYe8rcJGTQr',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.redirect(303, session.url)
});

// app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
// app.use('/api/users', require('./routes/api/users'));
// const ensureLoggedIn = require('./config/ensureLoggedIn');
// app.use('/api/colors', ensureLoggedIn, require('./routes/api/colors'));
// app.use('/api/palettes', ensureLoggedIn, require('./routes/api/palettes'));

// The following "catch all" route (note the *) 
// is necessary to return the index.html on ALL
// non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configure express app to listen on port 3001
// to avoid conflicting with the react server
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
