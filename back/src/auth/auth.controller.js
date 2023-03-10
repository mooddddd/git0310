class AuthController {
    constructor({authService}){
        this.service = authService
    }

    async postLogin(req,res,next){
        try{
            const token = await this.service.postLogin(req.body)
            res.json(token)
        }catch(e){
            next(e)
        }
    }
}

module.exports = AuthController