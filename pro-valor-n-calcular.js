let valorNMayorACero = 4;

if (valorNMayorACero > 0) {
    let cuadrado = Math.pow(valorNMayorACero, 2);
    console.log(`El cuadrado de ${valorNMayorACero} = ${cuadrado}`);

    let cubo = Math.pow(valorNMayorACero, 3);
    console.log(`El cubo de ${valorNMayorACero} = ${cubo}`);

    let raizCubica = Math.cbrt(valorNMayorACero);
    console.log(`La raiz cubica de ${valorNMayorACero} = ${raizCubica.toFixed(4)}`);

    let logaritmo = Math.log(valorNMayorACero);
    console.log(`El logaritmo de ${valorNMayorACero} = ${logaritmo.toFixed(4)}`);
}else{
    console.log('Ingrese otro valor');
}