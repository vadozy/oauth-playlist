const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// https://console.developers.google.com/apis/credentials?project=vadim-oauth-test
const keys = require('./mykeys');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
        console.log(profile);
        // setTimeout(() => {return done(null, {username: "Vadim S."})}, 100);
    })
);
