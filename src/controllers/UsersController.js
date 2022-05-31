class UsersController {
    create(request, response) {
        const { name, email, password } = request.body
        response.json(`Usuario: ${name}. E-mail: ${email}. Senha: ${password}`)
    }
}

module.exports = UsersController