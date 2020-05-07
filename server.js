const express = require('express');
const dotenv = require('dotenv');

// Router files
const restaurants = require('./routes/restaurants');
//requiring the router file

// Load env var
dotenv.config({ path: './config/config.env' });
// initialize app variable with express
const app = express();

// Mount routers
app.use('/api/v1/restaurants', restaurants);
// using this link will mean we no longer need to include it in that file

//pass in port to whatever is env variable and if its not availanle for some reason, put in 5000
const PORT = process.env.PORT || 5000;
// in order to run the server we need to call listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

