let keyTimeVar = 0
let Time = 0
let keyTime = 0
function keyTimeSkift () {
    if (keyTimeVar < 10) {
        keyTimeVar += 1
    } else {
        keyTimeVar = 0
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    keyTimeSkift()
})
function timeCalc (num: number) {
    Time = 3 / 4 * 2 ** num
    return Time
}
radio.onReceivedValue(function (name, value) {
    if (name == "time") {
        keyTime = value
    }
})
function countDown () {
    if (keyTime > 0) {
        control.waitMicros(10 ** 6 * 60)
        keyTime += -1
        if (keyTime <= 0) {
        	
        }
    }
}
basic.forever(function () {
	
})
basic.forever(function () {
    countDown()
})
