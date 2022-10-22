import FormaGeometrica from './formaGeometrica.mjs'

let forma1 = new FormaGeometrica(15, 12, 'R')
// let forma2 = new FormaGeometrica(10,26,'T')
// let forma3 = new FormaGeometrica(20,10,'E')
// let forma4 = new FormaGeometrica(7.5,12.3,'G')
// let forma5 = new FormaGeometrica('batata','cebola','E')

forma1.base = 7
forma1.altura = 22.5
forma1.tipo = 'R'

console.log(forma1.area)