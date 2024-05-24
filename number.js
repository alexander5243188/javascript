// Tipo entero y decimal
const entero = 3;
console.log('3 ', typeof entero);

const decimal = 3.33;
console.log('3.33 ',typeof decimal);

// Notacion cientifica
const cientifico = 3e3;
console.log('3e3 ', typeof cientifico);

// Infinitos
const infinito = Infinity;
console.log('infinity ',typeof infinito);

const noEsUnNumero = NaN;
console.log('NaN ',typeof noEsUnNumero);

let suma = 3 + 2;
console.log('3 + 2 = ', suma);

let resta = 3 - 2;
console.log('3 - 2 = ', resta);

let multipicacion = 3 * 2;
console.log('3 * 2 = ', multipicacion);

let division = 3 / 2;
console.log('3 / 2 = ', division);

let modulo = 3 % 2;
console.log('3 % 2 = ', modulo);

let exponete = 3 ** 2;
console.log('3 ** 2 = ', exponete);

// precision
let precision = 0.1 + 0.2;
console.log('0.1 + 0.2 = ', precision);
console.log('0.1 + 0.2 = ', precision.toFixed(1));

// comparacion a nivel de tipo y valor
console.log(typeof precision, precision.toFixed(1),' = ', '0.3',typeof 0.3);
console.log(precision === 0.3);
console.log(typeof precision, precision.toFixed(1),' = ', '0.30000000000000004',typeof 0.30000000000000004);
console.log(precision === 0.30000000000000004);

const raizCuadrada = Math.sqrt(16);
console.log('Raiz Cuadrada  de 16 = ', raizCuadrada);

const valorAbsoluto = Math.abs(-16);
console.log('Valor Absoluto de -16 = ', valorAbsoluto);

const numeroAleatorio = Math.random();
console.log('Numero aleatorio: ', numeroAleatorio);