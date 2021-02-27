'use strict';

const app = require('./app');

(async () => {
    try {
        let dna = process.argv.slice(2)[0];
        console.log(dna);
        let mutante = await app.isMutant(dna);
        console.log(mutante);
    } catch (error) {
        console.error(error);
    }
})();