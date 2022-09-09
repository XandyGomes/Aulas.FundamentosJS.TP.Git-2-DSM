function tratarErroELancar(erro){
    throw new Error("Não é possível acessar esse site")
}

function imprimirNomeMaisculo(obj){
    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch(e){
        tratarErroELancar(e)
    }
}
const obj = { name: "alexandre" }

imprimirNomeMaisculo(obj)