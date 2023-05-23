//import modules
//Inquirer
const inquirer = require("inquirer")
//FS for writing files
const fs = require('fs')
// Import classes from the Lib shapes file
const {Triangle, Square, Circle} = require('./lib/shapes')

//Create a function that writes the SVG file with prompt results
function writeLogoFile(fileName, userInput) {
    //file string starts empty
    let fileString = ''
    //SVG file set up, might need to be formatted in backticks?
    fileString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    fileString += `${userInput.shape}`

    //this adds the shape
    let userShape;
    if(userInput.shape === "Triangle") {
        userChoice = new Triangle()
        fileString += `<polygon points="150, 18 244, 182 56, 182" fill="${userInput.shapeColor}"/>`
    } else if(userInput.shape === "Square") {
        userChoice = new Square()
        fileString += `<rect x="75" y="40" width="150" height="150" fill="${userInput.shapeColor}"/>`;
    } else {
        userShape = new Circle()
        fileString += `<circle cx="150" cy="120" r="75" fill="${userInput.shapeColor}"/>`
    }

    //add users text, it should be in the bottom right, will fix
    fileString += `<text x="0" y="0" font-size="50" fill="${userInput.textColor}">${userInput.text}</text>`
    //closing tag
    fileString += '</svg>'

    fs.writeFile(fileName, fileString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
}

//create prompt questions?
function getUserInput() {
    inquirer
        .prompt([
                //text prompt
                {
                    type: "input",
                    message: "Enter up to three characters for your logo",
                    name: "text"
                },
                //text color
                {
                    type: "input",
                    message: "Enter either a color or hex code for your texts color",
                    name: "textColor"
                },
                //shape selection
                {
                    type: "list",
                    message: "What shape should your logo use?",
                    choices: ["Triangle", "Square", "Circle"],
                    name: "shape"
                },
                // shape color
                {
                    type: "input",
                    message: "Enter either a color or a hex code for your for your shape color",
                    name: "shapeColor"
                }
        ])
        .then((answers) => {
            if(answers.text.length > 3) {
                console.log("The text you entered was greated than 3 characters")
                promptUser()
            } else
            writeLogoFile("logo.svg", answers)
        })

}

getUserInput()