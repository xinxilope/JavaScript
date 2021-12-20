/* const nomes = ["Ana","Marcos","Maria","Mauro"]

let medias = [7, 4.5, 8, 7.5]

let situacao = medias.map( (verificar,indice) => medias[indice] >= 7 ? "Aprovado" : "Reprovado")

console.log(situacao) */

///////////////////////////////////////////////////

const nomes = ["Ana","Marcos","Maria","Mauro"]
let notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter( (aluno,indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)