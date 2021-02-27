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
        if (utils.validarLetras(dna)) {
            dna = dna.replace(/[^A-Z,]/g, '');
            let adnArreglo = dna.split(',');
            let validar = [];
            let arreglo = utils.separarLetrasAdn(adnArreglo);
            let matrizRotada = utils.rotarMatriz(Object.assign([], arreglo));
            validar.push(horizontal.adnHorizontal(adnArreglo));
            validar.push(vertical.adnVertical(Object.assign([], matrizRotada)));
            validar.push(oblicua.adnOblicua(Object.assign([], arreglo)));
            validar.push(oblicua.adnOblicua(Object.assign([], matrizRotada)));
            let result = await Promise.all(validar);
            let secuencias = result.reduce((a, b) => a + b, 0);
            return utils.esMutante(secuencias);
        }
    } catch (error) {
        console.error(error);
    }
    return false;
};