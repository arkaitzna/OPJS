//Bifurcaciones if...else

if (true){
    console.log("Es verdader")
}

if(false){
    console.log("Es verdadero")
} else{
    console.log("es falso")
}


let saldo=50;
let efectivo=60;


if (efectivo<=saldo){
    console.log("Puede retirar dinero")
} else{
    console.log("No tiene saldo suficiente")
}

//If else + if else


//Haremos un programa que dandole un valor a nota nos de el aprobado suspenso excelento o notable
    let nota= 2;

    if(nota===5){
        console.log('Enorabuena, has obtenido un sobresaliente')
    }
    else if(nota===4){
        console.log("Sigue así, has obtenido un notable")
    }
    else if(nota===3){
        console.log("Has aprovado, sigue estudiando")
    }
    else if(nota<3){
        console.log('Tienes que aplicarte mas. Has suspendido')
    }
    else{
        console.log("Ha habido un error, ponte en contacto con tu professor. Esperamos que te haya ido bien el examen y discupa por las molestias!")
    }


    //SWITCH


let prueba=4;

switch(prueba){
    case 1:
        console.log("Examen nulo");
        break;
    case 2:
        console.log("Has suspendido, estudia más");
        break;
    case 3:
        console.log("Has aprobado, esperemos que la proxima puedas sacar mejor nota");
        break;
    case 4:
        console.log("Felicidades, has sacado un notable!");
        break;
    case 5:
        console.log("Enorabuena, has conseguido un sobresaliente!");
        break;
    default:
        console.log("Error!")
        break;
}



