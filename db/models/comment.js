'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    } 
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
