const express = require('express');
const naipe controller = require('/controllers/naipe.js')
const app = express();
const port = 3000;

app.get('/naipe', (req, res) => {
    res.send('get naipe');
});

app.listen(port, () => {
    console.log('isso aqui executa quando o servidor inicia');
});
