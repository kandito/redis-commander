'use strict';

var passport = require('passport');

module.exports = function (app) {
    app.get('/auth/login', function (req, res) {
        res.render('login.ejs', {
            title: 'Login',
            layout: false
        });
    });

    app.post('/auth/login',
        passport.authenticate('local', { failureRedirect: '/auth/login' }),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.get('/auth/logout',
        function(req, res){
            req.logout();
            res.redirect('/');
        });
};