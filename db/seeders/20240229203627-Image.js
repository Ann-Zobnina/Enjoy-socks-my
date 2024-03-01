/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          image: 'img/5.png',
        },
        {
          image: 'img/6.png',
        },
        {
          image: 'img/7.png',
        },
        {
          image: 'img/8.png',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
