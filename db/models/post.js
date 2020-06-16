"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      caption: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      photoPath: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });
    Post.hasMany(models.Comment, { foreignKey: 'postId' })
    Post.hasMany(models.Like, { foreignKey: 'postId' })
  };
  return Post;
};
