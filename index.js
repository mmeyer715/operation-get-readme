// Packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// collect data for readme
function getReadmeData() {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
      default: 'My Project'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a detailed description of your project.',
      default: 'My Description'
    },
    {
      type: 'loop',
      name: 'installation',
      message: 'Would you like to add a step for installation?',
      questions: [
          {
              type: 'input',
              name: 'value',
              message: 'Describe the installation step.'
          }
        ]
    },
    {
      type: 'loop',
      name: 'usage',
      message: 'Would you like to add a step for usage?',
      questions: [
          {
              type: 'input',
              name: 'value',
              message: 'Describe the usage step.'
          }
        ]
    },
    {
      type: 'loop',
      name: 'contributing',
      message: 'Would you like to give credit to any contributors?',
      questions: [
          {
              type: 'input',
              name: 'value',
              message: 'Enter contributors name.'
          }
        ]
    },
    {
      type: 'loop',
      name: 'tests',
      message: 'Would you like to add any testing instructions for your project?',
      questions: [
        {
          type: 'input',
          name: 'value',
          message: 'Please explain and provide examples of the test performed.'
        }
      ]
    },
    {
      type: 'loop',
      name: 'questions',
      message: 'Add additioinal contact information for potential questions.',
      questions: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter contact name.'
        },
        {
          type:'input',
          name: 'gitHub',
          message: 'Please enter your gitHub link to your profile.'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter contributors email address'
        },
      ]
    },
    {
      type: 'loop',
      name: 'license',
      message: 'Would you like to add a license?',
      questions: [
        {
          type: 'input',
          name: 'value',
          message: 'Enter license name.'
        }
      ]
    }
  ])
}

// writes user information to new file
function writeToFile(fileName, data) {

  fileName = `${fileName
    .toLowerCase()
    .split(' ')
    .join('')}.md`;
    
  fs.writeFile(fileName, data, err =>
  err ? console.log(err) : console.log('Success!')
  );
}

// initializes app
async function init() {
  const data = await getReadmeData();
  const setReadme = generateMarkdown(data);
  writeToFile(data.title, setReadme);
}

// Function call to initialize app
init();
