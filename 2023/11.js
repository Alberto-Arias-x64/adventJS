// En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

// Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, 
// como mucho, un intercambio de letras.

// Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

// Si ya es un palíndromo, un array vacío.
// Si no es posible, null.
// Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
// Por ejemplo:

// getIndexsForPalindrome('anna') // []
// getIndexsForPalindrome('abab') // [0, 1]
// getIndexsForPalindrome('abac') // null
// getIndexsForPalindrome('aaaaaaaa') // []
// getIndexsForPalindrome('aaababa') // [1, 3]
// getIndexsForPalindrome('caababa') // null
// Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

function getIndexsForPalindrome(word = '') {
  const response = null
  function verifyPalindrome(word = '') {
    let acc = 0
    while (acc < word.length / 2) {
      if (word[acc] !== word[word.length - acc - 1]) return false
      acc++
    }
    return true
  }
  function intercambiarPosiciones(string, pos1, pos2) {
    let array = string.split('');
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
    let nuevoString = array.join('');
    return nuevoString;
  }
  if (verifyPalindrome(word)) return []
  for (let index = 0; index < word.length; index++) {
    for (let index_2 = index; index_2 < word.length; index_2++) {
      if (verifyPalindrome(intercambiarPosiciones(word, index, index_2))) return [index, index_2]
    }
  }
  return response
}

console.log(getIndexsForPalindrome("aaababa"))