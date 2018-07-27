const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const answerRoute = require('./route/answer.route')

const app = express()

// body-parser指定
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/answer', answerRoute)

app.listen(config.port, () =>
  console.info(`server started on port ${config.port}`)
)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something broke!' })
})
