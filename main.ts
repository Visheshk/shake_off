input.onButtonPressed(Button.A, function () {
    if (done == 1) {
        basic.showNumber((finish - start) / 1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    score += 1
    led.plotBarGraph(
    score,
    max_shakes
    )
    if (score == max_shakes) {
        soundExpression.happy.playUntilDone()
        finish = control.millis()
        done = 1
    }
})
let done = 0
let finish = 0
let start = 0
let max_shakes = 0
let score = 0
basic.showString("shake")
score = 0
max_shakes = 40
start = control.millis()
finish = 0
done = 0
