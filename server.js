const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

require('./hbs/helpers');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'David'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});