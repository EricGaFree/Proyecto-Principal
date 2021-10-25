<<<<<<< HEAD
let users = {
    "1": {
        nombre: "Alberto",
        apellido: "Matínez",
        email: "alberto.martinez@freematica.com"
    },
    "2": {
        nombre: "Eric",
        apellido: "Garcia",
        email: "eric.garcia@freematica.com"
    },
    "3": {
        nombre: "Pol",
        apellido: "Soriano",
        email: "pol.soriano@freematica.com"
    },
    "4": {
        nombre: "Carlos",
        apellido: "Morales",
        email: "carlos.morales@freematica.com"
    }
};
/* GET home page. */

export function getAllUsers() {
    return users;
}

export function getUserByID(id) {
    const data = users[id] ? users[id] : {msg: "Not found"};
    return data;
}

export function createUser(req, res) {
    return req.body;
}

export function deleteUsers() {
    return { msg: "Usuarios eliminados" };
}

export function UpdateUser() {
    return { msg: "User updated." };
}
=======
import userSchema from "../models/user.model.js";

class userController {
    async getAllUsers() {
        try {
            const data = await userSchema.find();
            return data;
        } catch (err) {
            return err;
        }
    }

    getUserByID(id) {
        const data = users[id] ? users[id] : { msg: "Not found" };
        return data;
    }

    async createUser(req, res) {
        const User = new userSchema({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        });
        try {
            const newUser = await User.save();
            return newUser;
        } catch (err) {
            return err;
        }
    }

    deleteUsers() {
        return { msg: "Usuarios eliminados" };
    }

    UpdateUser() {
        return { msg: "User updated." };
    }
}

export default new userController();
>>>>>>> d6663de7af3c690d537b0575f68a1f2c8550ecf7
