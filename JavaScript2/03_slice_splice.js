//SEPARANDO A LISTA EM 2
const nomes = ["joao","mateus","carlos","eduardo","jose","leonardo","arthur","pedro"]


const sala1 = nomes.slice(0,nomes.length/2) //dividindo a lista "nomes" em 2 outras listas pela metade
const sala2 = nomes.slice(nomes.length/2)

console.log(sala1,sala2)




//removendo/adicionando elementos em qualquer lugar
const ListaChamada = ["joao","mateus","carlos","eduardo"]

ListaChamada.splice(1,2,"rodrigo") //removendo (entre esse indice, e esse indice,adicionar esse elemento no lugar)
ListaChamada.splice(2,0,"lem lars") //adicionando elemento antes do primeiro indice

console.log(ListaChamada)