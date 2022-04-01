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
      message: 'Please give a brief description of your project.'
    },
    {
        type: 'loop',
        name: 'installation',
        message: 'Would you like to add a step for installation?',
        questions: [
            {
                type: 'input',
                name: 'stepNum',
                message: 'Enter step number'
            },
            {
                type: 'input',
                name: 'value',
                message: 'Describe the step.'
            },

        ]
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
