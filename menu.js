const { sequelize, DataTypes, Model } = require('./db');

class Menu extends Model {};

Menu.init({
    type: DataTypes.STRING,
    //: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
});

module.exports = { Menu }; 

