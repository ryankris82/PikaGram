'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          caption: "Living my best life...it's electrifying how cool I am!",
          photoPath: "https://i.imgur.com/8NRr1ML.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          caption: "2020 will be my best! New year, evolved Me!",
          photoPath: "https://i.imgur.com/btVuDLz.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          caption: "Quarantine life is so boring. I think I need a nap....",
          photoPath: "https://i.imgur.com/FRNLVAS.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          caption: "Me time! It's important to find time for yourself.",
          photoPath: "https://i.imgur.com/wOXZU6Z.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          caption: "Countdown to fall! Pumpkin spice is life!",
          photoPath: "https://i.imgur.com/745f72v.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          caption: "Hello pikagram! This is my very first post :)!",
          photoPath:
            "https://cdn.bulbagarden.net/upload/thumb/1/1a/Celebi_anime.png/250px-Celebi_anime.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          caption:
            "The other day I went a walk around the forest. Look at my view!",
          photoPath:
            "https://cutewallpaper.org/21/pokemon-scenery-background/Pokemon-Forest-Backgrounds-Wallpaper-Cave.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          caption: "A picture of where I live in case anyone was wondering",
          photoPath:
            "https://cdn.bulbagarden.net/upload/thumb/4/4c/Mt_Molteau.png/1200px-Mt_Molteau.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          caption: "Here's a quick picture of me, might delete later :)",
          photoPath:
            "https://i.pinimg.com/originals/8a/11/c1/8a11c184226a0eef46253a53197cf641.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          caption: "I really just want to go outside and play!!",
          photoPath: "https://i.ytimg.com/vi/Z6sfIBoPL_Y/hqdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          caption:
            "Last night confirmed it for me, I absolutely hate the rain >.<",
          photoPath:
            "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2017/10/charmander-twirling-pokemon-anime-100217.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          caption: "Missing all my homies from the squirtle squad :(",
          photoPath: "https://cdn.bulbagarden.net/upload/7/70/EP012.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          caption: "Who's trynna go swimming, I'm bored.",
          photoPath:
            "https://vignette.wikia.nocookie.net/pokemon/images/f/f6/Team_Go-Getters_Squirtle.png/revision/latest?cb=20150806043431",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 31,
          caption: "Isn't it just so precious you could DIE?!",
          photoPath: "https://i.imgur.com/p1zI1rv.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 31,
          caption: "My workmate Bob. Good guy...bit of a grump at times.",
          photoPath: "https://i.imgur.com/Ozw5YdB.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 31,
          caption: "My new neighbors are really friendly, but really weird.",
          photoPath: "https://i.imgur.com/PXwIaRV.jpg",
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
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
