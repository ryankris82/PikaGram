"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.Post, {
      foreignKey: "postId",
    });
    Like.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Like;
};
