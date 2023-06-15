var express = require('express');
var router = express.Router();
// const mNilai = models.NilaiSiswa;
/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('nilaisiswa/index', { title: 'Express' });
});

module.exports = router;
