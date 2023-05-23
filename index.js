//import modules
//Inquirer
const inquirer = require('inquirer')
//FS for writing files
const fs = require('fs')


//create prompt questions?
const questions = [
    {
        type: 'input',
        message: 'Enter Up To Three Characters',
        name: 'title',
    },
]

// init?