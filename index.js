// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a detailed description of your project.',
    },
    {
      type: 'loop',
      name: 'installation',
      message: 'Would you like to add a step for installation?',
      questions: [
          {
              type: 'number',
              name: 'stepNum',
              message: 'Enter step number'
          },
          {
              type: 'input',
              name: 'value',
              message: 'Describe the installation step.'
          },
        ]
    },
    {
      type: 'loop',
      name: 'usage',
      message: 'Would you like to add a step for usage?',
      questions: [
          {
              type: 'number',
              name: 'stepNum',
              message: 'Enter step number.'
          },
          {
              type: 'input',
              name: 'value',
              message: 'Describe the usage step.'
          },
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
          },
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
      type: 'list',
      name: 'license',
      message: 'Which license applies to your project?',
      choices: ['Apache', 'GNU', 'MIT']
    }
  ])
  .then(data => {
    const filename = `${data.title
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!')
    );
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
