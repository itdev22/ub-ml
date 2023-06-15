var express = require('express');
var router = express.Router();
const NilaiSiswaController = require('../src/controllers/nilaisiswa');
const multer = require('multer')
const csv = require('fast-csv');
const path = require('path')
const fs = require('fs');
const models = require('../src/models')

/* GET users listing. */
// router.get('/', NilaiSiswaController.nilaiSiswaList);
// router.get('/:id', NilaiSiswaController.nilaiSiswaDetail);
// router.put('/:id', NilaiSiswaController.nilaiSiswaUpdate);

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'public/uploads')
  },
  filename: (req, file, callBack) => {
    callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({
  storage: storage
});

async function uploadCsv(uriFile, req, res) {
  let stream = fs.createReadStream(uriFile);
  let csvDataColl = [];
  let fileStream = csv
    .parse()
    .on("data", function (data) {
      csvDataColl.push(data);
    })
    .on("end", async function () {
      csvDataColl.shift();

      for (const csvDataColl1 of csvDataColl) {
        console.log(csvDataColl1[0]);
        console.log(csvDataColl1[1]);
        await models.NilaiSiswa.update(
          {
            output: csvDataColl1[1]
          },
          {
            where: {
              id_siswa: csvDataColl1[0]
            }
          }
        );

      }

      return res.render('nilaisiswa/index', { title: 'Import' });
      fs.unlinkSync(uriFile)
    });

  stream.pipe(fileStream);
}

router.post('/import-csv', upload.single("import-csv"), async (req, res) => {
  console.log('File has imported :');
  await uploadCsv('public/uploads/' + req.file.filename, req, res);
  return true
});

module.exports = router;
