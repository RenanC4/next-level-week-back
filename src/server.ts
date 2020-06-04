import express from 'express'

const app = express()

app.get('/users', (req, res) => {

  res.json({
    "buceta": "azeda"
  })

})

app.listen(3333)