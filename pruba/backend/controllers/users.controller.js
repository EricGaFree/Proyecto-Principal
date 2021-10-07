export let users = {
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

export function getAllUsers() {
    return users;
}

export function getUserByID(id) {
    return users[id];
}