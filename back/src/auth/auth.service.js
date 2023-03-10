class AuthService {
    constructor({authRepository, jwt}){
        this.repository = authRepository
        this.jwt = jwt
        this.crypto = jwt.crypto
    }

    async postLogin({userid, userpw}) {
        try{
            if(!userid || !userpw) throw"정보없음"

            const hash = this.crypto.createHmac("sha256","test").update(userpw).digest("hex")
            const userData = await this.repository.getUserinfo({userid, userpw:hash})

            if(!userData) throw " 아이디, 패스워드가 일치하지 않음."
            const token = this.jwt.sign(userData)
            return token
        }catch(e){
            throw(e)
        }
    }
}

module.exports = AuthService