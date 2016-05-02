/**
 * Ensure if user is logged in.
 * Redirect to login form if user not logged in
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports.ensureLoggedIn = function (req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
        return res.redirect('/auth/login');
    }
    next();
};