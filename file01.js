const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */

function wrapping(gifts) {
    return gifts.map(element => `${'*'.repeat(element.length+2)}\n*${element}*\n${'*'.repeat(element.length+2)}`)
}
