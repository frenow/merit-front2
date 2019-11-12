const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: 'f1b06162bc22843dddac',
    clientSecret: 'f16343db7b155c255a8283b307fe39f25283813e',
    //callbackURL: "http://localhost:3000/auth/github/callback"
    callbackURL: "https://merit-front.herokuapp.com/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});