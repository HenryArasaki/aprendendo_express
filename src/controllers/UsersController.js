const AppError = require("../utils/AppError")

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body

        if(!name){
            throw new AppError("Nome é obrigatório!")
        }

        response.status(201).json(`Usuario: ${name}. E-mail: ${email}. Senha: ${password}`)
    }
}

module.exports = UsersController