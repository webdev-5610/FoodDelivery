var _ = require('lodash');

module.exports = function (app) {

    var passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    var userModel = require("../model/user/user.model.server");
    const bcrypt = require('bcrypt-nodejs');

    app.post("/api/user", createEmployee);
    app.get("/api/user", findEmployee);
    app.get("/api/user/:userId", findEmployeeById);
    app.put("/api/user/:userId", updateEmployee);
    app.delete("/api/user/:userId", deleteEmployee);
    app.post("/api/login", passport.authenticate('local'), login);
    app.post("/api/logout", logout);
    app.post("/api/register", register);
    app.post("/api/loggedin", loggedin);

    function serializeEmployee(user, done) {
        done(null, user._id);
    }

    function deserializeEmployee(uid, done) {
        userModel.findEmployeeById(uid).then(
            function (user) {
                done(null, user);
            },
            function (err) {
                done(err, null);
            });
    }

    passport.serializeUser(serializeEmployee);
    passport.deserializeUser(deserializeEmployee);

    passport.use(new LocalStrategy(localStrategy));

    // Authentication

    function localStrategy(username, password, done) {
        userModel
            .findEmployeeByUsername(username)
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
            .createEmployee(user)
            .then(
                function (newEmployee) {
                    if (newEmployee) {
                        req.login(newEmployee, function (error) {
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



    function createEmployee(req, res) {
        var user = _.pick(req.body, ['username', 'password', 'firstName', 'lastName', 'email', 'phone']);
        userModel.createEmployee(user).then(
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

    function findEmployee(req, res) {
        if (req.query["password"]) {
            findEmployeeByCredentials(req, res);
        } else {
            findEmployeeByUsername(req, res);
        }
    }

    function findEmployeeByUsername(req, res) {
        var username = req.query["username"];
        userModel.findEmployeeByUsername(username).then(
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

    function findEmployeeByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        userModel.findEmployeeByCredentials(username, password).then(
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

    function findEmployeeById(req, res) {
        var userId = req.params["userId"];
        userModel.findEmployeeById(userId).then(
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

    function updateEmployee(req, res) {
        var userId = req.params["userId"];
        var updatedEmployee = req.body;
        userModel.updateEmployee(userId, updatedEmployee).then(
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

    function deleteEmployee(req, res) {
        var userId = req.params["userId"];
        userModel.deleteEmployee(userId).then(
            function (stats) {
                res.json(stats);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    };

}
