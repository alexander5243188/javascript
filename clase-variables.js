let cajaDeAndy = "Woody";
console.log(cajaDeAndy);

// Tipos de datos 
// Primitivos, Inmutabilidad, se pasan por valor

let number = 26;
number = number +10;
console.log(number);


let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);


// Complejos, Mutables se pasan por referencia

let usuario ={
    nombre: 'dani',
    edad: 36
}
usuario.edad = 100;
console.log(usuario);

let frutas = ['manzana', 'pera'];
frutas[0] = 'sandia';
console.log(frutas);

function cambiarNombre(objeto){
    objeto.nombre = "angi",
    objeto.edad = 0
}

let persona ={
    nombre:'dani',
    edad:33
}

cambiarNombre(persona);
console.log(persona);


    
// Tipado dinamico