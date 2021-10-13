import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";
var router = Router();

router.get("/", function(req, res, next) {
    const data = getAllUsers();
    res.status(200).send(data);
});

router.post("/", function(req, res, next) {
    const data = createUser(req);
    res.status(201).send(data);
});

router.put("/", function(req, res, next) {
    const data = updateUser(req);
    res.status(200).send(data);
});

export default router;