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
