const {Router} = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

const notesController = new NotesController() 


function myMiddleware(request,response,next){
    console.log("middleware - notes")
    next()
}


notesRoutes.post("/:user_id", myMiddleware,notesController.create)
notesRoutes.get("/:id", myMiddleware,notesController.show)



module.exports = notesRoutes