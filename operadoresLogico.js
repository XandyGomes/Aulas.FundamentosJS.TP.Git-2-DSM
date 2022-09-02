//TABELA VERDADE

// v e v => v
// v e f => f
// f e ? => f

// v ou f => v
// f ou v => v
// v ou ? => v
// f ou f => f

// !v => f
// !f => v

//2 trabalhos escolares (se fizer os 2, vc tira nota 10 e pode descansar)
//se fizer apenas 1, vc tira 5 e tbm pode descansar
//se não fizer nenhum dos 2, vc fica sem nota e tem que fazer depois
//no retorno = descansar, nota10, nota5, fazer
//passar no console.log  (true,true)
//passar no console.log  (true,false)
//passar no console.log  (false,true)
//passar no console.log  (false,false)

function trab(trabalho1, trabalho2){
    const descansar = trabalho1 || trabalho2
    const nota10 = trabalho1 && trabalho2
    const nota5 = trabalho1 != trabalho2
    const fazer = !descansar

    return {descansar, nota10, nota5, fazer}
}

console.log(trab(true,true))
console.log(trab(true,false))
console.log(trab(false,true))
console.log(trab(false,false))