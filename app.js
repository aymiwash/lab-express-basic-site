const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('server is listenning on port 3000');
})

app.use(express.static('public'))

app.get('/home', (request, response) => {
    console.log('getting home!');
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
    console.log('about');
    response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response) => {
    console.log('His works');
    response.sendFile(__dirname + '/views/works.html')
});