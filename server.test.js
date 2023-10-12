//const { default: test } = require('node:test');
const server = require('./server');
const supertest = require('supertest');

//Testar of servern lever
it('Server is alive', async () => {
    const response = await supertest(server).get('/ping');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('pong');
})

//Testar om taskRoutes fungerar
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
it('GET /tasks ska returnera en array', async() => {
    const response = JSON.parse((await supertest(server).get('/tasks')).text);
    expect(Array.isArray(response)).toBeTruthy();
})

//Checkar att json objektet som servern skickar har rätt id
it('GET /tasks/1 ska returnera tasken med id 1', async() => {
    const response = JSON.parse((await supertest(server).get('/tasks/1')).text);
    expect(response.id).toBe(1);
})

// Delete /id

// Post /

// Put /