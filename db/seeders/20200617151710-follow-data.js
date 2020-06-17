"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Follows", [
      
      {
        followerId: 1,
        followingId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 2,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 3,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 4,
        followingId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 5,
        followingId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 6,
        followingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 7,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 8,
        followingId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 9,
        followingId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        followerId: 10,
        followingId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Follows', null, {});
    
  },
};
