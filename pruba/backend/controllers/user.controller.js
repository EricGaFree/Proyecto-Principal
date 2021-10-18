let users = [
    {
        name: "Alberto",
        surname: "Matínez",
        email: "alberto.martinez@freematica.com"
    },
    {
        name: "Eric",
        surname: "Garcia",
        email: "eric.garcia@freematica.com"
    },
    {
        name: "Pol",
        surname: "Soriano",
        email: "pol.soriano@freematica.com"
    },
    {
        name: "Carlos",
        surname: "Morales",
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
