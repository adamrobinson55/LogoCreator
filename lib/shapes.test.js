const { describe } = require("node:test")
const { Triangle, Square, Circle } = require("./shapes.js")

describe("Blue Triangle Test", () => {
    expect("Test for a Triangle with a Blue Fill", () => {
        const shape = new Triangle()
        shape.setColor("blue")
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })})

//I guess the color doesn't matter because it's only testing if the code gets returned not actually generating a file
describe("Hexcode Triangle Test", () => {
    expect("Test for a triangle with Black fill using Hexcode", () => {
        const shape = new Triangle()
        shape.setColor("#000000")
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#000000" />')
    })})


describe("Square Test", () => {
    expect("test for a yellow square", () => {
        const shape = new Square()
        shape.setColor("Yellow")
        expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" fill="yellow"/>')
    })})