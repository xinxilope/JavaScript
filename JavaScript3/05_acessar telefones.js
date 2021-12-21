const cliente = {
    nome:"mateus",
    idade:18,
    cpf:"12345678912",
    email:"teste@email.com",
    fones: ["12345678423","875498402925"]
}

//imprime todos os dados do objeto

/* dados = ["nome","idade","cpf","email","fones"]
dados.forEach(element => {
    console.log(cliente[element])
}) */


cliente.fones.forEach(element => {
    console.log(element)
})