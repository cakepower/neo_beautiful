let blue = 0
let green = 0
let red = 0
let index2 = 0
let num_of_led = 0
let left_t_strip = neopixel.create(DigitalPin.P13, 256, NeoPixelMode.RGB)
left_t_strip.showColor(neopixel.colors(NeoPixelColors.Black))
left_t_strip.show()
basic.forever(function () {
    if (125 < input.soundLevel()) {
        motorbit.forward(100)
        num_of_led = 8
        index2 = 0
        while (index2 <= num_of_led) {
            red = randint(0, 255)
            green = randint(0, 255)
            blue = randint(0, 255)
            left_t_strip.setPixelColor(randint(0, 256), neopixel.rgb(red, green, blue))
            left_t_strip.show()
            basic.pause(400)
            index2 += 1
        }
        motorbit.brake()
    } else {
        motorbit.brake()
    }
})
