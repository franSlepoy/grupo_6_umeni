const db = require("../database/models");

userLoggedMiddleware = async (req, res, next) => {
    res.locals.isLogged = false;
    let userFromCookie;
  
    if (req.session && req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;

      if (req.cookies.email) {
        userFromCookie = await db.Usuarios.findOne({
          where: { email: req.cookies.email },
        });
  
      }
  
      if (userFromCookie) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged = userFromCookie;
      }
    }
  
    next();
  };

// function userLoggedMiddleware(req, res, next){
//     res.locals.isLogged = false;

//     let emailInCookie = req.cookies.userEmail;
//     let userFromCookie = User.findByField("email", emailInCookie);

//     if (userFromCookie) {
//         req.session.userLogged = userFromCookie;
//     }

//     if (req.session.userLogged) {
//         res.locals.isLogged = true;
//         res.locals.userLogged = req.session.userLogged;
//     }
    
//     next();
// }

module.exports = userLoggedMiddleware;