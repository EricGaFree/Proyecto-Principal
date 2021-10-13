export let blogs = {
    1: {
        id: 1,
        title: "first blog",
        content: "this is my first blog",
        userAssociated: 1
    },
    2: {
        id: 2,
        title: "second blog",
        content: "this is my second blog",
        userAssociated: 2
    },
    3: {
        id: 3,
        title: "third blog",
        content: "this is our third blog",
        userAssociated: 1
    }
};

export function getAllBlogs() {
    return blogs;
}

export function getBlogByID(id) {
    return blogs[id];
}
