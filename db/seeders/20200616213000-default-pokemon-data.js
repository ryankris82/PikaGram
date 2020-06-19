'use strict';
const Pokedex = require('pokedex');
const faker = require('faker');
const bcrypt = require('bcryptjs');
const pokedex = new Pokedex();

const array = [
  "pikachu", "eevee", "snorlax",
  "mewtwo", "charizard", "celebi",
  "lucario", "mew", "charmander",
  "squirtle", "bulbasaur", "jigglypuff",
  "raichu", "psyduck", "blastoise",
  "dragonite", "arcanine", "slowpoke",
  "togepi", "vulpix", "jynx",
  "meowth", "glaceon", "lugia",
  "ho-oh", "magikarp", "sylveon",
  "ditto", "gengar", "suicune"
];

function getPokemon(name) {
  const pokemon = pokedex.pokemon(name)
  return pokemon;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const data = array.map((pokemonName) => {
      const { name, sprites, } = getPokemon(pokemonName)
      return {
        firstName: name.charAt(0).toUpperCase() + name.slice(1),
        lastName: 'Pokemon',
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password(), 10),
        profilePicPath: sprites.normal,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });
data.push({
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
});
    return queryInterface.bulkInsert('Users', data, { returning: true });
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
