const renderLicenseBadge = require('./renderLicenseBadge');
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let installArray = data.installation.length;
  let usageArray = data.usage.length;
  let contributeArray = data.contributing.length;
  let testArray = data.tests.length;
  let questionArray = data.questions.length;
  // get badges
  let badges = renderLicenseBadge(data.license);
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

  ## Usage

  ## Credits

  ## License

  ## Badges

  ## Contributing

  ## Tests
  `;

}

module.exports = generateMarkdown;

