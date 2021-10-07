import { Router } from "express";
import { getAllUsers, getUserByID } from '../controllers/users.controller.js';
var router = Router();

// Obtiene los datos de todos los usuarios
router.get("/", function(req, res, next) {
    const data = getAllUsers();
    res.status(200).send([data])
});

// Obtiene los datos de un solo usuario
router.get("/:id", function(req, res, next) {
    const data = getUserByID(req.params.id)
    res.status(200).send([data]);
});

export default router;
