const express = require('express');
const cors = require('cors');
const orders = require('./utils/constants');
const dotenv = require('dotenv');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/orders', function(req, res) {
  res.status(200).json(orders);
})

app.get('/orders/:id', function(req, res) {
  const id = parseInt(req.params.id);

  const order = orders.find(el => el.id === id);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({message: 'Order not found'});
  }
})

app.post('/orders', function(req, res) {
  const newOrder = {
    id: orders.length + 1,
    ...req.body
  }

  orders.push(newOrder);
  res.status(201).json(newOrder);
})

app.put('/orders/:id', function(req, res) {
  const id = parseInt(req.params.id);

  const foundOrderIndex = orders.findIndex(el => el.id === id);

  if (foundOrderIndex !== -1) {
    orders[foundOrderIndex] = {
      ...orders[foundOrderIndex],
      ...req.body
    }

    res.status(200).json(orders[foundOrderIndex]);
  } else {
    res.status(404).json({message: 'Order not found'});
  }
})

app.listen(PORT, function() {
  console.log(`Server is running on port: ${PORT}`)
}) 