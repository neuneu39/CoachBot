const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const answerRoute = require('./route/answer.route');

const app = express();

//bocy-parser指定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }))


//GET http://localhost:3000/api/vi
// app.get('/api/answer/', (req, res)=> {
//   res.json({
//     message: "Hello, World"
//   });
// });
app.use('/api/answer', answerRoute);
app.listen(config.port, () => 
  console.info(`server started on port ${config.port}`),
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
// });  
