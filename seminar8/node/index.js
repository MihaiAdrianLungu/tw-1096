const app = require('./app/app');

const User = require("./database/models/User");

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)