const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sock }) {
      this.hasMany(Sock, { foreignKey: 'imageId' });
    }
  }
  Image.init({
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
