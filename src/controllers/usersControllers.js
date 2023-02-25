const path = require("path");
const { validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

const usuario = require ("../data/usuario.json");

let passEncriptada = bcrypt.hashSync("monito123", 10)
let check = bcrypt.compareSync("monito123", passEncriptada)
console.log(check)

const usersControllers = {
    login: (req,res) => res.render(path.resolve(__dirname, "../views/users/login")),
    register: (req,res) => res.render(path.resolve(__dirname, "../views/users/register")),
    processRegister: (req,res) => {
        const resultValidation = validationResult(req)
        //res.send({
        //    body: req.body,
        //    file: req.file
        //})
          if (resultValidation.errors.length > 0){
          return res.render(path.resolve(__dirname, "../views/users/register"), {
              errors: resultValidation.mapped(),
              oldData: req.body
          })
     }
     return res.send("Las validaciones se pasaron correctamente")
},

loginProcess: (req,res) => {
    let userToLogin = usuario.findByField("email", req.body.email);

    if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña);
        if (isOkThePassword) {
            delete userToLogin.contraseña;
            req.session.userLogged = userToLogin;

            if(req.body.remember_usuario){
                res.cookie("usuarioEmail", req.body.email,{maxAge: (1000 * 60) * 60})
            }

            return res.redirect("../views/users/profile")
        }
        return res.render ("../views/users/login",{
            errors: {
                email: {
                    msg: "Las credenciales son inválidas"
                }
            }
        });
    }
    return res.render ("../views/users/login", {
        errors: {
            email: {
                msg: "No se encuentra este mail en nuestra base de datos"
            }
        }
    });
},
profile: (req, res) => {
    return res.render('../views/users/profile', {
        usuario: req.session.userLogged
    });
},

logout: (req, res) => {
    res.clearCookie('usuarioEmail');
    req.session.destroy();
    return res.redirect('/');
}
}

module.exports = usersControllers;