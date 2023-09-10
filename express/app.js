const express = require('express');
const app = express();

let {people} = require('./data');

app.get('/api/people', (request, response) => {
  response.status(200).json({success: true, people});
});

app.listen(5001, () => {
  console.log('Server is listening on port 5001...');
});
