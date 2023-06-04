//import modules
//Inquirer
const inquirer = require("inquirer")
//FS for writing files
const fs = require('fs')
// Import classes from the Lib shapes file
const {Triangle, Square, Circle} = require('./lib/shapes')

//Create a function that writes the SVG file with prompt results
function writeLogoFile(fileName, userInput) {
    //this adds the shape
    let userChoice;
    if(userInput.shape === "Triangle") {
        userChoice = new Triangle()
    } else if(userInput.shape === "Square") {
        userChoice = new Square()
    } else {
        userChoice = new Circle()
    }

    userChoice.setColor(userInput.shapeColor)

    fileString = 
    `<svg   version="1.1" 
            width="300" 
            height="200" 
            xmlns="http://www.w3.org/2000/svg">

            ${userChoice.render()}
            <text x="100" y="135" font-size="60" fill="${userInput.textColor}">${userInput.text}</text>

</svg>`

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
                getUserInput()
            } else
            writeLogoFile("logo.svg", answers)
        })

}

getUserInput()