const { Restaurant } = require('./restaurant');
const { Menu } = require('./menu');
const { MenuItem } = require('./menu-item');

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);


module.exports = { Restaurant, Menu };