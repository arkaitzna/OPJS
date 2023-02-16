//Comparaciones
//Igualdad

let a = 5 
let b = 5
let c = 5

if (b>=c && c <= a && a<=c){
    console.log(" son iguales")
}

if (5=="5"){
    console.log("Son iguales, debil")
} 
if(5==="5"){
    console.log('Son iguales fuerte')
}
if(5==4){
    console.log("Son iguales, debil")
} else{ console.log("No son iguales debil")}

if (5===4){
    console.log("Son iguales, fuerte")
} else{console.log("No son iguales fuerte")
}

// Desigualdades !=(debil, solo valor) o !==(Fuerte, valor y tipo)

if (5!=="5"){
    console.log(" No Son iguales, debil")
} 
if(5!=="5"){
    console.log('Son diferentes en tipo fuerte')
}
if(5==4){
    console.log("Son iguales, debil")
} else{ console.log("No son iguales debil")}

if (5===4){
    console.log("Son iguales, fuerte")
} else{console.log("No son iguales fuerte")
}

let pequeño=4
let grande=5
if(pequeño>!grande){
    console.log(" Pequeño No es mayor a Grande")
}
if(pequeño>grande){
    console.log("pequeño Es mayor a grande")
} else{
    console.log("pequeño no es mayor a grande")
}
