const express = require('express');
const hbs = require('hbs');
let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Janny',
        age: 25
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Page not found'
    });
});

app.listen(3000);