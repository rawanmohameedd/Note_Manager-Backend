const user = require('../models/users')

const getUser = async (id) => {
    try {
        console.log(id,'services')
        const userData = await user.getUserById(id)
        if (userData)
            return userData
        else
            return 'There is no user with this id'
    } catch (error) {
        console.error('Error in route:', error);
        return res.status(500).send({ error: "Can't get to this user" });    }
}

module.exports = {
    getUser,
}