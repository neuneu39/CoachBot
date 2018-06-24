const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    weather: "いい天気ですね",
    daikichi: "今日はいいことがありますよ",
    cyukichi: "きっといいことがあります",
    shokichi: "大変かもしれないけど頑張って"
  },
);
});

module.exports = router;