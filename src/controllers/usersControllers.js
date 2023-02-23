const path = require("path");
const { validationResult } = require("express-validator")

const bcrypt = require("bcryptjs")

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
}}
module.exports = usersControllers;