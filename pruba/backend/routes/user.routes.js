import { Router } from "express";
<<<<<<< HEAD
import {
    UpdateUser,
    getUserByID,
    getAllUsers,
    createUser,
    deleteUsers
} from "../controllers/user.controller.js";
var router = Router();

router.get("/", function(req, res, next) {
    const data = getAllUsers();
=======
import userController from "../controllers/user.controller.js";

var router = Router();

router.get("/", async function(req, res, next) {
    const data = await userController.getAllUsers();
>>>>>>> d6663de7af3c690d537b0575f68a1f2c8550ecf7
    res.status(200).send(data);
});

router.get("/:id", function(req, res, next) {
<<<<<<< HEAD
    const data = getUserByID(req.params.id);
    res.status(200).send(data);
});

router.post("/", function(req, res, next) {
    const data = createUser(req);
=======
    const data = userController.getUserByID(req.params.id);
    res.status(200).send(data);
});

router.post("/", async function(req, res, next) {
    const data = await userController.createUser(req);
>>>>>>> d6663de7af3c690d537b0575f68a1f2c8550ecf7
    res.status(201).send(data);
});

router.put("/", function(req, res, next) {
<<<<<<< HEAD
    const data = UpdateUser(req);
=======
    const data = userController.UpdateUser(req);
>>>>>>> d6663de7af3c690d537b0575f68a1f2c8550ecf7
    res.status(200).send(data);
});

router.delete("/", function(req, res, next) {
<<<<<<< HEAD
    const data = deleteUsers();
=======
    const data = userController.deleteUsers();
>>>>>>> d6663de7af3c690d537b0575f68a1f2c8550ecf7
    res.status(200).send(data);
});

export default router;
