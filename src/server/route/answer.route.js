const FormData = require('form-data');
const ApiKeys = require('../key-files')
const fetch = require('node-fetch')
const express = require('express')
const router = express.Router()
const RMODE = 2;

router.post('/', (req, res) => {
  if (req.body.message !== '') {
    if(req.body.mode === RMODE) {
      rModeFunc(req, res)
    } else {
      nModeFunc(req, res)
    }
  }
})

function rModeFunc(req, res) {
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
      res.json(makeResponseWord(json, req, res))
    })
}

function nModeFunc(req, res) {
  const body = new FormData()
  body.append('query', req.body.message)
  body.append('apikey', ApiKeys.talkApi)  
  const method = 'POST'
  console.log('こんにちは')
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

function makeResponseWord(dataJson, req, res) {
	let entitie = dataJson.entities
	let sen_magnitude = dataJson.documentSentiment.magnitude
	let sen_score = dataJson.documentSentiment.score
  let ImportandWord = '...'

  // 条件分岐の追加（importantwordがあるかないか） 
  // なかった場合はすぐにreturnしてしまう。

  // 感情スコアと重要度で返答する内容をを場合分け
	if (sen_magnitude > 0.1 && sen_score > 0.3) {
    ImportandWord = findImportantWord(entitie)
    if(ImportandWord.hasOwnProperty('name')) {
      return ImportandWord.name + 'ってどういうことですか。もっと聞かせてください'
    } 
    return 'はい'
	} else if (sen_magnitude > 0.1 && sen_score < -0.3) {
		ImportandWord = findImportantWord(entitie)
		return 'そうなんですね' + ImportandWord.name + 'ってどんなかんじですか'
	} else {
    if (Math.random() > 0.7) {
      ImportandWord = 'うん'
      return ImportandWord
    } else {
      return ImportandWord
    }
	}
}

function findImportantWord(entitie) {
	const MaxSalience = Math.max(...entitie.map((o) => o.salience));
	const importantEntitie = entitie.filter((value) => {
	    return value.salience === MaxSalience
	});
	return importantEntitie[0] //最初の重要度の高い単語を表示
}

module.exports = router
