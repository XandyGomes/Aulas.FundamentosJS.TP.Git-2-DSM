//area do circulo = pi * raio ^ 2

const raio = 5.4
const area = Math.PI * Math.pow(raio, 2)

// console.log(area.toFixed(2))

document.getElementById('root').innerHTML = area.toFixed(2)