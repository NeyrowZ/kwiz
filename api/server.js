const express = require('express')
const app = express()
app.use(express.json())

const api = express.Router()

api.get('/health', (_, res) => {
  res.status(200).json({ message: 'OK', instance: process.env.HOSTNAME })
})

app.use('/api', api)

app.listen(3000, '0.0.0.0')