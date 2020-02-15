'use strict';

const express = require('express')
const app = express()

require('dotenv').config();

// const PORT = 3000;//MAKE 'SECRET INSIDE .ENV
const PORT = process.env.PORT || 3001;

//tells express to serve files from the public folder
app.use(express.static('./public'));

app.get('/hoodie', function (request, response) {
  response.send('Sup soup soap')
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});