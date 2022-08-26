const nome = "Alexandre"
const concatenar = "Olá " + nome + "!"
const template = `Olá ${nome}!`

console.log("aqui está o nome: ", nome)
console.log("aqui está o concatenar: ", concatenar)
console.log('aqui está o template: ', template)

console.log(`1+1 = ${1+1}`)

function m(maiscula){
    return maiscula.toUpperCase()
}

let x = 'fatecanos'
console.log(`Ola... ${m(x)}!!!`)