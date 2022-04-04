// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const BADGE_BASE = "![badge](https://img.shields.io/badge/license-"
  const BADGE_END = '-blueviolet)'
  let badgeString = '';
  if (license.length === 0) {
    return badgeString;
  } else {
    for (var i = 0; i < license.length; i++) {
      badgeString += BADGE_BASE + license[i].licenseName + BADGE_END + '\n  ';
      console.log(badgeString); 
    }
    return badgeString;
  }
}

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
  `;

}

module.exports = renderLicenseBadge;

