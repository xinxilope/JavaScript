const alunos = ['Joao','juliana','caio','ana']
const medias = [10,7,9,6]

let lista_notas_alunos = [alunos,medias] //coloca 2 listas dentro de 1

//primeiro indice: indica qual a lista, e o segundo indice: o elemento dentro dela
console.log(`o aluno(a) ${lista_notas_alunos[0][1]} tirou ${lista_notas_alunos[1][1]} de media`)