class UsersController {
    create(request, response) {
        const { name, email, password } = request.body
        response.status(201).json(`Usuario: ${name}. E-mail: ${email}. Senha: ${password}`)
    }
}

module.exports = UsersController