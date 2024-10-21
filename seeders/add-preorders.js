'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Preorders', [
      {
        orderDate: '2024-10-21',
        status: 'pending',
        quantity: 5,
        phoneNumber: '380123456789',
        phoneId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: '2024-10-20',
        status: 'confirmed',
        quantity: 5,
        phoneNumber: '380987654321',
        phoneId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderDate: '2024-10-19',
        status: 'done',
        quantity: 5,
        phoneNumber: '380112233445',
        phoneId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Preorders', null, {});
  },
};
