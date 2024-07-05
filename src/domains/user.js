const prisma = require('../utils/prisma')


const createUserDb = async (username, password, name, bio) => await prisma.user.create({
    data: {
        username,
        password,
        profile: {
            create: {
                name,
                bio
            }
        }
    }, include: {
        profile: true
    }
})

module.exports = {
    createUserDb
}