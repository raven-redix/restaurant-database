const {sequelize} = require('./db');
//const {Restaurant, Menu} = require('./index');
const { Restaurant } = require('./restaurant')


describe('Restaurant', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });

        const testRestaurants = [
            { name: 'Ronalds', location: 'Arlington, Tx'},//, capacity: 300 },
            { name: 'Kalachandjis', location: 'Dallas, Tx'},//, capacity: 400 },
            { name: 'Spiral Diner', location: 'Irving, Tx'}//, capicity: 200 },
        ]

        Restaurant.bulkCreate(testRestaurants);
        //{ name: 'Ronalds', image: 'https://some.image.url' };

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

    // test('Restaurant has a capacity', async() => {
    //     const restaurant = await Restaurant.findOne({where: {id: 3}})
    //     expect(restaurant.capicity).toEqual(200);
    //     console.log(restaurant);
    // });

    //test('can create a menu')
});