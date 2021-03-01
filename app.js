'use strict';

const horizontal = require('./controllers/horizontal');
const vertical = require('./controllers/vertical');
const oblicua = require('./controllers/oblicua');
const utils = require('./utils');

/**
 * Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras iguales, 
 * de forma oblicua, horizontal o vertical.
 * @param {*} dna 
 */
module.exports.isMutant = async (dna) => {
    try {
        if (utils.validarLetras(dna)) { // Validar que se cumplan los requerimientos de las letras en la matriz
            dna = dna.replace(/[^A-Z,]/g, ''); // Eliminar caracteres
            let adnArreglo = dna.split(','); // Arreglo con las filas de las secuencias
            let validar = []; // Arreglo de promesas para las validaciones: oblicua, horizontal y vertical
            let arreglo = utils.separarLetrasAdn(adnArreglo); // Arreglo con las secuencias del adn
            let matrizRotada = utils.rotarMatriz(Object.assign([], arreglo)); // Se rota o se gira la matriz 90 grados de izquierda a derecha
            validar.push(horizontal.adnHorizontal(adnArreglo)); // Validaciones horizontales
            validar.push(vertical.adnVertical(Object.assign([], matrizRotada))); // Validaciones verticales
            validar.push(oblicua.adnOblicua(Object.assign([], arreglo))); // Validaciones diagonales de izquierda a derecha
            validar.push(oblicua.adnOblicua(Object.assign([], matrizRotada))); // Validaciones de derecha a izquierda
            let result = await Promise.all(validar); // Resultado con las validaciones del adn
            let secuencias = result.reduce((a, b) => a + b, 0); // Cantidad de secuencias encontradas en la matriz
            return utils.esMutante(secuencias);
        }
    } catch (error) {
        console.error(error);
    }
    return false;
};