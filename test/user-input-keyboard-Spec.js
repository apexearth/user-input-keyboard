var expect        = require("expect")
var keyboardInput = require("../src/user-input-keyboard.js")

describe("user-input-keyboard.js", function () {

    it("has default members", function () {
        var input = keyboardInput()
        expect(input._input).toExist()
    })

    it("modifies values for keydown and keyup", function () {
        var keyboard = keyboardInput()
        var key      = '<tab>'

        expect(keyboard[key]).toNotExist()

        keyboard._input.emit('keydown', key)
        expect(keyboard[key]).toEqual(1)

        keyboard._input.emit('keyup', key)
        expect(keyboard[key]).toEqual(0)
    })

    it("can clear all values back to zero", function () {
        var keyboard = keyboardInput()
        keyboard._input.emit('keydown', 'A')
        keyboard._input.emit('keydown', 'B')
        expect(keyboard['A']).toEqual(1)
        expect(keyboard['B']).toEqual(1)
        keyboard.clear();
        expect(keyboard['A']).toEqual(0)
        expect(keyboard['B']).toEqual(0)
    })

})