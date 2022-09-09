function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2, 5, 7, 8)

function soma(a, b=1) {
    return a + b
}

console.log('aqui é soma1: ', soma(2,5))
console.log('aqui é a soma2:', soma(2))