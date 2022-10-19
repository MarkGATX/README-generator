// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of messages for user input
let questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: `What's the name of your project?`,
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'What does your project do?',
            name: 'projectDesc',
        },
        {
            type: 'input',
            message: 'How do you install your project?',
            name: 'projectInstall',
        },
        {
            type: 'input',
            message: 'Tell us how to use your project.',
            name: 'projectUsage',
        },
        {
            type: 'list',
            message: 'What license will you include with this project?',
            name: 'projectLicense',
            choices: ['MIT', 'GNU', 'Creative Commons', 'EU Public Usage'],
        },
        {
            type: 'input',
            message: 'How can other people contribute to your project?',
            name: 'projectContrib',
        },
        {
            type: 'input',
            message: 'Tell us about the tests',
            name: 'projectTests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'projectUserName',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'projectEmail',
        },
    ])
    .then((response) => {
        questions = response;
        console.log(questions)
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

