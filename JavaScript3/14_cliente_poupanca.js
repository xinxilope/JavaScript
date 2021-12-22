function Cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}


function ClientePoupanca(nome,cpf,email,saldo,SaldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.SaldoPoup = SaldoPoup
}

const maria = new ClientePoupanca("maria","123456789","maria@email.com",100,300)

console.log(maria)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.SaldoPoup += valor
}

maria.depositarPoup(50)

console.log(maria.SaldoPoup)