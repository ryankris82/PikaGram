'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Follows', [
      { followerId: 31, followingId: 1, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 2, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 3, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 4, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 5, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 6, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 7, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 8, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 9, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 10, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 11, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 12, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 13, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 14, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 15, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 16, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 17, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 18, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 19, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 20, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 21, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 22, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 23, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 24, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 25, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 26, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 27, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 28, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 29, createdAt: new Date(), updatedAt: new Date() },
      { followerId: 31, followingId: 30, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
