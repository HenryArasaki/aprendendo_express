const {Router} = require("express")

const TagsController = require("../controllers/TagsController")

const tagsRoutes = Router()

const tagsController = new TagsController() 


function myMiddleware(request,response,next){
    console.log("middleware - tags")
    next()
}


tagsRoutes.get("/:user_id", myMiddleware,tagsController.index)




module.exports = tagsRoutes