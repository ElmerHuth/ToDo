const { default: test } = require('node:test');
const server = require('./server');
const supertest = require('supertest');

//Ett test som checkar om servern svarar
it('GET / ska returnera statuskoden 200', done => {
    supertest(server)
    .get('/')
    .expect(200)
    .end(done);
})

//Ett test som checkar att servern inte svarar till jibberish
it('GET /jibberish ska returnera statuskoden 404', done => {
    supertest(server)
    .get('/jibberish')
    .expect(404)
    .end(done);
})

//Ett test som checkar att servern ger tillbaka en array med GET /all
it('GET /all ska returnera en array', async() => {
    const response = JSON.parse((await supertest(server).get('/all')).text);
    expect(Array.isArray(response)).toBeTruthy();
})

//Checkar att json objektet som servern skickar har rätt id
it('GET /id=1 ska returnera tasken med id1', async() => {
    const response = JSON.parse((await supertest(server).get('/id=1')).text);
    expect(response.id).toBe(1);
})

// Delete /id

// Post /

// Put /