Cypress.Commands.add('login', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'login',
        body:
        {
        "email": email,
        "password": senha
        }
    })
})

Cypress.Commands.add('identidade', (metodo, endpoint) => {
    cy.request({
        method: metodo,
        url: endpoint
    }).then((response) => {
        return response.body.usuarios[response.body.usuarios.length - 1]._id;
    })
})

Cypress.Commands.add('usuarioTemporario', (nome, email, senha) =>{
    cy.request({
        method: 'POST',
        url: 'usuarios',
        body:
        {
  "nome": nome,
  "email": email,
  "password": senha,
  "administrador": "true"
}
    }).then((response) => {
        return response.body._id;
    })
})

Cypress.Commands.add('token', (email, senha) => {
    cy.request({
        method: 'POST',
        url: 'login',
        body:
        {
            "email": email,
            "password": senha}
    }).then((response) => {
        return response.body.authorization;
    })
})

Cypress.Commands.add('cadastrarProduto', (token, nome, preco, descricao, quantidade) => {
    cy.request({
        method: 'POST',
        url: 'produtos',
        headers: {authorization: token},
        body:
        {
            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade},
            failOnStatusCode: false
    })
})