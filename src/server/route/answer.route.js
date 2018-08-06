const FormData = require('form-data');
const ApiKeys = require('../key-files')
const fetch = require('node-fetch')
const express = require('express')
const router = express.Router()
const RMODE = 2;

router.post('/', (req, res) => {
  if (req.body.message !== '') {
    if(req.body.mode === RMODE) {
      nModeFunc(req, res)
    } else {
      rModeFunc(req,res)
    }
  }
})

function nModeFunc(req, res) {
  const method = 'POST'
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const obj = {
    'document': {
      'type': 'PLAIN_TEXT',
      'content': `${req.body.message}`
    },
    'features': {
      'extract_syntax': false,
      'extractEntities': true,
      'extractDocumentSentiment': true
    },
    'encodingType': 'UTF8'
  }
  const body = JSON.stringify(obj)

  return fetch(`https://language.googleapis.com/v1/documents:annotateText?key=${ApiKeys.googleApi}`, {method, headers, body})
    .then(response => response.json())
    .then(json => {
      console.log(json)
      res.json(json)
    })
}
function rModeFunc(req, res) {
  const body = new FormData()
  body.append('query', req.body.message)
  body.append('apikey', ApiKeys.talkApi)  
  const method = 'POST'
   // 要約機能使う場合
   // body.append('apikey', ApiKeys.summarizeApi)
   // body.append('sentences', req.body.message)
   // return fetch('https://api.a3rt.recruit-tech.co.jp/text_summarization/v1/', {method, body})

  return fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk', {method, body})
    .then(response => response.json())
    .then(json => {
      console.log(json)
      res.json(json.results[0].reply)
    })
}

module.exports = router
