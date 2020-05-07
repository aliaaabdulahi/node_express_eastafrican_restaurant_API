const express = require('express');
const dotenv = require('dotenv');

// Load env var
dotenv.config({ path: './config/config.env' });
// initialize app variable with express
const app = express();
//pass in port to whatever is env variable and if its not availanle for some reason, put in 5000
const PORT = process.env.PORT || 5000;
// in order to run the server we need to call listen
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

