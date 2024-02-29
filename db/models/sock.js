const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ User, Cart, Order }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'sockId' });
      this.hasMany(Order, { foreignKey: 'sockId' });
    }
  }
  Sock.init({
    color: DataTypes.ENUM(['белый', 'желтый', 'фиолетовый', 'розовый', 'салатовый', 'голубой']),
    pic: DataTypes.STRING,
    decor: DataTypes.STRING,
    favorite: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
