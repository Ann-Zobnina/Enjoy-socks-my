const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Sock, Cart, Order }) {
      this.hasMany(Sock, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'userId' });
      this.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    role: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
