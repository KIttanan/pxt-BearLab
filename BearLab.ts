/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/KIttanan/pxt-BearLab

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a BearLabb MModule sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/




enum BearLabType {
  moisture = 1,
  adcVal = 2,
}

/**
 * Custom blocks
 */

//% weight=100 color=#0fbc11 icon="\f1b0"
namespace BearLab {
  let _x: number;
  let _y: number;
  let _direction: number; // 0 right, 1 down, 2 left, 3 top
  let _brightness: number;
  let _img: Image;
  let _delay = 250;

  function init() {
    if (!_img) {
      led.setBrightness(255);
      led.setDisplayMode(DisplayMode.Greyscale);
      _x = 2;
      _y = 2;
      _direction = 3;
      _brightness = 128;
      _img = images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
      basic.clearScreen();
    }
  }

  function turn(quadrants: number): void {
    init();
    _direction = (_direction + quadrants) % 4; if (_direction < 0) _direction += 4;
  }

  /**
   * Turns left by 90 degrees
   */
  //% blockId=turtleTurnLeft block="turn left"
  //% weight=89 blockGap=8
  export function turnLeft(): void {
    turn(-1);
  }

  /**
   * Turns right by 90 degrees
   */
  //% blockId=turtleTurnRight block="turn right"
  //% weight=88 blockGap=8
  export function turnRight(): void {
    turn(1);
  }

}
