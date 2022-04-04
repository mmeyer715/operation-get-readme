const renderLicenseBadge = require('./renderLicenseBadge');
const Constants = require('./constants');

describe('renderLicenseBadge', () => {
    it("If empty array, ouput empty string", () => {
        const badges = renderLicenseBadge(Constants.EMPTY_BADGE);

        expect(badges).toEqual("");
    })

    it("If single badge, ouput string of badge", () => {
        const badges = renderLicenseBadge(Constants.SINGLE_BADGE)
        let expectedOutput = Constants.BADGE_BASE + Constants.SINGLE_BADGE[0].licenseName + Constants.BADGE_END;
        expect(badges).toEqual(expectedOutput);
    })

    // it("For one order under the minimum, return empty array", () => {
    //     const updatedOrders = generateMarkdown(10, [{
    //         price: 9
    //     }]);

    //     expect(updatedOrders).toEqual([]);
    // })
})