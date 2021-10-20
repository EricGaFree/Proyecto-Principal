import { Router } from "express";
import userController from "../controllers/user.controller.js"
var router = Router();

router.get("/",  function(req, res, next) {
    const data = userController.getAllUsers();
    setTimeout(() => {
        res.status(200).json(data);        
    }, 1000);
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
