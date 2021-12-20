///////////////////// meu metodo usando while /////////////////////////////

/* const turma1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const turma2 = [6, 5, 8, 9, 5, 6]
const turma3 = [7, 3.5, 8, 9.5]

soma1 = 0
for (let i=0; i < turma1.length; i++) {
    soma1 = soma1 + turma1[i]
}
let media1 = soma1 / turma1.length


soma2 = 0
for (let i=0; i < turma2.length; i++) {
    soma2 = soma2 + turma2[i]
}
let media2 = soma2 / turma2.length


soma3 = 0
for (let i=0; i < turma3.length; i++) {
    soma3 = soma3 + turma3[i]
}
let media3 = soma3 / turma3.length


console.log(`Media turma 1: ${media1}\nMedia turma 2: ${media2}\nMedia turma 3: ${media3}`) */



///////////////////// metodo criando funcao ///////////////////////////////////////
const turma1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const turma2 = [6, 5, 8, 9, 5, 6]
const turma3 = [7, 3.5, 8, 9.5]

function MediaSala(NotaDaSala) { //criando funcao que recebe a array com as notas da turma
    const SomaDasNotas = NotaDaSala.reduce((acum,atual) => //soma todas as notas atraves do acum/atual
    atual + acum,0)
    return SomaDasNotas / NotaDaSala.length //calcula a media da soma das notas / quantidade de notas
}

console.log(`Media da sala 1: ${MediaSala(turma1)}`)
console.log(`Media da sala 2: ${MediaSala(turma2)}`)
console.log(`Media da sala 3: ${MediaSala(turma3)}`)