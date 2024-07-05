const { profile } = require('../utils/prisma')
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

async function getUserByNameDb (username) {
    return await prisma.user.findUniqueOrThrow({
        where: {
            username: username
        },
        include: {
            profile: true
        }
    })
}

module.exports = {
    createUserDb,
    getUserByNameDb
}