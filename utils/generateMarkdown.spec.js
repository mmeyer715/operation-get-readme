const generateMarkdown = require('./generateMarkdown');
const { SHIPPING_COST } = require('./constants');

describe('generateMarkdown', () => {
    it("if no badges, return empty string", () => {
        const badges = generateMarkdown('','');
        expect(badges).toEqual('');
    })

    // it("For one order should add shipping cost to new price", () => {
    //     const updatedOrders = generateMarkdown(SHIPPING_COST, [{
    //         price: 20
    //     }]);

    //     expect(updatedOrders).toEqual([{
    //         price: 20,
    //         newPrice: 26.5
    //     }]);
 

    // it("For one order under the minimum, return empty array", () => {
    //     const updatedOrders = generateMarkdown(10, [{
    //         price: 9
    //     }]);

    //     expect(updatedOrders).toEqual([]);
    // })
})