'use strict';

var passport = require('passport');

module.exports = function (app) {
    app.get('/auth/login', function (req, res) {
        if (req.isAuthenticated()) {
            return res.redirect('/');
        }
        return res.render('login.ejs', {
            title: 'Login',
            layout: false
        });
    });

    app.post('/auth/login',
        passport.authenticate('local', {
            failureRedirect: '/auth/login',
            failureFlash : true
        }),
        function(req, res) {
            return res.redirect('/');
        }
    );

    app.get('/auth/logout',
        function(req, res){
            req.logout();
            return res.redirect('/');
        });
};