const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
// const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
            googleId: profile.id
      }).then((existingUser) => {
            if(existingUser) {
                done(null, existingUser);
            } else {
                new User({ googleId: profile.id }).save()
                    .then(user => done(null, user));
            }
      })  
    }
  )
);

passport.use(
    new FacebookStrategy({
        clientID: keys.facebookApiId,
        clientSecret: keys.facebookApiSecret,
        callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOne({
            facebookId: profile.id
        }).then((existingUser) => {
            if(existingUser) {
                cb(null, existingUser);
            } else {
                new User({ facebookId: profile.id }).save()
                    .then(user => cb(null, user));
            }
      })
    }
));