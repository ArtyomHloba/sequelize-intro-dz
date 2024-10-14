'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Phones', 'nfc', 'isNfc');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Phones', 'isNfc', 'nfc');
  },
};
