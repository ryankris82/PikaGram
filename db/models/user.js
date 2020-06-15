'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }, 
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }, 
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }, 
    email:{
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    hashedPassword:{
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      unique: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    }, 
    profilePicPath: {
      type: DataTypes.STRING,
      allowNull: true
    }, 
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    } 
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};