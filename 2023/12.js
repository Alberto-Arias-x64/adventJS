// En el Polo Norte todavía usan fotocopiadoras de papel. 
// Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

// Sin embargo ya son muy viejas y no funcionan muy bien. 
// Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

// Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, 
// pero puedes compararlas con un algoritmo.

// Existe una gran probabilidad de que un carácter se degrade en cada copia (¡no pasa siempre!). 
// Y al ocurrir, la regla que sigue es:

// Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
// Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
// Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
// Ten en cuenta que el último es un espacio en blanco, no un carácter vacío.
// Los caracteres que no son letras (como los dígitos) no se degradan.
// Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.

// checkIsValidCopy(
//   'Santa Claus is coming',
//   'sa#ta Cl#us i+ comin#'
// ) // true
// checkIsValidCopy(
//   's#nta Cla#s is coming',
//   'p#nt: cla#s #s c+min#'
// ) // false (por la p inicial)
// checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
// checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
// Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

// original:  'Santa Claus'
// 1ª copia:  'santa cla#s'
// 2ª copia:  'sa#t# cl#+s'
// 3ª copia:  'sa+## c#+:s'
// 4ª copia:  's#++. c+:.s'
// 5ª copia:  's#+:. c:. s'
// Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.

// Basado en el desafío de CodeWars Photocopy decay
// https://www.codewars.com/kata/5b6fcd9668cb2e282d00000f

function checkIsValidCopy(original, copy) {
  function validate(letter_1 = "", letter_2 = "") {
    if (letter_1 === letter_2) return true
    else if (letter_1.toLowerCase() === letter_2) return true
    else if (/[A-Za-z]/.test(letter_1) && /[a-z#\+:\. ]/.test(letter_2)) return true
    return false
  }
  if (original.length !== copy.length) return false
  if (original === copy) return true
  for (let index = 0; index < original.length; index++) {
    if (!validate(original[index], copy[index])) return false
  }
  return true
}

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'))