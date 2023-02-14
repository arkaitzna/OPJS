// Listas / Arrays

// 1ª manera de definir una lista

const lista=[ 1, "hola", true, undefined, null]

console.log(lista)

// 2ª manera de definir una lista

const lista_2=new Array(2, "adios", false, undefined, null)

console.log(lista_2)

// 3ª manera de definir una lista

const lista_3=new Array(3);

console.log(lista_3);
//Añadimos uno por uno los elementos de la lista con []
lista_3[0]="El primer elemento"
lista_3[1]=true
lista_3[2]=3

console.log(lista_3);

//podemos hacer listas que contengas otros arrays/listas
const lista_4=[lista, lista_2, lista_3]
console.log(lista_4)


//Objetos

const movil={
    altura: 10,
    anchura: 5,
    marca: "apple",
    onwaranty: true,
    contactos: ["Fabi", "Aamama", "Papa", "Ari", "Marc"],
    capacidades:{
        almacenamiento: 64+"gb",
        ram: 4+"gb",
        color: "Rojo"
    }
}

//podemos añadirle nuevos atributos a la lista
movil.capacidades.year=2019;

console.log(movil)


//Fechas
//libreria de apoyo como Moment.js

const ahora = new Date();
console.log(ahora);

//Cuando le pones atributos en Date(X) le añades los milisegundos a la fecha origen 1970/1/1. Yo le he añadido los milisegundos hasta llegar a la fecha en la que he creado este archivo

const fecha_creacion_archivo = new Date(1676373500000)
console.log(fecha_creacion_archivo)

//Se puede dar la fecha con una cadena de texto pero esta tiene que ser en ingles y no se suele utilizar demasiado asi que no hay que darle mucha importancia

const fecha_cadena= new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores= new Date(2022, 0, 1)
console.log(fecha_valores)

const dia= ahora.getDate()
console.log(dia)

const month=ahora.getMonth()+1
console.log(month)

const anyo = ahora.getFullYear();
console.log(anyo)

console.log(dia, month, anyo)

const fullDate= dia+ "/"+ month+ "/"+ anyo
console.log(fullDate)







