# ToDo server

### Tester
- Get / ska ge statuskoden 200
med supertest och get('/') kommer supertest att skicka en GET request till servern, servern kommer då returnera en statuskod och sedan data.

- Get /jibberish ska ge statuskoden 404

- Get /all ska returnera alla tasksen i en array
med supertest och get('/all') kommer en GET request skickas till servern och servern kommer hantera den med res.json(tasks) för att skicka alla tasks i json format

- Get /id= ska returnera en specifik task
servern ska skicka tillbaka tasken med ett specifikt index

- Delete /id ska ta bort en specifik task från tasks arrayen
- Post / ska appenda en task till slutet av array'n
- Put /id ska ändra en tasks JSON 

### Frågor för framtiden
- Ska alla tasks ha ett unikt id?
- Om task 2 blir borttagen ska task 3 ta över id 2 eller ska nästa task som skapas ta id 2 eller ska id 2 vara oanvänd föralltid?

### Log
- har nu börjat om och ska försöka med nya tag att fixa testerna till todo servern
- stött på problem med att få retur värdet från get requesten i testet för att få arrayn med tasks
- löste problemet genom att stringifya JSON arrayn och sedan parsa den och lägga den i en variabel i testet
- med hjälp av Fabian fick jag reda på att man kan ta bort JSON.stringify()