const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldd!')
})
app.get('/about', (req, res) => {
  res.send('this is an about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})