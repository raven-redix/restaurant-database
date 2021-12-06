const {sequelize, DataTypes, Model} = require('./db');

class Restaurant extends Model {
    //methods go here
};

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
});

module.exports = { Restaurant };