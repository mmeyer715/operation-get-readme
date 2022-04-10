const Constants = require("./constants");

function renderQuestions(question) {
    let questionString = '';
    if (question.length === 0) {
        return questionString;
    } 
    else {
        for (let i = 0; i < question.length; i++) {
            questionString += (i + 1) + ". " + question[i].name + ":    " 
            + Constants.GITHUB_BASE + question[i].gitHub + Constants.GITHUB_END + "   "
            + Constants.EMAIL_BASE + question[i].email + Constants.EMAIL_END + "\n  ";
        }
        return questionString;
    }
}

module.exports = renderQuestions;