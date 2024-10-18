const epress = require('express');
const cors = require('cors');
const app = epress();
const PORT = 3000;
// Validar cualquier origen 
app.use(cors());
// Creamos una ruta principal 
app.get('/',(req,res)=>{
    res.send();
});
// Poner a escuchar al servidor por el puerto 3000
app.listen(PORT);