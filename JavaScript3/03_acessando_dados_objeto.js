const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678912",
    email:"teste@email.com"
}

const chave = ["nome","idade","cpf","email"] //chave para acessar os dados do objeto
//console.log(cliente[chave[0]])


//exibindo todos os dados
chave.forEach(x => {
    console.log(cliente[x])
});