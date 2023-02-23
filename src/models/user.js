//1. Guardar un usuario en la DB
//2. Buscar a un usuario que quiere loguearse por su email
//3. Buscar a un usuario por su ID
//4. Editar la información de un usuario
//5. Eliminar a un usuario de la DB

const fs = require ("fs")
const path = require("path")
const usersFilePath = path.join(__dirname, "../data/usuario.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"))

const user = {
    fileName: "../data/usuario.json",
    getData: function() {
        return fs.readFileSync(this.fileName, "utf-8")
    },

    // generateId: function () {
    //     let allUsers = this.findAll()
    //     let lastUser = allUsers.pop()
    //     return lastUser.id + 1
    // },

    findAll: function () {
        return this.getData()
    },

    // findByPk: function(id){
    //     let allUsers = this.findAll()
    //     let userFound = allUsers.find(oneUser => oneUser.id === id)
    //     return userFound
    // },

    // create: function(userData){
    //     let allUsers = this.findAll()
    //     this.allUsers.push(userData)
    //     fs.writeFileSyc(this.fileName, JSON.stringify(allUsers, null, " "))
    //     return true
    // }
}

// console.log(user.create({name: "Ceci", email: "ceci@hotmail.com" }))
console.log(user.getData())