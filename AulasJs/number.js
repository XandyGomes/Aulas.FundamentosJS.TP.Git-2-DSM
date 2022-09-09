const peso1 = 16.9;
const peso2 = Number('35.2')
var peso3 = 3
var x
x = peso1 + peso2
var y = peso1 * peso3

console.log(x)
console.log(typeof peso2)

const total = (peso1 + peso2) / peso3
// console.log(total.toFixed(2))

document.getElementById('root').innerHTML = total.toFixed(2)