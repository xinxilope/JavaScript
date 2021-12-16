//adicionando elementos da lista
let notas = [10,6,8]

notas.push(7)

console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`a media das notas é ${media}`)

//removendo elementos da lista

notas = [10,6,8,7,1]

notas.pop()

media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`a media das notas é ${media}`)