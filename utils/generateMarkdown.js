// packages needed
const renderLicenseBadge = require('./renderLicenseBadge');
const renderSection = require('./renderSection')


//function to generate markdown for README
function generateMarkdown(data) {
  let installArray = data.installation;
  let usageArray = data.usage;
  let contributeArray = data.contributing;
  let testArray = data.tests;
  let questionArray = data.questions;
  let licenseArray = data.license;
  // get badges
  let badges = renderLicenseBadge(licenseArray);
  let installation = renderSection(installArray);
  let usage = renderSection(usageArray);
  let tests = renderSection(testArray);
  console.log(data);
  return `
  # ${data.title}

  ${badges}
  
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits

  ## License

  ## Badges

  ## Contributing

  ## Tests
  ${tests}
  `;

}

module.exports = generateMarkdown;

