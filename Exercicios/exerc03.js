/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada
ao expoente.*/

function calculaer(base, expoente){
    let modoAntigo = Math.pow(base,expoente)
    let modoNovo = base ** expoente
    return {modoAntigo, modoNovo}
}
console.log(calculaer(2,3))
console.log(calculaer(2,5))
console.log(calculaer(5,3))
