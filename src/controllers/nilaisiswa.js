const models = require('../models')


exports.nilaiSiswaList = async (req, res) => {
    try {
        const nilaiSiswa = await models.NilaiSiswa.findAll({});
        return res.json(nilaiSiswa);
    } catch (error) {
        return res.json(error);

    }
}

exports.nilaiSiswaDetail = async (req, res) => {
    try {
        const nilaiSiswa = await models.NilaiSiswa.findOne({
            where: {
                id_nilai_siswa: req.params.id
            }
        });
        return res.json(nilaiSiswa);
    } catch (error) {
        return res.json(error);

    }
}

exports.nilaiSiswaUpdate = async (req, res) => {
    try {
        const nilaiSiswa = await models.NilaiSiswa.update(
            {
                output: req.body.output
            },
            {
                where: {
                    id_siswa: req.params.id
                }
            }
        );
        return res.json(nilaiSiswa);
    } catch (error) {
        return res.json(error);

    }
}



