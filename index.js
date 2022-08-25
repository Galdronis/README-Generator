// Adding the necessary libraries

const inquirer = require('inquirer')
const fs = require('fs')

// Get the blueprint in there

const generateREADME = ({ title, description, install, usage, contribution, test, tech, license, question,}) =>
`${title}
## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [technologies](#technologies)
- [License](#license)

---

## Project Description 

${description}


## Installation

${install}

### Usage

${usage}

### Contributing

${contribution}

#### Tests

${test}


**Questions**


${question}


**Technologies**

${tech}

### License

${license}
`

// Question time! I happen to be fond of inquirer.

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What title would you like?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What would your description to be?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What would you like your installation instructions to be?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What would you like to add to your usage information?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What would you like to add to your contribution guidelines?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What would you like your test instructions to be?',
            name: 'test'
        },
        {
            type: 'checkbox',
            message: 'what license(s) would you like?',
            choices: ['Academic Free License v3.0', 'Creative Commons license family', 'European Union Public License 1.1', 'ISC', 'MIT', 'Mozilla Public License 2.0'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Please input your github username and a link to your repo.',
            name: 'question'
        },
        {
            type: 'input',
            message: 'What technologies did you use?',
            name: 'tech'
        },
        // .then so it doesnt run until after this stuff has been answered, stick those answers into the blueprint and voila! A quality README.
    ]).then((answers) => {
        const generateFile = generateREADME(answers)
        // Console log those errors if they happen, otherwise tell me I'm good!
        fs.writeFile('README.md', generateFile, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
      );
      });