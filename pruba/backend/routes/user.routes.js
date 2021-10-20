import { Router } from "express";
import userController from "../controllers/user.controller.js";

var router = Router();

router.get("/", async function(req, res, next) {
    const data = await userController.getAllUsers();
    res.status(200).send(data);
});

router.get("/:id", function(req, res, next) {
    const data = userController.getUserByID(req.params.id);
    res.status(200).send(data);
});

router.post("/", function(req, res, next) {
    const data = userController.createUser(req);
    res.status(201).send(data);
});

router.put("/", function(req, res, next) {
    const data = userController.UpdateUser(req);
    res.status(200).send(data);
});

router.delete("/", function(req, res, next) {
    const data = userController.deleteUsers();
    res.status(200).send(data);
});

export default router;
