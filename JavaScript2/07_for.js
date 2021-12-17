
//estrutura padrao do for

let numeros = [10,20,30,40,50]

for (let i = 0; i < numeros.length; i++) {
    console.log(i,numeros[i])
}

//fazendo media de notas com for

let notas = [7, 8, 6.5, 7.5]
let soma_notas = 0

for(let i = 0; i<notas.length; i++) {
    soma_notas += notas[i];
}

let media = soma_notas/notas.length

console.log(`a media das notas é ${media}`)