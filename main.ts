let keyTimeVar = 0
let Time = 0
let keyTime = 0
input.onGesture(Gesture.ScreenDown, function () {
    if (keyTimeVar < 10) {
        keyTimeVar += 1
    } else {
        keyTimeVar = 0
    }
})
function timeCalc (num: number) {
    Time = 3 / 4 * 2 ** num
    return Time
}
basic.forever(function () {
    basic.showNumber(keyTime)
})
basic.forever(function () {
    if (keyTime > 0) {
        control.waitMicros(10 ** 6 * 60)
        keyTime += -1
        if (keyTime <= 0) {
        	
        }
    }
})
