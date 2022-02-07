input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    index = 3
    countdown_timer(2)
    basic.showString("Go")
    score = 0
    countdown_timer(9)
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
})
function countdown_timer (num: number) {
    countdown = num
    while (countdown >= 0) {
        basic.showNumber(countdown)
        basic.pause(500)
        countdown += -1
    }
    basic.clearScreen()
}
let countdown = 0
let index = 0
let score = 0
score = 0
basic.showString("A+B to start")
