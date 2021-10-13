import { Router } from "express";
import { getAllUsers, createUser, deleteusers } from "../controllers/user.controller.js";
var router = Router();

router.get("/", function(req, res, next) {
    const data = getAllUsers();
    res.status(200).send(data);
});

router.post("/", function(req, res, next) {
    const data = createUser(req);
    res.status(201).send(data);
});

router.delete("/", function(req, res, next) {
    const data = deleteusers();
    res.status(204);
});

export default router;