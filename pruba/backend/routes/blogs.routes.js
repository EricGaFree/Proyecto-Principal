import { Router } from "express";
import { getAllBlogs, getBlogByID } from "../controllers/blogs.controller";
var router = Router();

// Obtiene los datos de todos los blogs
router.get("/", function(req, res, next) {
    res.send(blogs);
});

// Obtiene los datos de un blog
router.get("/:id", function(req, res, next) {
    res.send(blogs[req.params.id]);
});

export default router;
