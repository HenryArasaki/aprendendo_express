const {Router} = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController() 


function myMiddleware(request,response,next){
    console.log("middleware")
    if(!request.body.isAdmin){
        return response.json({message: "usuario não autorizado"})
    }
    next()
}


usersRoutes.post("/", myMiddleware,usersController.create)

module.exports = usersRoutes