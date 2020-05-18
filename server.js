const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Router files
const restaurants = require('./routes/restaurants');
//requiring the router file

// Load env var
dotenv.config({ path: './config/config.env' });

// initialize app variable with express
const app = express();

// dev logging middleware. we only want this to run if we're in the dev env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} 
//morgan() is a function, different parameters you can pass in, we pass in dev
 

// Mount routers
app.use('/api/v1/restaurants', restaurants);
//using the router file, stating the base url of every path
//the router file is handling all requests to this route and middleware that is specific to this route
// using this link will mean we no longer need to restate this path in every req

//pass in port to whatever is env variable and if its not availanle for some reason, put in 5000
const PORT = process.env.PORT || 5000;
// in order to run the server we need to call listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

