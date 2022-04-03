// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  let licenseArray = data.license.length;
  renderLicenseBadge(licenseArray);
  // return `# ${data.title}
}

module.exports = generateMarkdown;
