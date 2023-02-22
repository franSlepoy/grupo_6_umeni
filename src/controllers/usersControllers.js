const path = require("path");
const { validationResult } = require("express-validator")
const usersControllers = {
    login: (req,res) => res.render(path.resolve(__dirname, "../views/users/login")),
    register: (req,res) => res.render(path.resolve(__dirname, "../views/users/register")),
    processRegister: (req,res) => {
        const resultValidation = validationResult(req)
        res.send({
            body: req.body,
            file: req.file
        })
        //  if (resultValidation.errors.length > 0){
        //  return res.render('register', {
        //      errors: resultValidation.mapped(),
        //  })
    // }
}}
module.exports = usersControllers;