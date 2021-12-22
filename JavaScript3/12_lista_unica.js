const clientes = [{
nome:"mateus",
cpf:"12345678912",
dependente:
[{
    nome: "jao",
    parentesco: "filho",
    nasc: "15/02/2010"},
 {
    nome: "maria",
    parentesco: "filha",
    nasc: "10/04/2011"}
]},
{
    nome:"maria",
    cpf:"64812439649",
    dependente:
    [{
        nome: "pedro",
        parentesco: "filho",
        nasc: "12/10/2013"}
    ]},
]

const listaDependentes = [...clientes[0].dependente,...clientes[1].dependente]

console.log(listaDependentes)

console.table(listaDependentes)