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
// may need to resize some shapes idk
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20"/> fill="${this.color}"/>`
    }
}


//export the Triangle Square and Circle Class

module.exports = {Triangle, Square, Circle}