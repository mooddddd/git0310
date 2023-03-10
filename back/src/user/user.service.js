class UserService {
    constructor({userRepository,jwt}){
        this.repository = userRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async signup({userid, userpw}){
        try{
            if(!userid || !userpw) throw "정보없음"

            const hash = this.crypto.createHmac("sha256", "test").update(userpw).digest("hex")
            const userData = await this.repository.signupUser({userid, userpw:hash})
            return userData
        }catch(e){
            throw e
        }

    }
}

module.exports = UserService