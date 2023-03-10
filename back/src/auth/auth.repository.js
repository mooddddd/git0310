class AuthRepository{
    constructor({User}){
        this.User = User
    }

    async getUserinfo({userid, userpw}) {
        try{
            const user = await this.User.findOne({
                raw: true,
                attribute: {
                    exclude: ['userpw']
                },
                where: {
                    userid,
                    userpw,
                }
        })
        return user
    }catch(e){
        throw(e)
    }
    }
}

module.exports = AuthRepository