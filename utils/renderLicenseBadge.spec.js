const renderLicenseBadge = require('./renderLicenseBadge');
const Constants = require('./constants');

describe('renderLicenseBadge', () => {
    it("If empty array, ouput empty string", () => {
        const badges = renderLicenseBadge(Constants.EMPTY_ARRAY);

        expect(badges).toEqual("");
    })

    it("If single badge, ouput string of badge", () => {
        const badges = renderLicenseBadge(Constants.SINGLE_BADGE);
        let expectedOutput = Constants.BADGE_BASE + Constants.SINGLE_BADGE[0].value + Constants.BADGE_END + '\n  ';
        expect(badges).toEqual(expectedOutput);
    })

    it("If multiple badge, ouput string of multiple badges", () => {
        const badges = renderLicenseBadge(Constants.MULTIPLE_BADGE);
        let expectedOutput = "";
        for(i=0; i < Constants.MULTIPLE_BADGE.length; i++){
            expectedOutput += Constants.BADGE_BASE + Constants.MULTIPLE_BADGE[i].value + Constants.BADGE_END + '\n  '; 
        }
        
        expect(badges).toEqual(expectedOutput);
    })
})