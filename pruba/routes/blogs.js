var express = require("express");
var router = express.Router();

var blogs = {
    "1": {
        title: "first blog",
        content: "this is my first blog",
        userAssociated: 1
    },
    "2": {
        title: "second blog",
        content: "this is my second blog",
        userAssociated: 2
    },
    "3": {
        title: "third blog",
        content: "this is our third blog",
        userAssociated: 3
    }
};

// Obtiene los datos de todos los blogs
router.get("/", function(req, res, next) {
    res.send(blogs);
});

// Obtiene los datos de un blog
router.get("/:id", function(req, res, next) {
    res.send(blogs[req.params.id]);
});

module.exports = router;
