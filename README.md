# user-input-keyboard

![](https://travis-ci.org/apexearth/user-input-keyboard.svg)
![](http://img.shields.io/npm/v/user-input-keyboard.svg?style=flat)
![](http://img.shields.io/npm/dm/user-input-keyboard.svg?style=flat)
![](http://img.shields.io/npm/l/user-input-keyboard.svg?style=flat)

Keyboard input tracking as 0 or 1. 

Useful for applications which require tracking of key states.

## Usage

[![NPM](https://nodei.co/npm/user-input-keyboard.png)](https://nodei.co/npm/user-input-keyboard/)

### Examples

    var keyboard = window.keyboardInput(document)

When the user presses "A", keyboard would contain the following.

    {
        "A": 1
    }

When the user releases "A", and then presses "F", keyboard would contain the following.

    {
        "A": 0,
        "F": 1
    }

## Tests

- Mocha
    - Test functionality in Node.js
    - `npm test`
- User Test
    - Test functionality in browser.
    - `npm user-test`