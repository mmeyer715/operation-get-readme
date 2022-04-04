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
  
  // Get data for rendering
  let badges = renderLicenseBadge(licenseArray);
  let installation = renderSection(installArray);
  let usage = renderSection(usageArray);
  let license = renderSection(licenseArray);
  let contributing = renderSection(contributeArray);
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
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}
  
  ## Questions
  `;

}

module.exports = generateMarkdown;

