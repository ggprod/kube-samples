const express = require('express')
const request = require('request')
const app = express()

app.get('/', (req, res) => {
  request({ url: 'http://localhost:8081/hello', method: 'GET' }, (err, res1, body) => {
    res.json({ response: body})
  })
})

app.listen(8080, () => console.log('front-container listening on port 8080!'))