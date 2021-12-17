//callback function
let notas = [7, 8, 6.5, 7.5]
let soma_notas = 0

//forEach com arrow function
notas.forEach(nota => {
    soma_notas += nota;
})

//forEach com function normal
/* notas.forEach(function nota(nota) {
    soma_notas += nota;
}) */


let media = soma_notas/notas.length

console.log(media)