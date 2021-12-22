const cliente = {
    nome:"mateus",
    idade:18,
    cpf:"12345678912",
    email:"teste@email.com",
    fones: ["12345678423","875498402925"],
    dependente:
    [{
        nome: "jao",
        parentesco: "filho",
        nasc: "15/02/2010"},
     {
        nome: "maria",
        parentesco: "filha",
        nasc: "10/04/2011"
    }],
    saldo: 100,
    depositar: function(num) {
        this.saldo += num
    }
}

function OferecerSeguro(obj) {
    const PropClientes = Object.keys(obj)
    if (PropClientes.includes("dependente")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

OferecerSeguro(cliente)