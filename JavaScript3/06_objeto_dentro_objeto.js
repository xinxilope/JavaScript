const cliente = {
    nome:"mateus",
    idade:18,
    cpf:"12345678912",
    email:"teste@email.com",
    fones: ["12345678423","875498402925"]
}

cliente.dependente = {
    nome: "jao",
    parentesco: "filho",
    nasc: "15/02/2010"
}

console.log(cliente)

cliente.dependente.nome = "pedro" //alterando o valor do objeto dentro do outro

console.log(cliente)