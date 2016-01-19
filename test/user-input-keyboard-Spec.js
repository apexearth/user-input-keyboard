var expect        = require("expect")
var keyboardInput = require("../src/user-input-keyboard.js")

describe("user-input-keyboard.js", function () {

    it("has default members", function () {
        var input = keyboardInput()
        expect(input.values).toExist()
        expect(input.input).toExist()
    })

    it("modifies values for keydown and keyup", function () {
        var keyboard = keyboardInput()
        var key      = '<tab>'

        expect(keyboard.value(key)).toEqual(0)

        keyboard.input.emit('keydown', key)
        expect(keyboard[key]).toEqual(1)

        keyboard.input.emit('keyup', key)
        expect(keyboard[key]).toEqual(0)
    })

})