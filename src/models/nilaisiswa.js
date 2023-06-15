'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NilaiSiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NilaiSiswa.init({
    id_nilai_siswa: DataTypes.INTEGER,
    id_siswa: DataTypes.INTEGER,
    id_rombel: DataTypes.INTEGER,
    id_personel: DataTypes.INTEGER,
    id_mapel_1: DataTypes.INTEGER,
    id_mapel_2: DataTypes.INTEGER,
    id_mapel_3: DataTypes.INTEGER,
    id_mapel_4: DataTypes.INTEGER,
    id_mapel_5: DataTypes.INTEGER,
    id_mapel_6: DataTypes.INTEGER,
    id_mapel_7: DataTypes.INTEGER,
    id_mapel_8: DataTypes.INTEGER,
    id_mapel_9: DataTypes.INTEGER,
    id_mapel_10: DataTypes.INTEGER,
    id_mapel_11: DataTypes.INTEGER,
    output: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NilaiSiswa',
    tableName: 'nilai_siswa'
  });

  NilaiSiswa.removeAttribute('id');
  NilaiSiswa.removeAttribute('createdAt');
  NilaiSiswa.removeAttribute('updatedAt');

  return NilaiSiswa;
};