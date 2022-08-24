const inquirer = require('inquirer')
const fs = require('fs')

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
            name: 'username'
        },
        {
            type: 'input',
            message: 'Please input your email.',
            name: 'email'
        },

    ]).then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });