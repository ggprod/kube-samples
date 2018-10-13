const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello from sidecar-container!')
})

app.listen(8081, () => console.log('sidecar-container listening on port 8081!'))