/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      {
        color: 'white',

      },
      {
        color: 'yellow',

      },
      {
        color: 'purple',

      },
      {
        color: 'pink',

      },
      {
        color: 'limegreen',

      },
      {
        color: 'blue',

      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', null, {});
  },
};
