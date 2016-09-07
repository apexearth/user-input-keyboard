var util = require("util")
var keyboard = require("key-events")
var EventEmitter = require("events").EventEmitter;

var browser = require("./browser.js")

module.exports = keyboardInput
browser.window.keyboardInput = keyboardInput

function keyboardInput(target) {
    return new KeyboardInput(keyboard(target))
}

function KeyboardInput(input) {
    var that = this;
    var keys = [];
    EventEmitter.call(this, input)
    this._input = input

    this._input.on('keydown', function (key) {
        if (keys.indexOf(key) === -1) keys.push(key);
        that[key] = 1;
    })
    this._input.on('keyup', function (key) {
        that[key] = 0;
    })
    this.set = function (key, value) {
        if (keys.indexOf(key) === -1) keys.push(key);
        that[key] = value;
    }
    this.clear = function () {
        for (var i = 0; i < keys.length; i++) {
            that[keys[i]] = 0;
        }
    }
}
util.inherits(KeyboardInput, EventEmitter)