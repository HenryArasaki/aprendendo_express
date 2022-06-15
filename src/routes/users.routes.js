const {Router} = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController() 


function myMiddleware(request,response,next){
    console.log("middleware - users")
    next()
}


usersRoutes.post("/", myMiddleware,usersController.create)
usersRoutes.put("/:id", myMiddleware,usersController.update)

module.exports = usersRoutes