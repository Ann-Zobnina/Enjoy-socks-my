/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      {
        color: 'white',
        colorName: 'Белый',
      },
      {
        color: 'yellow',
        colorName: 'Желтый',
      },
      {
        color: 'purple',
        colorName: 'Фиолетовый',
      },
      {
        color: 'pink',
        colorName: 'Розовый',
      },
      {
        color: 'limegreen',
        colorName: 'Салатовый',
      },
      {
        color: 'blue',
        colorName: 'Синий',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
