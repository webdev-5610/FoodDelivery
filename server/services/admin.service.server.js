'use strict';

const adminModel = require('../model/admin/admin.model.server');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {
    var successRedirectUserId = '';
    //user api list
    app.get("/api/admin/userlist", findAllUsers);
    app.get('/api/admin/restaurantlist', findAllRestaurants);
    app.post("/api/admin/login", passport.authenticate('local'), login);
    app.post("/api/admin/logout", logout);
    app.delete("/api/admin/deleteuser", deleteUserById);
    app.delete('/api/admin/deleterestaurant', deleteRestaurantById);
    app.post("/api/admin/loggedin", loggedin);
    // app.get("/facebook/login", passport.authenticate('facebook', { scope: 'email' }));
    // app.get('/auth/facebook/callback',
    //     passport.authenticate('facebook', {failureRedirect: '/login'}), 
    //         function(req, res) {
    //         res.redirect('/user/' + successRedirectUserId);
    // });

    passport.serializeUser(serializeUser);

    function serializeUser(user, done) {
        done(null, user);
    }

    passport.deserializeUser(deserializeUser);

    function deserializeUser(user, done) {
        adminModel.findUserById(user._id).then(function (user) {
            done(null, user);
        }, function (err) {
            done(err, null);
        });
    }

    let facebookConfig = {
        clientID : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL : process.env.FACEBOOK_CALLBACK_URL
    };

    passport.use(new LocalStrategy(localStrategy));
    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

    function localStrategy(username, password, done){
        adminModel.findUserByCredentials(username, password).then(function (user) {
            console.log(bcrypt.compareSync(password, user.password));
            if (user.username === username && bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }, function (err) {
            if (err) {
                return done(err);
            }
        });
    }

    //function list
    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.status(200).send({});
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }
/*
    function facebookStrategy(token, refreshToken, profile, done) {
        //console.log("get token");
        adminModel.findUserByFacebookId(profile.id).then(function (user) {
            if (user) {
                successRedirectUserId = user._id; 
                //console.log(successRedirectUserId);
                return done(null, user);
            } else {
                var names = profile.displayName.split(" ");
                var newFacebookUser = {
                    lastName: names[1],
                    firstName: names[0],
                    email: profile.emails ? profile.emails[0].value : "",
                    facebook: {
                        id: profile.id,
                        token: token
                    }
                };
                adminModel.createUser(newFacebookUser)
                .then(function (user){
                    if(user) {
                       successRedirectUserId = user._id; 
                       //console.log(successRedirectUserId);
                       return done(null, user);
                    }
                }, function (err) {
                    if (err) {
                        return done(err);
                    }
                });
            }
        }, function (err) {
            if (err) {
                return done(err);
            }
        });
    }

*/
    function findAllUsers(req, res) {
        adminModel.findAllUsers().then(
            users => {
                if(users == null){
                    res.sendStatus(404);
                }
                else{
                    res.send(users);
                }
            }, error => {
                res.sendStatus(500).json(error);
            }
        );
    }

    function findAllRestaurants(req, res) {
        adminModel.findAllUsers().then(
            restaurents => {
                if(restaurents == null){
                    res.sendStatus(404);
                }
                else{
                    res.send(restaurents);
                }
            }, error => {
                res.sendStatus(500).json(error);
            }
        );
    }

    function deleteUserById(req, res) {
        adminModel.deleteUserById(req.params.userId).then(
            data => {
                res.send({message: "delete user successful"});
            }, error =>{
                res.sendStatus(500).json(error);
            }
        );
    }

    function deleteRestaurantById(req, res) {
        adminModel.deleteRestaurantById(req.params.restaurantId).then(
            data => {
                res.send({message: "delete restaurant successful"});
            }, error =>{
                res.sendStatus(500).json(error);
            }
        );
    }
}