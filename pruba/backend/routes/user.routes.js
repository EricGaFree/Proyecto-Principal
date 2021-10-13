import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
var router = Router();

router.post("/", function(req, res, next) {
    const data = createUser(req);
    res.status(201).send(data);
});

export default router;
