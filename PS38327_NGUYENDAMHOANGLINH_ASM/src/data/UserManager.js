const storageKey = "users";
let users = [];

function fetchData() {
    users = JSON.parse(localStorage.getItem(storageKey)) || [
        {
            id: 1,
            password: "1234",
            fullname: "testAcc1",
            email: "textacc1@gmail.com",
            phone: "0123456789",
            gender: false,
            avatar: 'src/assets/ronaldo.jpg'
        },
        {
            id: 2,
            password: "1234",
            fullname: "testAcc2",
            email: "textacc2@gmail.com",
            phone: "0987654321",
            gender: true,
            avatar: 'src/assets/messi.jpg'
        },
        {
            id: 3,
            password: "1234",
            fullname: "testAcc3",
            email: "textacc3@gmail.com",
            phone: "0123459876",
            gender: false,
            avatar: 'src/assets/keanu.jpg'
        },
        {
            id: 4,
            password: "1234",
            fullname: "testAcc4",
            email: "textacc4@gmail.com",
            phone: "0432156789",
            gender: true,
            avatar: 'src/assets/kobe.jpg'
        },
        {
            id: 5,
            password: "1234",
            fullname: "testAcc5",
            email: "textacc5@gmail.com",
            phone: "0213465789",
            gender: false,
            avatar: 'src/assets/trump.jpg'
        }
    ];
}

function saveData() {
    localStorage.setItem(storageKey, JSON.stringify(users));
}

export default {
    init() {
        fetchData();
        saveData();
    },
    getAllUsers() {
        fetchData();
        return users;
    },

    getSingleUser(id) {
        fetchData();
        return users.find(user => user.id == id) || "";
    },

    getUserByEmail(email) {
        fetchData();
        return users.find(user => user.email === email) || "";
    },

    getUserByPhone(phone) {
        fetchData();
        return users.find(user => user.phone === phone) || "";
    },

    addUser(newUser) {
        users.push(newUser);
        saveData();
        fetchData();
    },

    updateUser(index, updatedUser) {
        users.splice(index, 1, updatedUser);
        saveData();
        fetchData();
    },

    deleteUser(index) {
        users.splice(index, 1);
        saveData();
        fetchData();
    },
};