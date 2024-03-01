/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Socks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      colorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Colors',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      imageId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Images',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      decorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Decors',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('Now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('Now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Socks');
  },
};
