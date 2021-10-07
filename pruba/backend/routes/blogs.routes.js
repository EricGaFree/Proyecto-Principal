import { Router } from "express";
import { getAllBlogs, getBlogByID } from "../controllers/blogs.controller.js";
var router = Router();

// Obtiene los datos de todos los blogs
router.get("/", function(req, res, next) {
    const data = getAllBlogs();
    res.status(200).send(data);
});

// Obtiene los datos de un blog
router.get("/:id", function(req, res, next) {
    const data = getBlogByID(req.params.id);
    res.send(data);
});

export default router;
