var variable;
let variablelet;
const constante=0;

var a = 1;
console.log(a);
a=4;
console.log(a);

console.log(constante);

let b = 3;
console.log(b);
b = 5;
console.log(b);

var variable='Hola soy una variable VAR';

for (var i=0; i<3; i++) {
    var variable= 'Soy la segunda variable'
}
console.log(variable)

let variableLet='Hola soy una variable VAR';

for (var i=0; i<3; i++) {
    let variableLet= 'Soy la segunda variable'
    console.log(variableLet)
}
console.log(variableLet)


//typeof

console.log(typeof variable)
console.log(typeof variableLet)
console.log(typeof a)
console.log(typeof variablelet)