const { Menu } = require('./menu');
const {sequelize} = require('./db');
const { MenuItem } = require('./menu-item');
//const {Restaurant, Menu} = require('./index');
const { Restaurant } = require('./restaurant');


describe('Restaurant Database', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });

        const testRestaurants = [
            { name: 'Ronalds', location: 'Arlington, Tx', capacity: 300 },
            { name: 'Kalachandjis', location: 'Dallas, Tx', capacity: 400 },
            { name: 'Spiral Diner', location: 'Denton, Tx', capacity: 200 }
        ]

        const testMenu = [
            {type: 'breakfast'},
            {type: 'lunch'},
            {type: 'dinner'}
        ]

        const testMenuItems = [
            {name: 'bagel', calories: '95'},
            {name: 'salad', calories: '250'},
            {name: 'soup', calories: '320'}
        ]

        Restaurant.bulkCreate(testRestaurants);
        Menu.bulkCreate(testMenu);  
        MenuItem.bulkCreate(testMenuItems);      

    });

    test('can create a Restaurant', async() => {
        const restaurant = await Restaurant.findOne({where: {name: 'Ronalds'}});
        expect(restaurant.id).toBe(1);
        // console.log(restaurant);
    });

    test

    test('Restaurant has a name', async() => {
        const restaurant = await Restaurant.findOne({where: {id: 1}})
        expect(restaurant.name).toBe('Ronalds');
    });

    test('Restaraunt has a location', async() => {
        const restaurant = await Restaurant.findOne({where: {id: 2}})
        expect(restaurant.location).toBe('Dallas, Tx');
    });

    test('Restaurant has a capacity', async() => {
        const restaurant = await Restaurant.findOne({where: {id: 3}})
        expect(restaurant.capacity).toEqual(200);
        console.log(restaurant);
    });

    

    test('Menu has a type', async() => {
        const menu = await Menu.findOne({where: {id: 1}})
        expect(menu.type).toBe('breakfast');
    });

    

    test('MenuItem has a name', async() => {
        const menuItem = await MenuItem.findOne({where: {id: 2}})
        expect(menuItem.name).toBe('salad');
    });

    test('MenuItem has calories listed', async() => {
        const menuItem = await MenuItem.findOne({where: {id: 3}})
        expect(menuItem.calories).toBe(320);
    });


});