const inquirer = require("inquirer");
const fs = require('fs');

//Here we make an object that list out all the questions for user
    const promptQuestions = [ 
        {
            name: "title",
            type: "input",
            message: "What is the name of the repo?",
        },
        {
            name: "about",
            type: "input",
            message: "What is the repo about?",
        },
        {
            name: "type",
            type: "input",
            message: "What kind of tools are used?",
        },
        {
            name: "license",
            type: "input",
            message: "Any licenses?",
            choices: [
                "MIT",
                "Apache",
                "ISC",
            ],
        },
        {
            name: "links",
            type: "input",
            message: "Link to repo?",
        },
        {
            name: "link1",
            type: "input",
            message: "Link to the app?",
        },
        {
            name: "contribute",
            type: "input",
            message: "Who else contributed?"
        },
        {
            name: "userName",
            type: 'input',
            message: "Github user name?"
        },

    ]

// This function basically takes the answers from promptQuestion and but it into the readme file. 
function createMDF(answers) {
    return `  
    ## Name of Project
    ${answers.title}

    ## About
    ${answers.about}

    ## Usage
    ${answers.type}

    ## License
    ![License](https://img.shields.io/badge/license-${answers.license}-blue.svg "License Badge")
    [License](https://opensource.org/licenses/${answers.license})

    ## Links to application
    ${answers.links}
    ${answers.link1}

    ## Contribution 
    ${answers.contribution}

    ## Github Name
    ${answers.userName}
    `;
}

// This function is the function where we want fs to write out our readme and generate it as a markdown file. 
function writeToFile(answers) {
    fs.writeFile("README.md", answers, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Created Readme")
    })
}

// This function will combine the inquirer const object and our WriteToFile function and combine together to fill out the responses in the 
// readme file
function init(){
    inquirer.prompt(promptQuestions)
    .then(function(answers) {
        writeToFile(createMDF(answers));
    })
}

//calling the init function to make get everything to work when node calls upon index.js
init();