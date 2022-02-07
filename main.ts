input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    index = 3
    for (let index2 = 0; index2 < 3; index2++) {
        basic.showNumber(index)
        basic.pause(500)
        index += -1
    }
    basic.showString("Go")
    score = 0
    while (countdown > 0) {
        basic.showNumber(countdown)
        basic.pause(500)
        countdown += -1
    }
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
})
let index = 0
let countdown = 0
let score = 0
score = 0
countdown = 10
basic.showString("A+B to start")
