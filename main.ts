/*
File:       github.com/ETmbit/et-simon.ts
Version:	2026-1
Copyright:  ElecTricks, 2026
License:    GNU GPL 3 or later
Disclaimer: Distributed without any warranty
Depends on: None
*/

//////////////////
//  INCLUDE     //
//  etbasic.ts  //
//////////////////

const ET_LOW = 0
const ET_HIGH = 1

enum ETstate {
    //% block="off"
    //% block.loc.nl="uit"
    Off,
    //% block="on"
    //% block.loc.nl="aan"
    On,
}

enum ETpace {
    //% block="slow"
    //% block.loc.nl="langzame"
    Slow,
    //% block="normal"
    //% block.loc.nl="normale"
    Normal,
    //% block="fast"
    //% block.loc.nl="snelle"
    Fast,
}

/*
The ETrotate, ETturn and ETmove... enumerations
have comparable values:

Start = -1
Stop = 0
Forward = 1
Backward = 2
Left, AntiClockwise = 3
Right, Clockwise = 4
Up = 5
Down = 6
*/

enum ETrotate {
    //% block="anticlockwise"
    //% block.loc.nl="linksom"
    AntiClockwise = 3,
    //% block="clockwise"
    //% block.loc.nl="rechtsom"
    Clockwise = 4,
}

enum ETturn {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmove {
    //% block="stop"
    //% block.loc.nl="stop"
    Stop = 0,
    //% block="start"
    //% block.loc.nl="start"
    Start = -1,

}

enum ETmoveX {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveY {
    //% block="forward"
    //% block.loc.nl="vooruit"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="achteruit"
    Backward = 2,
}

enum ETmoveZ {
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXY {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
}

enum ETmoveXZ {
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETmoveXYZ {
    //% block="forward"
    //% block.loc.nl="naar voren"
    Forward = 1,
    //% block="backward"
    //% block.loc.nl="naar achteren"
    Backward = 2,
    //% block="to the left"
    //% block.loc.nl="naar links"
    Left = 3,
    //% block="to the right"
    //% block.loc.nl="naar rechts"
    Right = 4,
    //% block="up"
    //% block.loc.nl="omhoog"
    Up = 5,
    //% block="down"
    //% block.loc.nl="omlaag"
    Down = 6,
}

enum ETcolor {
    //% block="red"
    //% block.loc.nl="rood"
    Red = 1,
    //% block="green"
    //% block.loc.nl="groen"
    Green = 2,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue = 3,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow = 4,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan = 5,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta = 6,
    //% block="black"
    //% block.loc.nl="zwart"
    Black = 7,
    //% block="dark grey"
    //% block.loc.nl="donkergrijs"
    DarkGrey = 8,
    //% block="grey"
    //% block.loc.nl="grijs"
    Grey = 9,
    //% block="light grey"
    //% block.loc.nl="lichtgrijs"
    LightGrey = 10,
    //% block="white"
    //% block.loc.nl="wit"
    White = 11,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange = 12,
    //% block="brown"
    //% block.loc.nl="bruin"
    Brown = 13,
    //% block="pink"
    //% block.loc.nl="roze"
    Pink = 14,
    //% block="indigo"
    //% block.loc.nl="indigo"
    Indigo = 15,
    //% block="violet"
    //% block.loc.nl="violet"
    Violet = 16,
    //% block="purple"
    //% block.loc.nl="paars"
    Purple = 17,
}

function etRgbValue(red: number, green: number, blue: number): number {
    let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
    return rgb;
}

function etRedValue(rgb: number): number {
    let r = (rgb >> 16) & 0xFF;
    return r;
}

function etGreenValue(rgb: number): number {
    let g = (rgb >> 8) & 0xFF;
    return g;
}

function etBlueValue(rgb: number): number {
    let b = (rgb) & 0xFF;
    return b;
}

function etFromColor(color: ETcolor): number {
    let val = 0
    switch (color) {
        case ETcolor.Red: val = 0xFF0000; break;
        case ETcolor.Green: val = 0x00FF00; break;
        case ETcolor.Blue: val = 0x0000FF; break;
        case ETcolor.Yellow: val = 0xFFFF00; break;
        case ETcolor.Cyan: val = 0x00FFFF; break;
        case ETcolor.Magenta: val = 0xFF00FF; break;
        case ETcolor.Black: val = 0x000000; break;
        case ETcolor.DarkGrey: val = 0xA9A9A9; break;
        case ETcolor.Grey: val = 0x808080; break;
        case ETcolor.LightGrey: val = 0xD3D3D3; break;
        case ETcolor.White: val = 0xFFFFFF; break;
        case ETcolor.Orange: val = 0xFFA500; break;
        case ETcolor.Brown: val = 0xA52A2A; break;
        case ETcolor.Pink: val = 0xFFC0CB; break;
        case ETcolor.Indigo: val = 0x4b0082; break;
        case ETcolor.Violet: val = 0x8a2be2; break;
        case ETcolor.Purple: val = 0x800080; break;
    }
    return val
}

function etFromRgbValues(red: number, green: number, blue: number): ETcolor {
    let max = -1
    let min = -1
    let hue = 0

    if (red > green && red > blue) max = red
    if (green > red && green > blue) max = green
    if (blue > red && blue > green) max = blue
    if (red < green && red < blue) min = red
    if (green < red && green < blue) min = green
    if (blue < red && blue < green) min = blue

    if (red == max) hue = (0 + (green - blue) / (max - min)) * 60
    if (green == max) hue = (2 + (blue - red) / (max - min)) * 60
    if (blue == max) hue = (4 + (red - green) / (max - min)) * 60

    if (hue < 0) hue += 360

    // translate hue to color names
    if (hue == 0) return ETcolor.White
    if (hue < 5) return ETcolor.Orange
    if (hue < 30) return ETcolor.Brown
    if (hue < 100) return ETcolor.Yellow
    if (hue < 190) return ETcolor.Green
    if (hue < 206) return ETcolor.Cyan
    if (hue < 213) return ETcolor.Blue
    if (hue < 217) return ETcolor.Black
    if (hue < 230) return ETcolor.Indigo
    if (hue < 255) return ETcolor.Purple
    if (hue < 272) return ETcolor.Pink
    if (hue < 300) return ETcolor.Magenta
    return ETcolor.Red
}

function etFromRgb(rgb: number): ETcolor {
    let red = etRedValue(rgb);
    let green = etGreenValue(rgb);
    let blue = etBlueValue(rgb);
    return etFromRgbValues(red, green, blue)
}

//% color="#61CBF4" icon="\uf075"
//% block="General"
//% block.loc.nl="Algemeen"
namespace etbasic {

    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% dummy.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

    //% block="a number from %min upto %max"
    //% block.loc.nl="een getal van %min t/m %max"
    //% min.defl=0 max.defl=10
    export function randomInt(min: number, max: number): number {
        let i = 0
        if (min > max) {
            i = min
            min = max
            max = i
        }
        i = max - min + 1
        i = min + Math.floor(Math.random() * i)
        return i
    }

    //% block="wait %sec seconds"
    //% block.loc.nl="wacht %sec seconden"
    export function wait(sec: number) {
        basic.pause(sec * 1000)
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

//////////////////////
//  INCLUDE         //
//  et-ledstrip.ts  //
//////////////////////

enum NeopixelMode {
    GRB = 1,
    RGBW = 2,
    RGB = 3
}

namespace EtLedstrip {

    export class Device {

        pin: DigitalPin
        max: number
        mode: NeopixelMode
        buffer: Buffer
        size: number
        bright: number = 10

        constructor(pin: DigitalPin, leds: number, mode: NeopixelMode) {
            this.pin = pin
            this.max = leds - 1
            this.mode = mode
            this.size = leds * (mode == NeopixelMode.RGBW ? 4 : 3)
            this.buffer = pins.createBuffer(this.size)
        }

        show() {
            light.sendWS2812Buffer(this.buffer, this.pin)
        }

        setPixelRGB(offset: number, red: number, green: number, blue: number, white: number = 0): void {
            offset *= (this.mode == NeopixelMode.RGBW ? 4 : 3)
            switch (this.mode) {
                case NeopixelMode.GRB:
                    this.buffer[offset + 0] = Math.floor(green * this.bright / 100)
                    this.buffer[offset + 1] = Math.floor(red * this.bright / 100);
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100);
                    break;
                case NeopixelMode.RGB:
                    this.buffer[offset + 0] = Math.floor(red * this.bright / 100);
                    this.buffer[offset + 1] = Math.floor(green * this.bright / 100);
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100);
                    break;
                case NeopixelMode.RGBW:
                    this.buffer[offset + 0] = Math.floor(red * this.bright / 100);
                    this.buffer[offset + 1] = Math.floor(green * this.bright / 100);
                    this.buffer[offset + 2] = Math.floor(blue * this.bright / 100);
                    this.buffer[offset + 3] = Math.floor(white * this.bright / 100);
                    break;
            }
        }

        setPixelColor(pixel: number, color: ETcolor, white: number = 0): void {
            if (pixel < 0 || pixel >= 8)
                return;
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF;
            let green = (rgb >> 8) & 0xFF;
            let blue = (rgb) & 0xFF;
            this.setPixelRGB(pixel, red, green, blue, white)
        }

        setRGB(red: number, green: number, blue: number, white: number = 0) {
            for (let i = 0; i < 8; ++i)
                this.setPixelRGB(i, red, green, blue, white)
        }

        setColor(color: ETcolor, white: number = 0) {
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF;
            let green = (rgb >> 8) & 0xFF;
            let blue = (rgb) & 0xFF;
            for (let i = 0; i < 8; ++i)
                this.setPixelRGB(i, red, green, blue, white)
        }

        setClear(): void {
            this.buffer.fill(0, 0, this.size);
        }

        setBrightness(brightness: number) {
            if (brightness < 0) brightness = 0
            if (brightness > 100) brightness = 100
            // small steps at low brightness and big steps at high brightness
            brightness = (brightness ^ 2 / 100)
            this.bright = brightness
        }

        setRotate(rotation: ETrotate): void {
            let offset = (this.mode == NeopixelMode.RGBW ? 4 : 3)
            if (rotation == ETrotate.Clockwise)
                this.buffer.rotate(-offset, 0, this.size)
            else
                this.buffer.rotate(offset, 0, this.size)
        }

        rainbow(rotation: ETrotate, pace: ETpace = ETpace.Normal) {
            if (rotation == ETrotate.Clockwise) {
                this.setPixelColor(0, ETcolor.Red)
                this.setPixelColor(1, ETcolor.Orange)
                this.setPixelColor(2, ETcolor.Yellow)
                this.setPixelColor(3, ETcolor.Green)
                this.setPixelColor(4, ETcolor.Blue)
                this.setPixelColor(5, ETcolor.Indigo)
                this.setPixelColor(6, ETcolor.Violet)
                this.setPixelColor(7, ETcolor.Purple)
            }
            else {
                this.setPixelColor(7, ETcolor.Red)
                this.setPixelColor(6, ETcolor.Orange)
                this.setPixelColor(5, ETcolor.Yellow)
                this.setPixelColor(4, ETcolor.Green)
                this.setPixelColor(3, ETcolor.Blue)
                this.setPixelColor(2, ETcolor.Indigo)
                this.setPixelColor(1, ETcolor.Violet)
                this.setPixelColor(0, ETcolor.Purple)
            }
            this.show()
            basic.pause(pace)
            pace = (pace + 1) * 75
            for (let i = 0; i < this.max; i++) {
                this.setRotate(rotation)
                this.show()
                basic.pause(pace)
            }
        }

        snake(color: ETcolor, rotation: ETrotate, pace: ETpace = ETpace.Normal) {
            let rgb = etFromColor(color)
            let red = (rgb >> 16) & 0xFF;
            let green = (rgb >> 8) & 0xFF;
            let blue = (rgb) & 0xFF;
            this.setClear();
            this.show()
            pace = (pace + 1) * 75
            for (let i = this.max; i >= 0; i--) {
                if (rotation == ETrotate.Clockwise)
                    this.setPixelRGB(this.max - i, red, green, blue)
                else
                    this.setPixelRGB(i, red, green, blue)
                this.show()
                basic.pause(pace)
            }
            this.show()
            for (let i = this.max - 1; i >= 0; i--) {
                if (rotation == ETrotate.Clockwise)
                    this.setPixelRGB(this.max - i, 0, 0, 0)
                else
                    this.setPixelRGB(i, 0, 0, 0)
                this.show()
                basic.pause(pace)
            }
            if (rotation == ETrotate.Clockwise)
                this.setPixelRGB(0, 0, 0, 0)
            else
                this.setPixelRGB(this.max, 0, 0, 0)
            this.show()
            basic.pause(pace)
        }
    }

    export function create(pin: DigitalPin, leds: number, mode: NeopixelMode = NeopixelMode.GRB): Device {
        let device = new Device(pin, leds, mode)
        return device
    }
}

///////////////////
//  END INCLUDE  //
///////////////////

namespace SimonSays {

    let pinRed, pinGreen, pinBlue: DigitalPin
    let led: EtLedstrip.Device

    let tminit = 1000
    let tmout = 0
    let tmdelta = 100
    let series: ETcolor[] = []
    let ixseries = 0
    let curColor = ETcolor.Black
    let butColor = ETcolor.Black
    let busy = false
    let points = 0

    export function setPins(ledPin: DigitalPin, redPin: DigitalPin, greenPin: DigitalPin, bluePin: DigitalPin) {
        pinRed = redPin
        pinGreen = greenPin
        pinBlue = bluePin
        pins.setPull(pinRed, PinPullMode.PullDown)
        pins.setPull(pinGreen, PinPullMode.PullDown)
        pins.setPull(pinBlue, PinPullMode.PullDown)
        led = EtLedstrip.create(DigitalPin.P8, 1)
    }

    export function clearColor() {
		led.setClear()
		led.show()
    }

    export function clearSeries() {
        busy = false
        series = []
        ixseries = 0
        points = 0
        curColor = ETcolor.Black
        butColor = ETcolor.Black
        clearColor()
    }

    export function restartSeries() {
        ixseries = 0
        curColor = ETcolor.Black
        butColor = ETcolor.Black
    }

    export function showCurrentColor() {
        clearColor()
        basic.pause(500)
		led.setColor(curColor)
		led.show()
    }

    export function waitForButton(): ETcolor {
        butColor = ETcolor.Black
        let tm = control.millis() + tmout
        while (tm > control.millis()) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                while (pins.digitalReadPin(DigitalPin.P0) == 1) pause(1)
                butColor = ETcolor.Red
                break
            } else
                if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                    while (pins.digitalReadPin(DigitalPin.P1) == 1) pause(1)
                    butColor = ETcolor.Yellow
                    break
                } else
                    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
                        while (pins.digitalReadPin(DigitalPin.P2) == 1) pause(1)
                        butColor = ETcolor.Blue
                        break
                    }
            basic.pause(1)
        }
        return butColor
    }

    export function extendSeries() {
        let clr = etbasic.randomInt(0, 2)
        let color: ETcolor
        switch (clr) {
            case 0: color = ETcolor.Red; break
            case 1: color = ETcolor.Yellow; break
            case 2: color = ETcolor.Blue; break
        }
        series.push(color)
    }

    export function getSeriesLength(): number {
        return series.length
    }

    export function setFirstColor() {
        ixseries = 0
        tmout = tminit
        if (series.length) {
            busy = true
            curColor = series[ixseries]
        }
        else {
            busy = false
            curColor = ETcolor.Black
        }
    }

    export function setNextColor() {
        tmout -= tmdelta
        if (tmout < 100) tmout = 100
        if (ixseries < series.length)
            ixseries += 1
        if (ixseries == series.length) {
            busy = false
            curColor = ETcolor.Black
        }
        else {
            curColor = series[ixseries]
        }
    }

    export function isSeriesEnd(): boolean {
        return (ixseries >= series.length)
    }

    export function isSeriesBusy(): boolean {
        return (busy)
    }

    export function getCurrentIndex(): number {
        return (ixseries >= 0 && ixseries < series.length ? ixseries : -1)
    }

    export function getCurrentColor(): ETcolor {
        return curColor
    }

    export function getButtonColor(): ETcolor {
        return butColor
    }

    export function isMatchingColor(): boolean {
        return (curColor == butColor)
    }

    export function increasePoints() {
        points += 1
    }

    export function getPoints(): number {
        return points
    }

    export function setInitTimeout(timeout: number) {
        tminit = timeout * 1000
    }

    export function setFirstTimeout(timeout: number) {
        tmout = tminit
    }

    export function setNextTimeout() {
        if (tmout >= tmdelta) tmout -= tmdelta
    }
}

SimonSays.clearSeries()
