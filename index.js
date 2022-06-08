const express = require('express');

const app = express();

const blogList = [
  {
    id: 1,
    title: 'Start to create a personal blog site',
    abstract: 'from 2022-06-08',
    createdAt: '2022-06-08',
    views: 2,
    words: 34
  },
  {
    id: 2,
    title: 'Where should I start?',
    abstract: 'design',
    createdAt: '2022-06-08',
    views: 1,
    words: 34
  },
  {
    id: 3,
    title: 'The first day of project',
    abstract: 'exciting',
    createdAt: '2022-06-08',
    views: 0,
    words: 45
  }
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World sent from express backend');
})

app.get('api/blog', (request, response) => {
  response.json(blogList);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.info(`server running on port ${PORT}`);
});