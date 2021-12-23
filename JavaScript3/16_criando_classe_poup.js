class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}



class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

let mateus = new ClientePoup("mateus","12345678998","mateus@email.com",500,100)

console.log(mateus)