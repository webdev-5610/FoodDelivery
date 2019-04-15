var _ = require('lodash');

module.exports = function (app) {
    //var randomstring = require("randomstring");
    var passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;

    var userModel = require("../model/user/user.model.server");
    const bcrypt = require('bcrypt-nodejs');

    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    app.post("/api/login", passport.authenticate('local'), login);
    app.post("/api/logout", logout);
    app.post("/api/register", register);
    app.post("/api/loggedin", loggedin);


    function serializeUser(user, done) {
        done(null, user._id);
    }

    function deserializeUser(uid, done) {
        userModel.findUserById(uid).then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            });
    }

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    passport.use(new LocalStrategy(localStrategy));

    // Authentication

    function localStrategy(username, password, done) {
        userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if (user &&
                        user.username === username &&
                        bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function login(req, res) {
        const user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        // res.send(200);
        res.send({});
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        const user = req.body;
        console.log(req.body);
        user.password = bcrypt.hashSync(user.password);
        userModel
            .createUser(user)
            .then(
                function (newUser) {
                    if (newUser) {
                        req.login(newUser, function (error) {
                            if (error) {
                                res.status(400).send(error);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }

    function createUser(req, res) {
        var user = _.pick(req.body, ['username', 'password', 'firstName', 'lastName', 'email', 'phone']);
        userModel.createUser(user).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.status(400).send("Something went wrong");
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

    function findUser(req, res) {
        if (req.query["password"]) {
            findUserByCredentials(req, res);
        } else {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        userModel.findUserByUsername(username).then(
            function (user) {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(200).send({});
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

    function findUserByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        userModel.findUserByCredentials(username, password).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.status(400).send("Cannot find user with the username and password");
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        userModel.findUserById(userId).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.status(400).send("Cannot find user with the userID");
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

    function updateUser(req, res) {
        var userId = req.params["userId"];
        var updatedUser = req.body;
        userModel.updateUser(userId, updatedUser).then(
            function (user) {
                if (user) {
                    res.json(user);
                } else {
                    res.status(400).send("Cannot find user")
                }
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

    function deleteUser(req, res) {
        var userId = req.params["userId"];
        userModel.deleteUser(userId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

}
