// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const GenerateLicense = require('./license');


const writeFileAsync = util.promisify(fs.writeFile);

const generateReadMe = (answers) => 
`# ${answers.title}  
## Description
${answers.description}

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Instructions for making contributions](#contributions)
- [Tests](#tests)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License  

${GenerateLicense(answers.license)}

## Questions
If you have any questions you can contact me on: 

${answers.emailAddress}
my github:
https://github.com/${answers.githubName}

## Contributions

### Instructions on how to make contributions
${answers.Contributions}

##Tests
${answers.tests}`;

// TODO: Create an array of questions for user input
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your application'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How would you use this application'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ["MITLicense", "NoLicense", "GNU", "Apache"]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the tests for your application'
      },
      {
        type: 'input',
        name: 'githubName',
        message: 'Name of your Github account'
      },
      {
        type: 'input',
        name: 'Contributions',
        message: 'How would you contribute to this project'
      },
      {
         type: 'input',
         name: 'emailAddress',
         message: 'What is your email address',
      }
    ])
    .then((answers) => {
console.log(answers)
        const htmlPageContent = generateReadMe(answers);
        fs.writeFile('readmeGenerator.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readMeGenerator')
    );
  });


  

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err)
        throw err;
        console.log('you have created a README file!')
    })
};

const init = () => {
    promptUser()
      .then((userInput) => updateReadme('readme.md', createReadmeContent(userInput)))
      .catch((error) => console.error(error));
  };

  init;