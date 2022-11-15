const UserService = require('./service');

async function findAll(req, res) {
    try {
        const user = UserService.findAll();

        return res.status(200).json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUser(req, res) {
    try {
        const user = await UserService.findUser(req.params.id);

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message,
            details: null,
        });
    }
}

async function create(req, res) {
    try {
        const user = UserService.create(req.body);

        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function updateUsers(req, res) {
    try {
        const user = await UserService.updateUsers(req.param.id, req.body);

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UserService.deleteUsers(req.param.id);

        return res.status(200).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAll,
    create,
    updateUsers,
    deleteUser,
    findUser
};