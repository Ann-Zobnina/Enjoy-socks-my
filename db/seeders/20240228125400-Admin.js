const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const adminpass = await bcrypt.hash('123', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'info@enjoysocks.ru',
      hashpass: adminpass,
      role: true,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
