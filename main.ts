input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    index = 10
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Go")
    score = 0
    while (index > 0) {
        basic.showNumber(index)
        basic.pause(1000)
    }
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
})
let index = 0
let score = 0
score = 0
basic.showString("A+B to start")
basic.forever(function () {
	
})
