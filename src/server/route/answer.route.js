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

router.post('/', (req, res) => {
  if (req.body.message == '天気')　{
    return res.json({
      message: 'いい天気ですね',
    })
  } else {
    return res.json({
      message: 'なんですか？',
    })
  }  
});

module.exports = router;