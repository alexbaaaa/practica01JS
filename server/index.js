const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;
const MESSAGES = [
    {
        name : "Pepe",
    },
    {
        name : "Alejandro",
    },
    {
        name : "Santiago",
    },
    {
        name : "Fran",
    },
    {
        name : "Raul",
    }
]
app.use(cors());
app.use(express.static('public'));

//Enviar un archivo en concreto de un directorio
app.get('/prueba',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.get('/message',(req,res)=>{
    res.send(JSON.stringify(MESSAGES));
});

app.listen(PORT);