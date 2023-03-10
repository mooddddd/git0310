class UserRepository {
    constructor({User}){
        this.User = User
    }

    async signupUser(payload){
        try{
            const user = await this.User.create(payload, {raw:true})
            return user
        }catch(e){
            throw new Error(e)
        }
    }
}

module.exports = UserRepository