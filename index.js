const express = require('express')
const categories = require('./data/categories.json')
const cors = require('cors')
const news = require('./data/news.json')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon is here!!!')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id',(req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id == id)
  res.send(selectedNews)
  
})

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news)
  } else { 
    const categoryNews = news.filter(n => n.category_id == id)
    res.send(categoryNews)
  }
})

app.listen(port, () => {
  console.log(`Dragon api is running on port ${port}`)
})