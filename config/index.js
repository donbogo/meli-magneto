'use strict';

// Variables globales
module.exports = {
    PORT: process.env.PORT || 3008, // Express port
    ADNLETRAS: ['A', 'T', 'C', 'G'], // Las letras de los Strings solo pueden ser: (A,T,C,G)
    SECUENCIALETRAS: 4, // Secuencia de cuatro letras iguales
    NROSECUENCIAS: 2 // Es mutante, si encuentra más de una secuencia de cuatro letras iguales
};