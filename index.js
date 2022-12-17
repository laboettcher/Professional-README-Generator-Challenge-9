// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install dependencies with node.js?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests with node.js?',
        default: 'npm run test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want for your project?',
        choices: ['MIT', 'GPL', 'GPL 2.0', 'GPL 3.0','APACHE 2.0', 'MPL 2.0','None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
       console.log('Creating your README file...');
       writeToFile('README.md', generateMarkdown({...inquirerAnswers})); 
    });
};

// Function call to initialize app
init();
