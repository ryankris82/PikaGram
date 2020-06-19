"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "User",
          userName: "demouser",
          email: "demo@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          profilePicPath: "https://i.imgur.com/PyMOoJn.jpg",
          bio:
            "I am slowly learning to love my life after a bitter divorce. It may be a slow moving journey, but I'll get there one day.",
          age: 37,
          gender: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
