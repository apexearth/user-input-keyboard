var expect        = require("expect")
var keyboardInput = require("../src/user-input-keyboard.js")

describe("user-input-keyboard.js", function () {

    it("has default members", function () {
        var input = keyboardInput()
        expect(input._input).toExist()
    })

    it("keydown and keyup events", function () {
        var keyboard = keyboardInput()
        var key      = '<tab>'

        expect(keyboard[key]).toNotExist()

        keyboard._input.emit('keydown', key)
        expect(keyboard[key]).toEqual(1)

        keyboard._input.emit('keyup', key)
        expect(keyboard[key]).toEqual(0)
    })

    it(".set(key, value)", function () {
        var keyboard = keyboardInput()
        var key = '<tab>'

        expect(keyboard[key]).toNotExist()

        keyboard.set(key, 5)
        expect(keyboard[key]).toEqual(5)
        keyboard.set(key, 0)
        expect(keyboard[key]).toEqual(0)
    })

    it(".clear()", function () {
        var keyboard = keyboardInput()
        keyboard._input.emit('keydown', 'A')
        keyboard.set('B', 1)
        expect(keyboard['A']).toEqual(1)
        expect(keyboard['B']).toEqual(1)
        keyboard.clear();
        expect(keyboard['A']).toEqual(0)
        expect(keyboard['B']).toEqual(0)
    })

})