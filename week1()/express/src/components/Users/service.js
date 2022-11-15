const users = require('./Users')

function findAll() {
    return users;
}

function create(user) {
    users.push(user)
    return users;
}

function findUser(user) {
    return user.find(({id}) => +user.id === id)
}

function updateUsers(userId, user) {
    return {
        ...user[userId],
        ...user
    }
}

function deleteUsers(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            arr.splice(i, 1);
            break;
        }
    }
}

module.exports = {
    findAll,
    create,
    updateUsers,
    deleteUsers,
    findUser
}

