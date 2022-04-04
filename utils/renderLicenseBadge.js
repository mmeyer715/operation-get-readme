const Constants = require('./constants');

// Function to produce badges string based on user input
function renderLicenseBadge(license) {

    let badgeString = '';
    if (license.length === 0) {
      return badgeString;
    } else {
      for (var i = 0; i < license.length; i++) {
        badgeString += Constants.BADGE_BASE + license[i].value + Constants.BADGE_END + '\n  ';
        console.log(badgeString); 
      }
      return badgeString;
    }
  }

  module.exports = renderLicenseBadge;