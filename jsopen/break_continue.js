//Casos muy especificos: Break Continue
 let lista=[2,5,4,8,9,6,10,73]
 for (let i = 0; i< lista.length; i++){
    if (lista[i] === 2){
        continue;
    }

    console.log(lista[i]);

    if (lista[i]> 5 ){
        break;
    }
    console.log(lista[i]); //Aqui ya no reitera el 8 porque ya ha roto el ciclo con anterioridad
}

 //Tenemos que evitar usar break i continue ya debemos que codificar bien los bucles por tal de no tener que utilizarlos

 //Labels
let unidades = 0
let decenas = 0
while(true){
    console.log(`El numero actual es: ${decenas} ${unidades}`);
    while(true){
        unidades++
        if(unidades ===10){
            unidades = 0;
            break;

        }
    }
    decenas ++
    if (decenas === 2){
        console.log( `El numero actual es : ${decenas} ${unidades}`)
        break
    }
  }