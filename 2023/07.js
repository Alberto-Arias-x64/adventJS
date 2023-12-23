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



// Para la señorita Tinna

// En este jardín de la vida, tú eres la planta que florece,
// Creciendo con cada experiencia compartida, con cada desafío superado,
// en este jardín secreto de la existencia, crece la planta como crece nuestra amistad, 
// el cual es un regalo que valoro profundamente.

// Nadie nos advirtió que extrañar es él consto de los buenos momentos.
// Dejar ir no significa olvidar, dejar ir implica permitir que los recuerdos tomen otra forma,
// que no sean una carga, sino un impulso que nos eleve, pues el crecer viene acompañado de
// despedidas, esa soledad es el precio a pagar por la vida de nuestros sueños.

// Reconozco que, en mi búsqueda de la ataraxia, a veces me encuentro soñando en silencio,
// mirando atentamente al horizonte, mientras mis pensamientos me están matando, 
// pero soy una persona muy observadora, así que si creíste que no me di cuenta, 
// te aseguro que lo hice, solo decidí callarme.

// Cuando te sientas mal, por favor, avísame, porque a veces siento que debo 
// guardar silencio para no molestar. Permíteme pedirte un favor, cuida bien de ti,
// come bien, abrígate, toma agua, si sales ve con cuidado, ya que
// en la distancia no puedo cuidarte, pero mi preocupación siempre está contigo.

// Si pudiera darte una cosa especial esta navidad, te daría la capacidad de verte a ti misma a través de
// mis ojos, así te darías cuenta lo especial que eres para mí. Bonito es hablar contigo, 
// bonitos son tus ojos, bonito es escuchar tu voz, bonito es escucharte reír, Bonitos son tus mensajes
// que sin siquiera pablabas trasmiten una belleza única.


// Con cariño, Donalberto




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