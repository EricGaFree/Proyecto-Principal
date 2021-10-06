var express = require("express");
var router = express.Router();

let users = {
    "1": {
        name: "pol",
        surname: "soriano",
        age: 20,
        username: "pol.soriano",
        blogs: []
    },
    "2": {
        name: "alberto",
        surname: "martinez",
        age: 20,
        username: "alberto.martinez",
        blogs: []
    },
    "3": {
        name: "carlos",
        surname: "morales",
        age: 20,
        username: "carlos.morales",
        blogs: []
    }
};

// Obtiene los datos de todos los usuarios
router.get("/", function(req, res, next) {
    res.send(users);
});

// Obtiene los datos de un solo usuario
router.get("/:id", function(req, res, next) {
    res.send(users[req.params.id]);
});

module.exports = router;
