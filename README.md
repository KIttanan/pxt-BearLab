# BearLab Module Block

![BearLab](https://raw.githubusercontent.com/KIttanan/pxt-BearLab/master/icon.png)  

## ~ hint

## ~

## Basic usage

```blocks
//Sets the value of the light variable to the value read from the gator:light
let light = 0
light = gatorlight.light(AnalogPin.P0, gatorlightType.Lux)
```

Use ``||Get light on pin||`` to read the light value from a gator:light sensor attached to a given pin in lux or the straight ADC value.

## Example: Light Detector

```blocks
//Read light value and write it to the micro:bit screen as a bar graph.
let light = 0
basic.forever(function () {
    light = gatorlight.light(AnalogPin.P0, gatorlightType.Lux)
    led.plotBarGraph(
        light,
        1023
    )
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorlight=github:sparkfun/pxt-gator-light
```