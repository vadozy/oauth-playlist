const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// https://console.developers.google.com/apis/credentials?project=vadim-oauth-test
const keys = require('./mykeys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        // passport callback function
    })
);
