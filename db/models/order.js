const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sock, { foreignKey: 'sockId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    sockId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
