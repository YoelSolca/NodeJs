const express = require('express');


const app = express();

const port = 3001;

//Ruta raiz
/* app.get('/', (req, res) => {
    res.send({
        data: 'Hola Mundo'
    })
}) */

const userRouters = require('./app/routes/user');
const itemsRouters = require('./app/routes/items');

app.use(userRouters);
app.use(itemsRouters);

//Se levanta el servidor
app.listen(port, () => {
    console.log("La aplicacion esta en linea");
})