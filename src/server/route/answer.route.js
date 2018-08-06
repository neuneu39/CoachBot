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
        // let mode001 = rModeFunc(req, res)
      // if (mode001 === 1) {
      //   mode001
      // } else {
      //   rModeFunc(req, res)  
      // }
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
      // res.json(`${json.entities[0].name}ってどういう意味ですか？`)
    })
}
function nModeFunc(req, res, flag) {
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
      if(flag === 1) {
        json.results[0].reply
      } else {
        res.json(json.results[0].reply)
      }
    })
}

function makeResponseWord(dataJson, req, res) {
	let entitie = dataJson.entities
	let sen_magnitude = dataJson.documentSentiment.magnitude
	let sen_score = dataJson.documentSentiment.score
	console.log("sen score", sen_score, sen_magnitude)
  let ImportWord = '...'
  const Flag = 1

	if(sen_magnitude > 0.1 && sen_score > 0.3) {
		ImportWord = findImportantWord(entitie)
		console.log("1=", ImportWord.name　+ 'ってどういうことですか。もっと聞かせてください');
		return ImportWord.name + 'ってどういうことですか。もっと聞かせてください'
	} else if (sen_magnitude > 0.1 && sen_score < -0.3) {
		ImportWord = findImportantWord(entitie)
		console.log("2=", 'そうなんですね' + ImportWord.name + 'ってどんなことですか');
		return 'そうなんですね' + ImportWord.name + 'ってどんなことですか'
	} else {
    // if (Math.random() > 0.1) {
    //   //let words = nModeFunc(req, res, flag = 1)
    //   //console.log('words = ', words)
    //   return Flag
    // } else {
    return ImportWord
	}
}

function findImportantWord(entitie) {
	const MaxSalience = Math.max(...entitie.map((o) => o.salience));
	const importantEntitie = entitie.filter((value) => {
	    return value.salience === MaxSalience
	});
	return importantEntitie[0] //最初の単語を
}

module.exports = router
