'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      { firstName: 'Marco', lastName: 'Serrano', userName: 'serranomarco_', email: 'serranomarco@hotmail.com', hashedPassword: 'password', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'John', lastName: 'Doe', userName: 'johndoe', email: 'johndoe@hotmail.com', hashedPassword: 'password', createdAt: new Date(), updatedAt: new Date() },
      { firstName: 'Jane', lastName: 'Doe', userName: 'janedoe', email: 'janedoe@hotmail.com', hashedPassword: 'password', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
