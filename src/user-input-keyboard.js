var util      = require("util")
var keyboard  = require("key-events")
var UserInput = require("user-input");

module.exports = keyboardInput

function keyboardInput(target) {
    return new KeyboardInput(keyboard(target))
}

function KeyboardInput(input) {
    var that = this;
    UserInput.call(this, input)

    this.input.on('keydown', function (key) {
        that.values[key] = 1;
    })
    this.input.on('keyup', function (key) {
        that.values[key] = 0;
    })
}
util.inherits(KeyboardInput, UserInput)