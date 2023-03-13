const {validationResult} = require('express-validator');

const User = require ('../models/User');

const controller = {
    register: (req, res) => {
        return res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render ('register', {
                errors:resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        return res.send ('Ok, las validaciones se pasaron y no tienes errores');
    },
    
    let userInDB = User.findByField('email', req.body.email);
    if(userInDB) {
        return res.render('userRegisterForm', {
          errors: {
               email:{
                 msg: 'Este email ya está registrado.'
             }
         },
         oldData: req.body
        });
    },

    
    let userToCreate = {
    ...req.body,
    password: bcryptjs.hashSync(req,body,password,10),
    avatar: req.file.filename
    },

    let userCreated = User.create(userToCreate);

    return res.redirect('/user/login');

    login:(req,res) => {
    return res.render('userLoginForm');
    },

    loginProcess: (req,res) => {
     let userToLogin = User.findByField('email', req.body.email);

     if(userToLogin) {
        let isPasswordOk = bcryptjs.compareSync (req.body.password, userToLogin.password);
        if (isPasswordOk) {
            return.res.redirect('/user/profile');
        }
    return res.render('login', {
        errors: {
            email: {
                msg: 'Las credenciales son inválidas'
            }
        }
    });
    }
    }
}

module.exports = controller;