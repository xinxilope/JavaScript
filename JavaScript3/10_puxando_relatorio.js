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

let relatorio = ""

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `${info}: ${cliente[info]}\n`
    }
}

console.log(relatorio)