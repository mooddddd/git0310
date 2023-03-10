class UserController {
    constructor({userService}){
        this.service = userService
    }

    async postSignup(req,res,next){
        try{
            const sign = await this.service.signup(req.body)
            res.status(201).json(sign)
        }catch(e){
            next(e)
        }

    }
}

module.exports = UserController