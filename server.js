const express = require('express');
const hbs = require('hbs');
//const { text } = require('express');
require('./hbs/helpers')
const app = express();


const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public')); /// sirve para definir una carpeta publica para que cualquier pueda ver


//  Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'MoisEs mR',
        homeActive: 'active'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        aboutActive: 'active'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});