const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const path = require("path");

const User = require ('../models/User');
const db = require("../database/models")
const { response } = require('express');
const { where } = require('sequelize');
const sequelize = db.sequelize;

const controller = {
    lista: function(req,res){
        db.Usuario.findAll()
          .then(function(usuarios){
          res.render(path.resolve(__dirname, "../views/users/lista"), {usuarios:usuarios})
          })
       },
    register: (req, res) => {
        db.Usuario.findAll()
            .then(function(usuarios){
                return res.render(path.join(__dirname, "../views/users/register"),{usuarios:usuarios})
            })
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render (path.join(__dirname, "../views/users/register"), 
            { errors:resultValidation.mapped(),
                oldData: req.body
            });
        }
        else (db.Usuario.create({
            nombre: req.body.fullName,
            email: req.body.email,
            contrasenia: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }))     
    
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
    
    loginProcess: (req,res) =>{
        db.Usuario.findOne({
            where: { email: req.body.email },
          })
          .then(response => {
            let userToLogin = response;
            if (!userToLogin) {
              return res.render(path.join(__dirname, "../views/users/login"), {
                errors: [
                  {
                    msg: "No se encuentra este email en nuestra base de datos.",
                  },
                ],
                oldData: req.body,
              });
            }
            let passwordOk = bcryptjs.compareSync(
              req.body.password,
              userToLogin.contrasenia,
              );
              if (!passwordOk) {
                return res.render(path.join(__dirname, "../views/users/login"), {
                  errors: [
                    {
                      msg: "La información ingresada no es correcta.",
                    },
                  ],
                });
              }
              delete userToLogin.contrasenia;
              req.session.userLogged = userToLogin;
              
              if (req.body.remember_user) {
                res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 2});
              }
              return res.redirect("/user/profile");
            })
    },

    profile: (req, res) => {
		return res.render(path.join(__dirname, "../views/users/profile"), {
			user: req.session.userLogged
		});
	},
    //Editar perfil
    edit: async (req, res) => {
    let findUser = await db.Usuario.findOne({
      where: { email: req.params.email },
    });
    res.render(path.join(__dirname, "../views/users/userEdit"), {
      user: findUser,
    });
  },

  //Update perfil

  //logout del perfil
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = controller;