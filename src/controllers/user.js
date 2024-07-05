const { createUserDb } = require('../domains/user')

const createUser = async (req, res) => {
    const {
      username,
      password,
      name,
      bio
    } = req.body

  
    const createdUser = await createUserDb(username, password, name, bio)

    res.status(201).json({ user: createdUser })
}

module.exports = {
    createUser,
}