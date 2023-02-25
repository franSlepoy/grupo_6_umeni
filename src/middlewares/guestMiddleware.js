function guestMiddleware (req, res, next) {
    if (req.session.userLogged){
        return res.redirect("../views/users/profile");
    }
    next();
}

module.exports = guestMiddleware;