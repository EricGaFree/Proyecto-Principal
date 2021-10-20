import userSchema from "../models/user.model.js";

class userController {
    // users = [
    //     {
    //         name: "Alberto",
    //         surname: "Matínez",
    //         email: "alberto.martinez@freematica.com"
    //     },
    //     {
    //         name: "Eric",
    //         surname: "Garcia",
    //         email: "eric.garcia@freematica.com"
    //     },
    //     {
    //         name: "Pol",
    //         surname: "Soriano",
    //         email: "pol.soriano@freematica.com"
    //     },
    //     {
    //         name: "Carlos",
    //         surname: "Morales",
    //         email: "carlos.morales@freematica.com"
    //     }
    // ];

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

    createUser(req, res) {
        return req.body;
    }

    deleteUsers() {
        return { msg: "Usuarios eliminados" };
    }

    UpdateUser() {
        return { msg: "User updated." };
    }
}

export default new userController();
