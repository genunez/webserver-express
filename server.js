const express = require('express')
const app = express();

const hbs = require('hbs')
require('./hbs/helpers');

const port = process.env.port || 8084;
app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/home', (req, res) => {


    res.render('home', {
        nombre: 'Gonzalo'
    });
})

app.get('/about', (req, res) => {


    res.render('about');
})




app.listen(port, () => {
    console.log(`Escuchado peticiones en el puerto ${port}`)
})