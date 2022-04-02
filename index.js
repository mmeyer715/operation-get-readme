// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
              name: 'contName',
              message: 'Enter contributors name.'
          },
          {
              type: 'input',
              name: 'link',
              message: 'Please add github link to contributor.'
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
          name: 'testing',
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
          type:'input',
          name: 'gitHub',
          message: 'Please enter your gitHub username and link to your profile.'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter your email address'
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
          name: 'licenseName',
          message: 'Enter license name.'
        },
        {
          type: 'input',
          name: 'licenseLink',
          message: 'Enter license link.'
        }
      ]
    }
  ])
}

  
// getReadmeData();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  const data = await getReadmeData();
  const setReadme = generateMarkdown(data);
  console.log(data.license[0].licenseName);
}

// Function call to initialize app
init();
