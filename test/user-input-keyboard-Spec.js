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

})