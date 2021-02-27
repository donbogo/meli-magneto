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
            let secuencias = 0;
            secuencias = await horizontal.adnHorizontal(adnArreglo);
            if (!utils.esMutante(secuencias)) {
                let arreglo = utils.separarLetrasAdn(adnArreglo);
                let arregloVertical = utils.rotarMatriz(Object.assign([], arreglo));
                secuencias += await vertical.adnVertical(arregloVertical);
                if (!utils.esMutante(secuencias)) {
                    secuencias += await oblicua.adnOblicua(Object.assign([], arreglo));
                    if (!utils.esMutante(secuencias)) {
                        let arregloOblicua = utils.rotarMatriz(Object.assign([], arreglo));
                        secuencias += await oblicua.adnOblicua(arregloOblicua);
                    }
                }
            }
            return utils.esMutante(secuencias);
        }
    } catch (error) {
        console.error(error);
    }
    return false;
};