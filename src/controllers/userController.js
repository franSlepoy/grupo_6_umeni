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
        else {
            db.Usuario.create({
            nombre: req.body.fullName,
            apellido: req.body.apellido,
            email: req.body.email,
            contrasenia: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        })
       .then((user)=>{
          //return res.json(user)
          return res.redirect("/user/login");
       }).catch(error => res.json(error))}
        
    
    /* let userInDB = User.findByField("email", req.body.email);

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
 */
    
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
  update: async (req, res) => {
    let emailUser = req.params.email;
    let userToEdit = await db.Usuario.findOne({
      where: { email: emailUser},
    });
    let avatar;
    if (req.file != undefined) {
      avatar = req.file.filename;
    } else {
      avatar = userToEdit.avatar;
    }

    let passwordOk = bcryptjs.compareSync(
      req.body.passwordOld,
      userToEdit.contrasenia,
    );

    if (
      req.body.check == undefined &&
      req.body.fullName == userToEdit.fullName &&
      req.body.email == userToEdit.email &&
      req.file == undefined
    ) {
      return res.render(path.join(__dirname, "../views/users/profile"), {
        mensajeExitoso: [
          {
            msg: "¡Su perfil no tuvo modificaciones!",
          },
        ],
      });
    }
    if (req.body.check == "1") {
      if (!passwordOk) {
        return res.render(path.join(__dirname, "../views/users/userEdit"), {
          mensajesDeError: [
            {
              msg: "Su contraseña actual no coincide",
            },
          ],
          user: userToEdit,
        });
      } else if (req.body.password !== req.body.password2) {
        return res.render(path.join(__dirname, "../views/users/userEdit"), {
          mensajesDeError: [
            {
              msg: "Las contraseñas no coinciden",
            },
          ],
          user: userToEdit,
        });
      } else {
        delete req.body.passwordOld;
        delete req.body.check;
        delete req.body.password2;
        await db.Usuario.update(
          {
            nombre: req.body.fullName,
            email: req.body.email,
            contrasenia: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
          },
          {
            where: { email: req.params.email },
          },
        );

      }
    } else {
      delete req.body.passwordOld;
      delete req.body.check;
      delete req.body.password2;
      await db.Usuario.update(
        {
          nombre: req.body.fullName,
          email: req.body.email,
          avatar: avatar,
          contrasenia: bcryptjs.hashSync(req.body.password, 10),
        },
        {
          where: { email: req.params.email },
        },
      );
    }

    let usuarioEditado = await db.Usuario.findOne({
      where: { email: emailUser },
    });     
    return res.render(path.join(__dirname, "../views/users/profile"), {
 
      mensajeExitoso: [
        {
          msg: "¡Perfil modificado con éxito!",
        },
      ],
      
      user: usuarioEditado,
    });
  },

  //Eliminar usuario
  borrar: async (req, res) => {
    let emailUser = req.params.email;
    await db.Usuario.destroy({
      where: {
        email: emailUser,
      },
    });
    req.session.destroy();
    return res.redirect("/");
  },

  //logout del perfil
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }
}

module.exports = controller;