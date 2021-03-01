'use strict';

const chai = require('chai'),
    expect = chai.expect;

const app = require('../app');
const index = require('../index');
const MockExpressResponse = require('mock-express-response');

describe('Test es mutante true', function () {
    this.timeout(0);
    beforeEach(function () { });
    it('es mutante true', async () => {
        const result = await app.isMutant("['ATGT','CATT','TTAT','TGAA']");
        console.log('-------------------------------------------------------------');
        console.log('Respuesta es mutante', JSON.stringify(result));
        console.log('-------------------------------------------------------------');
        expect(result).true;
    });
    after(function () { });
});

describe('Test es mutante false', function () {
    this.timeout(0);
    beforeEach(function () { });
    it('es mutante true', async () => {
        const result = await app.isMutant("['ATGT','CATT','TTAT','TGAC']");
        console.log('-------------------------------------------------------------');
        console.log('Respuesta es mutante', JSON.stringify(result));
        console.log('-------------------------------------------------------------');
        expect(result).false;
    });
    after(function () { });
});

describe('Test mutant OK', function () {
    this.timeout(0);
    beforeEach(function () { });
    it('mutant test 200', async () => {
        const result = await index.esMutante({
            'body': { adn: ["ATGCCG", "CAGTGC", "TTAGGT", "AGGAGG", "ACCTCA", "TCGAGG"] },
            'method': 'POST',
            'headers': {},
            'query': {},
            'path': {}
        }, new MockExpressResponse());
        console.log('-------------------------------------------------------------');
        expect(result.statusCode).to.equal(200);
    });
    after(function () { });
});

describe('Test mutant Forbidden', function () {
    this.timeout(0);
    beforeEach(function () { });
    it('mutant test 403', async () => {
        const result = await index.esMutante({
            'body': { adn: ['ATGT','CATT','TTAT','TGAC'] },
            'method': 'POST',
            'headers': {},
            'query': {},
            'path': {}
        }, new MockExpressResponse());
        console.log('-------------------------------------------------------------');
        expect(result.statusCode).to.equal(403);
    });
    after(function () { });
});