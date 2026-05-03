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
enum ETpins {
    //% block="pin P0"
    //% block.loc.nl="pin P0"
    P0 = DigitalPin.P0,
    //% block="pin P1"
    //% block.loc.nl="pin P1"
    P1 = DigitalPin.P1,
    //% block="pin P2"
    //% block.loc.nl="pin P2"
    P2 = DigitalPin.P2,
    //% block="pin P8"
    //% block.loc.nl="pin P8"
    P8 = DigitalPin.P8,
    //% block="pin P12"
    //% block.loc.nl="pin P12"
    P12 = DigitalPin.P12,
    //% block="pin P13"
    //% block.loc.nl="pin P13"
    P13 = DigitalPin.P13,
    //% block="pin P14"
    //% block.loc.nl="pin P14"
    P14 = DigitalPin.P14,
    //% block="pin P15"
    //% block.loc.nl="pin P15"
    P15 = DigitalPin.P15,
    //% block="pin P16"
    //% block.loc.nl="pin P16"
    P16 = DigitalPin.P16
}

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

//% color="#66AA22" icon="\uf111"
//% block="Simon Says"
//% block.loc.nl="Simon Says"
namespace EtSimon {

    let options: (() => void)[] = []
    let buttonHandler: () => number
    let clearHandler: () => void

    let tminit = 1000
    let tmout = 0
    let tmdelta = 100
    let series: number[] = []
    let ixseries = 0
    let ixoption = -1
    let ixbutton = -1
    let points = 0

    let ISGAMING = false

    export function registerOptionHandler(handler: () => void) {
        options.push(handler)
    }

    export function registerButtonHandler(handler: () => number) {
        buttonHandler = handler
    }

    export function registerClearHandler(handler: () => void) {
        clearHandler = handler
    }

    export function showCurrentOption() {
        if (clearHandler) clearHandler()
        etbasic.wait(0.5)
        if (ixseries < series.length && series[ixseries] < options.length)
            options[series[ixseries]]()
        etbasic.wait(0.3)
        if (clearHandler) clearHandler()
    }

    export function setFirstOption() {
        ixseries = 0
        tmout = tminit
        if (series.length)
            ixoption = series[0]
        else
            ixoption = -1
    }

    export function setNextOption() {
        tmout -= tmdelta
        if (tmout < 100) tmout = 100
        if (ixseries < series.length)
            ixseries += 1
        if (ixseries === series.length)
            ixoption = -1
        else
            ixoption = series[ixseries]
    }

    export function getCurrentIndex(): number {
        return (ixseries >= 0 && ixseries < series.length ? ixseries : -1)
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

    //% block="show the points"
    //% block.loc.nl="toon de score"
    export function showPoints() {
        basic.clearScreen()
        let points = EtSimon.getPoints()
        basic.showNumber(points)
        if (points < 10) etbasic.wait(2)
        if (clearHandler) clearHandler()
        basic.showArrow(ArrowNames.West)
    }

    //% block="increase the points"
    //% block.loc.nl="verhoog de score"
    export function increasePoints() {
        points += 1
    }

    //% block="chosen wrongly"
    //% block.loc.nl="verkeerd gekozen"
    export function hasFailed(): boolean {
        return (ixoption !== ixbutton)
    }

    //% block="chosen rightly"
    //% block.loc.nl="juist gekozen"
    export function isSuccess(): boolean {
        return (ixoption === ixbutton)
    }

    //% block="the presented option"
    //% block.loc.nl="de huidige"
    export function getCurrentOption(): number {
        return ixoption
    }

    //% block="the choice"
    //% block.loc.nl="de keuze"
    export function getButtonOption(): number {
        return ixbutton
    }

    //% block="wait until a choice is made"
    //% block.loc.nl="wacht tot er is gekozen"
    export function waitForButton() {
        if (buttonHandler) {
            let tm = control.millis() + tmout
            do {
                ixbutton = buttonHandler()
                basic.pause(1)
            } while (ixbutton === -1 && tm > control.millis())
        }
        else
            ixbutton = -1
    }

    //% block="ask the next"
    //% block.loc.nl="vraag de volgende"
    export function askNextOption() {
        setNextOption()
    }

    //% block="ask the first"
    //% block.loc.nl="vraag de eerste"
    export function askFirstOption() {
        etbasic.wait(0.3)
        basic.showIcon(IconNames.Heart)
        setFirstOption()
    }

    //% block="ask all"
    //% block.loc.nl="vraag alles"
    export function askAllOptions() {
        askFirstOption()
        while (isInSeries()) {
            waitForButton()
            if (ixbutton === ixoption) {
                increasePoints()
                askNextOption()
            }
            else {
                stopGame()
                break
            }
        }
    }
    //% block="show the next"
    //% block.loc.nl="toon de volgende"
    export function showNextOption() {
        setNextOption()
        showCurrentOption()
    }

    //% block="show the first"
    //% block.loc.nl="toon de eerste"
    export function showFirstOption() {
        basic.showIcon(IconNames.SmallHeart)
        etbasic.wait(0.5)
        setFirstOption()
        showCurrentOption()
    }

    //% block="show all"
    //% block.loc.nl="toon alles"
    export function showAllOptions() {
        showFirstOption()
        while (isInSeries())
            showNextOption()
    }

    //% block="append the series"
    //% block.loc.nl="voeg een nieuwe aan de serie toe"
    export function appendOption() {
        let opt = etbasic.randomInt(0, options.length - 1)
        series.push(opt)
    }

    //% block="all have been chosen rightly"
    //% block.loc.nl="alles goed is gekozen"
    export function isSeriesEnd(): boolean {
        return (ISGAMING && (ixseries >= series.length))
    }

    //% block="still continuing the series"
    //% block.loc.nl="nog met de serie bezig"
    export function isInSeries(): boolean {
        return (ISGAMING && (ixseries < series.length))
    }

    //% block="the next series is required"
    //% block.loc.nl="de volgende serie nodig is"
    export function restartSeries() {
        ixseries = 0
    }

    //% block="the game is busy"
    //% block.loc.nl="het spel bezig is"
    export function isGaming(): boolean {
        return ISGAMING
    }

    //% block="stop the game"
    //% block.loc.nl="stop het spel"
    export function stopGame() {
        basic.showIcon(IconNames.Sad)
        ISGAMING = false
    }

    //% block="start the game"
    //% block.loc.nl="start het spel"
    export function startGame() {
        series = []
        ixseries = 0
        ixoption = -1
        points = 0
        if (clearHandler) clearHandler()
        ISGAMING = true
    }
}

basic.showArrow(ArrowNames.West)
