const arrayNums = [1, 2, 3, 4] //declarando lista


//funcao normal
/* function multiplica10(num) {
    return num * 10
} */



//arrow function dentro do map
const arrayNumsMultiplicados = arrayNums.map(multiplica10 => multiplica10 * 10)

console.log(arrayNumsMultiplicados)