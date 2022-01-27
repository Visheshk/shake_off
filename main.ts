input.onButtonPressed(Button.A, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.AB, function () {
    score = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Go")
    for (let value of list) {
        basic.showNumber(value)
    }
    basic.showNumber(score)
})
input.onGesture(Gesture.Shake, function () {
    score += 1
})
let list: number[] = []
let score = 0
score = 0
list = [
10,
9,
8,
7,
6,
5,
4,
3,
2,
1,
0
]
basic.showString("A+B to start")
basic.forever(function () {
	
})
