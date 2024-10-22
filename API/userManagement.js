
const UserManager = (function() {

    let users = []

    let nextID = users.length

    return {
        registerUser: (user) => {
            nextID = nextID + 1
            user.id = nextID
            users.push(user)

            console.log(users)
            return user
        }
    }
})();

module.exports=UserManager