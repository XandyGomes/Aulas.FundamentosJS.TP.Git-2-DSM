function jurosSimples(capital, taxa, tempo){
    return capital + (capital * (taxa/100) * tempo)
}

function jurosCompostos(capital, taxa, tempo){
    return capital * (1 + (taxa/100)) ** tempo
}

console.log("Juros simples: ", jurosSimples(100, 10, 2).toFixed(2))
console.log("Juros compostos: ", jurosCompostos(100, 10, 2).toFixed(2))
