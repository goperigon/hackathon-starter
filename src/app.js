const express = require('express')
const app = express()
const path = require('path')

const getPerigonArticles = require('../services/api')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

app.get('/lets-hack', async (req, res) => {
  const dataToReturn = await getPerigonArticles()
  res.send(dataToReturn)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})