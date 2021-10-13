import { Router } from "express";
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
    res.status(200).send(data);
});

router.get("/:id", function(req, res, next) {
    const data = getUserByID(req.params.id);
    res.status(200).send(data);
});

router.post("/", function(req, res, next) {
    const data = createUser(req);
    res.status(201).send(data);
});

router.put("/", function(req, res, next) {
    const data = UpdateUser(req);
    res.status(200).send(data);
});

router.delete("/", function(req, res, next) {
    const data = deleteUsers();
    res.status(200).send(data);
});

export default router;
