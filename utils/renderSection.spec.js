const renderSection = require('./renderSection');
const Constants = require('./constants');

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

    it("for array.length, then the values are printed in list format", () => {
        const sectionSteps = renderSection(Constants.MULTIPLE_SECTION);
        let expectedOutput = "";
        for(i=0; i < Constants.MULTIPLE_SECTION.length; i++){
            expectedOutput += (i + 1) + ". " + Constants.MULTIPLE_SECTION[i].value + "\n  "; 
        }
        
        expect(sectionSteps).toEqual(expectedOutput);
    })
})