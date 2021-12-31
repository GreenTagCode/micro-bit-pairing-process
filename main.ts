basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . # # .
    # . # . #
    . # # # .
    # . # . #
    . . # # .
    `)
basic.showLeds(`
    # . . . .
    # . . # #
    # . # # #
    # . # # #
    # # # # #
    `)
basic.showString("Hold button A. Only 30 sec")
for (let index = 0; index <= 29; index++) {
    basic.showNumber(30 - index)
}
