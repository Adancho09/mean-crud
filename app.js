const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(express.static('public'));

app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());


app.get('/', (req, res) => {

    res.redirect('/index');

});



app.listen(port, (req, res) => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});


