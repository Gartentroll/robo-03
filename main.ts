radio.onReceivedNumber(function (receivedNumber) {
    Rover.MotorRunDual(-100, 100)
})
input.onButtonPressed(Button.A, function () {
    if (Rover.Ultrasonic() == 10) {
        Rover.MotorRunDual(-100, 100)
    } else {
        Rover.Move(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    Rover.MotorRunDual(-100, 100)
})
radio.onReceivedString(function (receivedString) {
    Rover.MotorStopAll(MotorActions.Stop)
})
input.onButtonPressed(Button.B, function () {
    Rover.MotorStopAll(MotorActions.Stop)
})
input.onGesture(Gesture.ThreeG, function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
basic.showString("Hello!")
basic.forever(function () {
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.showColor(0xff0080))
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.showColor(0xff0000))
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.showColor(0x007fff))
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.showColor(0x00ff00))
})
