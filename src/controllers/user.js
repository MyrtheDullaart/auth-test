const { createUserDb, getUserByNameDb } = require('../domains/user')
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

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

const loginUser = async (req, res) => {
    const { username, password } = req.body

    const foundUser = await getUserByNameDb(username)

    if (username === foundUser.username && password === foundUser.password) {
        const token = jwt.sign({username: username}, secret)

        res.json({
            token
        })
    } else {
        res.json({
            message: "Username or password incorrect"
        })
    }
}

const getProfile = async (req, res) => {
    const token = req.headers.authorization

    try {
        const payload = jwt.verify(token, secret)

        const username = payload.username

        const foundUser = await getUserByNameDb(username)

        res.json({
            profile: foundUser.profile
        })
      } catch(err) {
        res.status(401).json({
            message: 'Failure to get profile, not authorised'
        })
      }
}

module.exports = {
    createUser,
    loginUser,
    getProfile
}