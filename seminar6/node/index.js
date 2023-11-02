const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

// req params
app.get('/utilizator/:id', (req, res) => { 
  const userId = req.params.id;  
  res.send(`ID utilizator: ${userId}`); 
});

// req query
app.get('/resursa', (req, res) => { 
  const pagina = req.query.pagina; 
  const limita = req.query.limita; 
  res.send({msg: `Pagina: ${pagina}, Limita: ${limita}`}); 
});

app.listen(3000)