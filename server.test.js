const server = require('./server');
const supertest = require('supertest');

//Ett test som checkar om servern svarar
test('GET / ska returnera statuskoden 200', done => {
    supertest(server)
    .get('/')
    .expect(200)
    .end(done);
})

//Ett test som checkar att servern inte svarar till jibberish
test('GET /jibberish ska returnera statuskoden 404', done => {
    supertest(server)
    .get('/jibberish')
    .expect(404)
    .end(done);
})

//Ett test som checkar att servern ger tillbaka en array med GET /all
test('GET /all ska returnera en array', async() => {
    const response = JSON.parse((await supertest(server).get('/all')).text);
    expect(Array.isArray(response)).toBeTruthy();
})