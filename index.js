const inquirer = require("inquirer");
const fs =("fs");

function userPrompt(){
    inquirer.prompt([
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
        }
    ]);
}

function createMDF(answer){
    return `
    #${answer.title}

    ## About
    ${answer.about}

    ## Usage
    ${answer.type}

    ## License
    ${answer.license}

    ## Links to application
    ${answer.links}
    ${answer.link1}

    ## Contribution 
    ${answer.contribution}
    `;
}

function init(){
    const answer = userPrompt();
    const readme = createMDF(answer);
    fs.fileWrite("README.md", readme);
    console.log("Created README Successfully");

}

init()