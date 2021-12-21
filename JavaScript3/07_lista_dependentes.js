const cliente = {
    nome:"mateus",
    idade:18,
    cpf:"12345678912",
    email:"teste@email.com",
    fones: ["12345678423","875498402925"],
    dependente: [{
        nome: "jao",
        parentesco: "filho",
        nasc: "15/02/2010"
    }]
}

cliente.dependente.push({
    nome: "maria",
    parentesco: "filha",
    nasc: "10/04/2011"
})



const MaisNovo = cliente.dependente.filter(x => x.nasc === "10/04/2011") //compara qual data de nascimento dentro do cliente.dependente é igual a 2011

console.log(MaisNovo[0].nome) //devolve o .nome do objeto selecionado