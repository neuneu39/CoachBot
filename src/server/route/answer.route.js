const FormData = require('form-data');
const ApiKeys = require('../key-files')
const fetch = require('node-fetch')
const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
  if (req.body.message !== '') {
    const body = new FormData()
    body.append('query', req.body.message)
    body.append('apikey', ApiKeys.talkApi)  
    
    const method = 'POST'
    return fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk', {method, body})
      .then(response => response.json())
      .then(json => {
        res.json(json.results[0].reply)
      })
  }
})

module.exports = router
