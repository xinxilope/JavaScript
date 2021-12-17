//criando nova lista com map()
const notas = [10, 9, 8, 7, 6]

let notas_att = notas.map( nota => nota == 10 ? nota : ++nota )

console.log(notas_att)

//alterando strings com maps()
let nomes = ["ana Julia", "Caio vinicius", "BIA silva"]

let nomes_corretos = nomes.map( maiuscula => maiuscula.toUpperCase()) //colocando nomes em maiusculo

console.log(nomes_corretos)

