// --- imports
require('dotenv').config();
const express = require('express');                   // main web framework
const path = require('path');                        // helps with directory paths
const expressLayouts = require('express-ejs-layouts'); // for using layout.ejs
const methodOverride = require('method-override');   // needed to use PUT/DELETE


const connectDB = require('./config/db');            // our db connection file

// connect to mongo 
connectDB();

const app = express();                               // creating express app

// --- view engine setup
app.set('view engine', 'ejs');                       // using ejs templates
app.set('views', path.join(__dirname, 'views'));     // folder where views live
app.use(expressLayouts);                             // enable layout system
app.set('layout', 'layout');                         // default layout file

// --- middleware
app.use(express.urlencoded({ extended: true }));     // lets us read form data
app.use(methodOverride('_method'));                  // override POST → PUT/DELETE
app.use(express.static(path.join(__dirname, 'public'))); // serve CSS + images

// --- routes
const workoutRoutes = require('./routes/workoutroutes');
app.use('/workouts', workoutRoutes);

// homepage route
app.get('/', (req, res) => {
    res.render('index'); // splash page
});

// --- start server
const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
});
