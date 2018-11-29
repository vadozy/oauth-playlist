// this file is the origin of mykeys.js which was added to .gitignore
// https://console.developers.google.com/apis/credentials?project=vadim-oauth-test

module.exports = {
  google: {
    clientID: 'enter your client id here',
    clientSecret: 'enter your client secret here'
  },
  mongodb: {
    dbURI: 'mongodb://localhost:27017/oauth-test'
  },
  session: {
    cookieKey: 'my super secret key'
  }
};
