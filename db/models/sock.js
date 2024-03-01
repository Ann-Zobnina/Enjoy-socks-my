const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({
      Cart, Order, Color, Decor, Image, User,
    }) {
      this.belongsTo(Color, { foreignKey: 'colorId' });
      this.belongsTo(Image, { foreignKey: 'imageId' });
      this.belongsTo(Decor, { foreignKey: 'decorId' });
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'sockId' });
      this.hasMany(Order, { foreignKey: 'sockId' });
    }
  }
  Sock.init({
    colorId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER,
    decorId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
