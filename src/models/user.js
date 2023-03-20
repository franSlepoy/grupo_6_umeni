//1. Guardar al usuario en la DB
//2. Buscar al usuario que se quiere loguear por su email
//3. Buscar a un usuario por su ID
//4. Editar la información de un usuario
//5. Eliminar a un usuario de la DB

const fs = require('fs');
const path = require("path");
const fileName = path.join(__dirname, "../data/users.json");

const User = {
    getData: () => {
        return JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    },

    findAll: () => {
        return JSON.parse(fs.readFileSync(fileName, "utf-8"));
    },

    findByPk: (id) =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: (field, text) =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}
console.log(User.findByField("email", "alicelee@example.com" ))

module.exports = User