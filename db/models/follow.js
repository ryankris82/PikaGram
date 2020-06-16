'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    followingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    } 
  }, {});
  Follow.associate = function(models) {
    // associations can be defined here
  //  Follow.belongsToMany(models.User, {
  //     through: "Follows",
  //     otherKey: "followingId",
  //     foreignKey: "followerId",
  //     as: "following"
  //   });
  //   Follow.belongsToMany(models.User, {
  //     through: "Follows",
  //     otherKey: "followerId",
  //     foreignKey: "followingId",
  //     as: "followers",
  //   });
  
  };
  return Follow;
};
