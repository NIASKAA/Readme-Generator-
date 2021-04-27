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
    ]);
}

function createMDF(answer){
    return ``;
}

function init(){
    const answer = userPrompt();
    const readme = createMDF(answer);
    fs.fileWrite("README.md", readme);
    console.log("Created README Successfully");

}
