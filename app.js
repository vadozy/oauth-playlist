const express = require('express');
const cookieSession = require('cookie-session');
//var cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/mykeys');
//const inspect_request = require('./util/inspect_request');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
//app.use(cookieParser());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//app.use(inspect_request);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
