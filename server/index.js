const epress = require('express');
const cors = require('cors');
const app = epress();
const PORT = 3000;
const MESSAGES = [
    {
        name : "pepe",
    },
    {
        namne : "Alejandro",
    },
    {
        nombre : "Santiago",
    },
    {
        nombre : "Fran",
    }
]
app.use(cors());

app.get('/',(req,res)=>{
    res.send(JSON.stringify(MESSAGES));
});

app.listen(PORT);