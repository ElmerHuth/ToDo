const server = require('./server');
const supertest = require('supertest');

//Ett test som checkar om servern svarar
test('GET / ska returnera statuskoden 200', done => {
    supertest(server)
    .get('/')
    .expect(200)
    .end(done);
})

//Skriv ett test som checkar att servern inte svarar till jibberish
test('Get /jibberish ska returnera statuskoden 404', done => {
    supertest(server)
    .get('/jibberish')
    .expect(404)
    .end(done);
})