// {} []

const pessoa = {
    nome: 'Ale',
    idade: 25,
    endereco: {
        logradouro: 'Rua tal',
        numero: 1250
    }
}

//passando com {} para extrair do objeto os atributos

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

console.log(pessoa)

const { endereco: { logradouro, numero }} = pessoa
console.log(logradouro)
console.log(numero)