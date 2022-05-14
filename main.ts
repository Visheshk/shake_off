input.onButtonPressed(Button.A, function () {
    basic.showNumber(finish - start)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
    if (score == 10) {
        finish = control.millis()
        soundExpression.giggle.playUntilDone()
    }
})
let start = 0
let finish = 0
let score = 0
score = 0
finish = 0
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.showString("Go")
score = 0
start = control.millis()
