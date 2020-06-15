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
  };
  return Follow;
};
