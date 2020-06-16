'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: faker.name.findName(),
          lastName: faker.name.findName(),
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          profilePicPath: "/photos/picture.jpeg",
          age: Math.floor(Math.random() * 15),
          gender: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.findName(),
          lastName: faker.name.findName(),
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          profilePicPath: "/photos/picture.jpeg",
          age: Math.floor(Math.random() * 15),
          gender: "male",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: faker.name.findName(),
          lastName: faker.name.findName(),
          userName: faker.internet.userName(),
          email: faker.internet.email(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          profilePicPath: "/photos/picture.jpeg",
          age: Math.floor(Math.random() * 15),
          gender: "female",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  
  return queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: users[0].id,
          caption: faker.company.catchPhrase(),
          photoPath: "photos/picture.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          userId: users[0].id,
          caption: faker.company.catchPhrase(),
          photoPath: "photos/picture.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          userId: users[0].id,
          caption: faker.company.catchPhrase(),
          photoPath: "photos/picture.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
    return queryInterface.bulkDelete("Users", null, {});
  },
  }

