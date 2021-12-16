//declarando arrow function
const apresentacao_arrow = nome => `meu nome é ${nome}`;

const soma = (num1,num2) => num1 + num2;

//chamando a funcao
console.log(apresentacao_arrow("mateus"))
console.log(soma(1,2))


//exemplo arrow function soma numeros maiores que 10 com if/else
const SomaNumerosGrandes = (num1,num2) => {
    if (num1 > 10 && num2 > 10){
        return num1 + num2
    } else{
        return "os 2 numeros precisam ser maiores que 10"
    }
}

console.log(SomaNumerosGrandes(10,13))