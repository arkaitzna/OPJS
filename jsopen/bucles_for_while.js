// Bucles

// Bucles For

//for(inicializacion; condicion; actualizacion)  {  Esto es el bucle   }



// Comentario: {i = i + 1; i += 1; i++} Todas estas expresiones son iguales para abrebiar utilizaremos i++, aunque solo sirve si le sumamos 1 para las demas sumas hazlo con i+= 2/3/4/5...

for(let i = 0; i < 11; i+= 2){
    console.log(i)
}

//Este console.log es dificil de entender pero aqui lo explico: lista[] nos ayuda a saber que elemento hay en la posicion[] de lista. Si i=0  imprimira un 1, ya que 1 esta en la posicion 0, y seguira con el bucle hasta que i sea igual o mayor a 7,  entonces se retoma el bucle y i=1 por el i++, en lista[1] esta el 2 y lo imprime, hasta llegar al final donde i=6, donde esta el valor 13... Espero que lo entiendas!

let lista = [1, 4, 5, 7, 9, 10, 13];
for( let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

// .length (longitud) es un contador de caracteres o de elementos, nos ayuda a recorrer un string una cadena de texto o o lista y nos cuenta los caracteres que hay
console.log(lista.length)

// Estructura for of(te hace lo mismo que arriba), veamoslo:

for(let valores of lista){
    console.log(valores)
} // Le decimos que cree la variable valores y que esos valores sean cada uno de los valores de la lista

//Estructura forEach, es la mas innovadora y mas eficiente
lista.forEach(valores1=>{
    console.log(valores1)
})

// Tambien podemos hacer operaciones al retorno del console.log

for( let i = 0; i < lista.length; i++){
    // Sumar
    console.log(lista[i] + 2);
    //Multiplicar
    console.log(lista[i] * 3);
    //Divide
    console.log(lista[i] / 2);
    //Residuo: el %2 Nos devuelve si es par=0 o si es impar=1
    console.log(lista[i] % 2);
    //...
}

//Estructura for in 
let persona={
    nombre: "Pol",
    apellido:"Navarro", 
    edad: 27,
    isdeveloper: true
}
//El (persona[propiedad] es importante que te fijes que te da el contenido de la propiedad)
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

//Bucles while

let i = 0;
let max= 10;
while(i < max){
    console.log(i);
    i++;
}

//Bucle Do...While

do {
    console.log(i);
    i++;
}while(i<max)