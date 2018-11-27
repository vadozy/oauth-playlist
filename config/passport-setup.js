const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user-model');
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
        new User({
            googleId: profile.id,
            username: profile.displayName
        }).save().then((newUser) => {
            console.log('new user created: ', newUser);
        });
        // setTimeout(() => {return done(null, {username: "Vadim S."})}, 100);
    })
);
