// explicita type casting
const cadenaDeTexto = '33';
console.log(typeof cadenaDeTexto, cadenaDeTexto);

const numeroEntero = parseInt(cadenaDeTexto);
console.log(typeof numeroEntero, numeroEntero);

const numeroBinario = '000101010';
const numeroBinarioADecimal = parseInt(numeroBinario, 2);
console.log(numeroBinario, ' = ',numeroBinarioADecimal );

// implicita type casting
const suma = '5' + 2;
console.log(suma);

const otraSuma = 2 + true;
console.log(otraSuma);

const numero = 10;
const cadena = '10';
const booleano = true;
console.log('################################');
console.log(`[numero + numero] ${numero} + ${numero} = `,numero + numero);
console.log(`[numero + cadena] ${numero} + ${cadena} = `, numero +cadena);
console.log(`[numero + booleano] ${numero} + ${booleano} = `, numero +booleano);
console.log('################################');
console.log(`[cadena + numero] ${cadena} + ${numero} = `, cadena +numero);
console.log(`[cadena + cadena] ${cadena} + ${cadena} = `, cadena +cadena);
console.log(`[cadena + booleano] ${cadena} + ${booleano} = `,cadena +booleano);
console.log('################################');
console.log(`[booleano + numero] ${booleano} + ${numero} = `, booleano +numero);
console.log(`[booleano + cadena] ${booleano} + ${cadena} = `, booleano +cadena);
console.log(`[booleano + booleano] ${booleano} + ${booleano}`, booleano +booleano);
console.log('################################');

const valorNumero = '596';
const numeroConvertido = parseInt(valorNumero);
console.log(typeof valorNumero);
console.log(typeof numeroConvertido);
