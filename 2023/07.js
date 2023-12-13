{// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

// drawGift(4, '+')

// /*
//    ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// */

// drawGift(5, '*')
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */

// drawGift(1, '^')
// /*
// #
// */
// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

function drawGift(size, symbol) {
    const sample = size + (size - 1)
    const response = new Array(sample, sample)
    console.log(response)
    for (let index = 0; index < sample; index++) {
        for(let index_2 = 0; index_2 < sample; index_2++){
            response[index][index_2] = '#'
        }
    }
    return '#\n'
}

console.log(drawGift(4, '+'))}