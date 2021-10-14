let users = [
    {
        nombre: "Alberto",
        apellido: "Matínez",
        email: "alberto.martinez@freematica.com"
    },
    {
        nombre: "Eric",
        apellido: "Garcia",
        email: "eric.garcia@freematica.com"
    },
    {
        nombre: "Pol",
        apellido: "Soriano",
        email: "pol.soriano@freematica.com"
    },
    {
        nombre: "Carlos",
        apellido: "Morales",
        email: "carlos.morales@freematica.com"
    }
];
/* GET home page. */

export function getAllUsers() {
    return users;
}

export function getUserByID(id) {
    const data = users[id] ? users[id] : { msg: "Not found" };
    return data;
}

export function createUser(req, res) {
    return req.body;
}

export function deleteUsers() {
    return { msg: "Usuarios eliminados" };
}

export function UpdateUser() {
    return { msg: "User updated." };
}
