const renderQuestions = require('./renderQuestions');
const Constants = require('./constants');

describe('renderQuestions', () => {
    it("If there are installation sets, return empty string", () => {
        const questionSteps = renderQuestions(Constants.EMPTY_ARRAY);

        expect(questionSteps).toEqual("");
    })

    it("for array.length, then the values are printed in list format", () => {
        const questionSteps = renderQuestions(Constants.SINGLE_QUESTION);
        let expectedOutput = "1. " + Constants.SINGLE_QUESTION[0].name + "\n  \t" 
        + Constants.GITHUB_BASE + Constants.SINGLE_QUESTION[0].gitHub + Constants.GITHUB_END + "\n  \t"
        + Constants.EMAIL_BASE + Constants.SINGLE_QUESTION[0].email + Constants.EMAIL_END + "\n  ";
        expect(questionSteps).toEqual(expectedOutput);
    })

    it("for array.length, then the values are printed in list format", () => {
        const questionSteps = renderQuestions(Constants.MULTIPLE_QUESTION);
        let expectedOutput = "";
        for(i=0; i < Constants.MULTIPLE_SECTION.length; i++){
            expectedOutput += (i + 1) + ". " + Constants.MULTIPLE_QUESTION[i].name + "\n  \t" 
            + Constants.GITHUB_BASE + Constants.MULTIPLE_QUESTION[i].gitHub + Constants.GITHUB_END + "\n  \t"
            + Constants.EMAIL_BASE + Constants.MULTIPLE_QUESTION[i].email + Constants.EMAIL_END + "\n  ";
        }
        
        expect(questionSteps).toEqual(expectedOutput);
    })
})