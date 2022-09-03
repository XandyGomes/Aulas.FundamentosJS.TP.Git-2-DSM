Number.prototype.entre = function (ini, fim){
    return this >= ini && this <= fim
}

const resultado = function(nota){
    if(nota.entre(9,10)){
        console.log("Aprovado com nota máxima")
    }else if(nota.entre(7,8)){
        console.log("Aprovado")
    }else if(nota.entre(5,6.99)){
        console.log("+ ou - Aprovado")
    }else if(nota.entre(0,4.99)){
        console.log("reprovado")
    }
    else{
        console.log("Nota inválida")
    }
}

resultado(5)