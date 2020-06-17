'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Likes', [
      { userId: 1, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, postId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, postId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, postId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 6, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 7, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, postId: 8, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 9, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 10, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 11, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, postId: 12, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, postId: 13, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, postId: 13, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
