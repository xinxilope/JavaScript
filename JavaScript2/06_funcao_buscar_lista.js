const alunos = ['joao','juliana','caio','ana']
const medias = [10,7,9,6]

let lista_notas_alunos = [alunos,medias]

//funcao para encontrar nome do aluno e media na lista

const ExibeNomeNota = (nome_aluno) => {
    if (lista_notas_alunos[0].includes(nome_aluno)) {
        let indice = lista_notas_alunos[0].indexOf(nome_aluno)
        return lista_notas_alunos[0][indice] + " sua media é " +  lista_notas_alunos[1][indice]
    } else {
        return "Aluno não cadastrado"
    }
}

console.log(ExibeNomeNota("caio"))