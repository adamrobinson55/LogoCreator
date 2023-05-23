// Class for shapes
class Shape {
    constructor() {
        this.color = ""
    }
    //set the color to userinput
    setColor(userColor) {
        this.color = userColor
    }
}

//All these other shapes are going to extend the basic Shape class
// may need to resize some shapes idk triagangle is from ReadME so it should be OKAY
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="120" r="75"/> fill="${this.color}"/>`
    }
}


//export the Triangle Square and Circle Class

module.exports = {Triangle, Square, Circle}