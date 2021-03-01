'use strict';

const app = require('./app');

/**
 * Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras iguales, 
 * de forma oblicua, horizontal o vertical.
 * @param {*} req 
 * @param {*} res 
 */
module.exports.esMutante = async (req, res) => {
    try {
        let dna = req.body.adn; // body de la petición
        let mutante = await app.isMutant(dna.toString()); // LLamado función validar adn
        return res.status(mutante ? 200 : 403).send({ codigo: mutante ? 200 : 403, mensaje: mutante ? 'OK' : 'Forbidden' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ codigo: 500, mensaje: 'Error' });
    }
};