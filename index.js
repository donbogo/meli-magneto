'use strict';

const app = require('./app');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.esMutante = async (req, res) => {
    try {
        let dna = req.body.adn;
        let mutante = await app.isMutant(dna.toString());
        return res.status(mutante ? 200 : 403).send({ codigo: mutante ? 200 : 403, mensaje: mutante ? 'OK' : 'Forbidden' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ codigo: 500, mensaje: 'Error' });
    }
};