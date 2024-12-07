const storageKey = "posts";
let posts = [];

function fetchData() {
    posts = JSON.parse(localStorage.getItem(storageKey)) || [
        {
            id: 1,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 1",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 2,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 2",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 3,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 3",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 4,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 4",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 5,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 5",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 6,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 6",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 7,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 7",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 8,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 8",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 9,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 9",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 10,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 10",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 11,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 11",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 12,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 12",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 13,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 13",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 14,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 14",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 15,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 15",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 16,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 16",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 17,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 17",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 18,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 18",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 19,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 19",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        },
        {
            id: 20,
            author: "linh",
            postedDate: "30/11/2024",
            title: "Post 1",
            content: "Content of Post 20",
            banner: "src/assets/banner1.jpg",
            likes: 1000
        }
    ];
}

function saveData() {
    localStorage.setItem(storageKey, JSON.stringify(posts));
}

export default {
    init() {
        fetchData();
        saveData();
    },
    getAllPosts() {
        fetchData();
        return posts;
    },

    getSinglePost(id) {
        fetchData();
        return posts.find(post => post.id === id) || "";
    },

    addPost(newPost) {
        posts.push(newPost);
        saveData();
        fetchData();
    },

    updatePost(index, updatedPost) {
        posts.splice(index, 1, updatedPost);
        saveData();
        fetchData();
    },

    deletePost(index) {
        posts.splice(index, 1);
        saveData();
        fetchData();
    },
};