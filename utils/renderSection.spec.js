const renderSection = require('./renderSection');
const Constants = require('./constants');
const { MULTIPLE_SECTION } = require('./constants');

describe('renderSection', () => {
    it("If there are installation sets, return empty string", () => {
        const sectionSteps = renderSection(Constants.EMPTY_ARRAY);

        expect(sectionSteps).toEqual("");
    })

    it("for array.length, then the values are printed in list format", () => {
        const sectionSteps = renderSection(Constants.SINGLE_SECTION);
        let expectedOutput = "1. " + Constants.SINGLE_SECTION[0].value + "\n  ";
        expect(sectionSteps).toEqual(expectedOutput);
    })

    // it("If multiple badge, ouput string of multiple badges", () => {
    //     const badges = renderLicenseBadge(Constants.MULTIPLE_BADGE);
    //     let expectedOutput = "";
    //     for(i=0; i < Constants.MULTIPLE_BADGE.length; i++){
    //         expectedOutput += Constants.BADGE_BASE + Constants.MULTIPLE_BADGE[i].licenseName + Constants.BADGE_END + '\n  '; 
    //     }
        
    //     expect(badges).toEqual(expectedOutput);
    // })
})