const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const answerRoute = require('./route/answer.route')

const app = express()

// bocy-parser指定
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/answer', answerRoute)

app.listen(config.port, () =>
  console.info(`server started on port ${config.port}`)
)

// app.post('/api/answer', (req, res) => {
//   console.log('リクエストは', req.body)

//   //res.send('POST request to the answer')
// });

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something broke!' })
})
