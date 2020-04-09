// Require packages and set the port
const express = require('express');
const port = 5000;
const app = express();
const routes = require('./routes/routes');
// Required to handle POST and PUT requests.
const bodyParser = require('body-parser');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});