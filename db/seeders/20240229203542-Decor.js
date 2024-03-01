/** @type {import('sequelize-cli').Migration} */

const fs = require('fs');
// Чтение содержимого изображения в бинарном формате
// const imageData = fs.readFileSync('img/1.png');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Decors',
      [
        {
          decor: 'img/1.png',
        },
        {
          decor: 'img/2.png',
        },
        {
          decor: 'img/3.png',
        },
        {
          decor: 'img/4.png',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decors', null, {});
  },
};
