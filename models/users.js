const { STRING } = require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const users=sequelize.define('Sign',{
        Name:{
            type:DataTypes.STRING,
        },
        Email:{
            type:DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
            unique: true,
        },
       Password:{
            type:DataTypes.STRING,
        }
    })

      return users;
}