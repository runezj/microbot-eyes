function Sov () {
    if (!(Sover)) {
        Sover = true
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
}
function Blink () {
    if (!(Sover)) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(500)
    }
}
function Ja () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    Vågn()
}
function Vågn () {
    if (Sover) {
        Sover = false
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Blink") {
        Blink()
    }
    if (receivedString == "Sov") {
        Sov()
    }
    if (receivedString == "Vågn") {
        Vågn()
    }
    if (receivedString == "Ja") {
        Ja()
    }
})
let Sover = false
radio.setGroup(292)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
