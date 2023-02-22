const path = require("path");
const usersControllers = {
    login: (req,res) => res.render(path.resolve(__dirname, "../views/users/login")),
    register: (req,res) => res.render(path.resolve(__dirname, "../views/users/register")),
    processRegister: (req,res) => res.send({
        body: req.body,
        file: req.file})
}
module.exports = usersControllers;