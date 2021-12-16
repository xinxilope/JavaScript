//delcaracao da funcao com 2 parametros
function multiplicação(num1,num2){
    return num1 * num2
}

//passando os parametros da funcao pelas variaveis(num1,num2)
const num1 = 10;
const num2 = 2;

console.log(multiplicação(num1,num2))

//passando os parametros da funcao diretamente na funcao
console.log(multiplicação(4,4))








//funcao com template string
function texto_inicial(nome,idade) {
    return `Meu nome é ${nome} e minha idade é: ${idade}`
}

console.log(texto_inicial("mateus",18))











//declarando funcao de soma e funcao de divisao
function soma(num1,num2) {
    return num1 + num2
}

function divisao(num1,num2) {
    return num1 / num2
}

//usando a funcao de soma dentro da de divisao
console.log(`A divisao entre ${soma(2,4)} e ${soma(2,0)} é ${divisao(soma(2,4),soma(2,0))}`)