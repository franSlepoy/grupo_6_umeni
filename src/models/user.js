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

    generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
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
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(fileName, JSON.stringify(allUsers,null, " "));
        return newUser;
    },
    delete: () =>{
        let allUsers = JSON.parse(fs.readFileSync(fileName, "utf-8"));
        let finalUsers = allUsers.filter(oneUser.id !== id);
        fs.writeFileSync(fileName, JSON.stringify(finalUsers,null, " "));
        return true;
    }
}
//console.log(User.create({ fullName : "Ceci", email : "ceci@gns.com"}));

module.exports = User