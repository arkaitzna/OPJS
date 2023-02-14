const fecha_nacimiento= new Date("december 02 1994");
console.log(fecha_nacimiento);

const my_object={
    nombre: "Pol Navarro",
    Edad:28+"años",
    Desarrollador:true,
    nacimiento: fecha_nacimiento,
    libro_favorito:{
        titulo: "Siddharta",
        autor:"Germann Hess",
        fecha: "1992",
        url:"https://es.wikipedia.org/wiki/Siddhartha_(novela)"
    }

}
const my_list=[my_object.nombre, my_object.Edad , my_object.Desarrollador , my_object.nacimiento , my_object.libro_favorito]

console.log(my_list)
