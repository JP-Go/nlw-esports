import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  response.json({ hi: 'mon' });
});

app.listen(3333);
