let grados = 10;
let minutos = 22;
let segundos = 36;
let valorPi = 3.1416/180;
let radianes = valorPi*(grados+(minutos/60)+(segundos/3600));
console.log(`${grados} grados, ${minutos} minutos,  ${segundos} segundos, son:`);
console.log(`${radianes.toFixed(4)} radianes`);