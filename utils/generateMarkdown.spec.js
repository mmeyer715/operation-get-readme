const generateMarkdown = require('./generateMarkdown');
const { SHIPPING_COST } = require('./constants');

describe('generateMarkdown', () => {
    it("if no badges, return empty string", () => {
        const badges = generateMarkdown('','');
        expect(badges).toEqual('');
    })
})