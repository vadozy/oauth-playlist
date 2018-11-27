const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// https://console.developers.google.com/apis/credentials?project=vadim-oauth-test
const secret = require('../secret');

passport.use(
  new GoogleStrategy({
    // options for google strategy
    clientID: secret.web.client_id,
    clientSecret: secret.web.client_secret
  }, () => {
    // passport callback function
  })
);
