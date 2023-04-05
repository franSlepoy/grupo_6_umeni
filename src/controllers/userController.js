const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const path = require("path");

const User = require ('../models/User');

const controller = {
    register: (req, res) => {
        return res.render(path.join(__dirname, "../views/users/register"))
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render (path.join(__dirname, "../views/users/register"), 
            { errors:resultValidation.mapped(),
                oldData: req.body
            });
        }
        
     //return res.send ("Ok, las validaciones se pasaron y no tienes errores");
     
    
    let userInDB = User.findByField("email", req.body.email);

    if(userInDB) {
        return res.render(path.join(__dirname, "../views/users/register"), {
          errors: {
               email:{
                 msg: "Este email ya está registrado."
             }
         },
         oldData: req.body
        });
    }

    
    let userToCreate = {
    ...req.body,
    password: bcryptjs.hashSync(req.body.password,10),
    avatar: req.file.filename
    }

    let userCreated = User.create(userToCreate);

    return res.redirect("/user/login");
    },

    login:(req,res) => {
        return res.render(path.join(__dirname, "../views/users/login"));
    },
    
    loginProcess: (req,res) => {
     let userToLogin = User.findByField("email", req.body.email);
     
     if(userToLogin) {
         let isPasswordOk = bcryptjs.compareSync (req.body.password, userToLogin.password);
         if (isPasswordOk) {
            delete userToLogin.password;
             req.session.userLogged = userToLogin;

             if(req.body.remember_user){
                res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2})
             }

             return res.redirect("/user/profile");
            }
    return res.render(path.join(__dirname, "../views/users/login"), {
        errors: {
            email: {
                msg: "Las credenciales son inválidas"
            }
        }
    });
    }
    return res.render(path.join(__dirname, "../views/users/login"), {
        errors: {
            email: {
                msg: "No se encuentra este email en nuestra base de datos"
            }
        }
    });
    },

    profile: (req, res) => {
		return res.render(path.join(__dirname, "../views/users/profile"), {
			user: req.session.userLogged
		});
	},

    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = controller;