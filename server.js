require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// const endpoint = stripe.webhookEndpoints.create({
//   url: 'https://henrygillard.herokuapp.com/webhooks/endpoint',
//   enabled_events: [
//     'charge.failed',
//     'charge.succeeded',
//   ],
// });

// Always require near the top
// Connect to the server
// Make sure that dotenv is already required
require('./config/database');
const endpointSecret = 'whsec_BB6MoeZtt0FtaTMJk67XnGNp5ZckCySL'
const app = express();

const bodyParser = require('body-parser');

const fulfillOrder = (session) => {
  // TODO: fill me in
  console.log("Fulfilling order", session);
}

app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const payload = request.body;

  

  console.log("Got payload: " + payload);

  response.status(200);
});

app.use(logger('dev'));
// body parser middleware - adds properties to req.body
app.use(express.json());
// Configure both serve-favicon & static
// middleware to server from the 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://henrygillard.herokuapp.com/checkout';
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    submit_type: 'donate',
    line_items: [
      {
        price: 'price_1JXDc9HofPNnQGYeXifca6Vi',
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
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
