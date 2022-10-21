// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of messages for user input
const questions = [
        {
            type: 'input',
            message: `What's the name of your project?`,
            name: 'title',
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
            choices: ['None', 'MIT', 'Apache', 'GPLv2', 'GPLv3'],
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
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate.generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('You did it!')
    });

}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
     
    });
}

// Function call to initialize app
init();
