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
