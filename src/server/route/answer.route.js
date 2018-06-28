const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//   console.log("リクエストはgetです",req.body);
//   res.json({
//     weather: "いい天気ですね",
//     daikichi: "今日はいいことがありますよ",
//     cyukichi: "きっといいことがあります",
//     shokichi: "大変かもしれないけど頑張って"
//   },
// );
// });
const WordMap = ['daikichi', 'cyukichi', 'shokichi']

function omikuji () {
  return Math.floor(Math.random() * 3)
}

router.post('/', (req, res) => {
  console.log('リクエストはpostです', req.body);
  if (req.message == '天気') {
    res.json({
      message: 'いい天気ですね',
    })
  } else if (req.message == 'おみくじ') {
      req.json({
        message: 'おみくじですね'
      })
    } else {
      req.json({
        message: 'はずれ'
      })
    }  
});

module.exports = router;