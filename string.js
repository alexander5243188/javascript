const nombre = 'dani';
const ocupacion = 'joda';

const tiempoLibre = `Hola mi nombre es ${nombre} y mi tiempo libre lo dedico a la ${ocupacion}`

console.log(tiempoLibre);

const primeraParte ='Alegria';
const segundaParte = 'de';
const terceraParte = 'ENKI';
const estiloDeVida = [primeraParte, segundaParte, terceraParte];

console.log(estiloDeVida);
console.log(estiloDeVida.join(' '));
console.log("Mi vida cambio gracias a ".concat(primeraParte,' ', segundaParte, ' ',terceraParte));

const whatDoIdo = 'I\'m software engineer';
console.log(whatDoIdo);

// Strings primitivos
const stringPrimitivo = String("Hola, soy un string primitivo");
console.log(typeof stringPrimitivo);

// Strings objetos
const stringObjeto = new String("Ahora yo soy un objeto");
console.log(typeof stringObjeto);

//acceder a caracteres
const saludo = 'Hola mama, estoy programando en JavaScript';
console.log(saludo);
console.log('Caracter en la ubicacion 6 mediante indice: ',saludo[6]);
console.log('Caracter en la ubicacion mediante una funcion que recibe el indice ',saludo.charAt(6));
console.log('Busca el primer caracter, mediante una funcion que recibe la letra ',saludo.indexOf('m'));
console.log('Busca el ultimo caracter, mediante una funcion que recibe la letra',saludo.lastIndexOf('m'));
console.log('Busca la ubicacion de la palabra, la funcion recibe la palabra',saludo.indexOf('JavaScript'));
console.log('Busca los caracteres entre los indices 3 y 6',saludo.slice(3, 6));
console.log('Indica el tamaño de la cadena',saludo.length);
console.log(saludo.toUpperCase());
console.log(saludo.toLocaleUpperCase());
console.log(saludo.toLocaleLowerCase());
console.log(saludo.toLowerCase());

//dividir a partir de los espacios
const dividirConEspacios = saludo.split(' ');
console.log(dividirConEspacios);

//dividir a partir de la letra o
const dividirConLetraO = saludo.split('o');
console.log(dividirConLetraO);

//eliminar los espacios al principio y final
const eliminarEspacios = saludo.trim();
console.log(eliminarEspacios);

//remplazar un caracter 
const remplazandoCaracterA = saludo.replace('programando','?');
console.log(remplazandoCaracterA);