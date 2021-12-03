const { sequelize, DataTypes, Model } = require('./db');

class Menu extends Model {};

Menu.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});

module.exports = { Restaurant }; 

