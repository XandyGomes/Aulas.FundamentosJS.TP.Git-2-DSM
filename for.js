let contador = 1
while(contador <= 10){
    console.log(`contador while = ${contador}`)
    contador++
}
console.log("Fim WHILE")

for(let i = 1; i<=10; i++){
    console.log(`contador for= ${i}`)
}
console.log("Fim do FOR")


const notas = [6.7, 7.5, 8.2, 9.2, 10]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}