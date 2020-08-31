/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/KIttanan/pxt-BearLab

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorlight sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorlight sensor
 */

enum BearLabType {
  moisture = 1,
  adcVal = 2,
}



//% color=#f44242 icon="\uf185"
namespace BearLab {

  // Functions for reading light from the gatorlight in lux or straight adv value

  /**
  * Reads the number
  */
  //% weight=30 blockId="BearLab" block="Get moisture on pin %pin | in %BearLabType"
  export function moisture(pin: AnalogPin, type: BearLabType): number {
    let ADCVal = pins.analogReadPin(pin)
    switch (type) {
      case BearLabType.moisture: return BearLab(ADCVal)
      case BearLabType.adcVal: return ADCVal
      default: return -11111111
    }
  }


	/**
     * Function used for simulator, actual implementation is in gatorlight.cpp
     */
  //% shim=gatorMoisture::getBearLab
  function getBearLab(ADCVal: number) {
    // Fake function for simulator
    return 0
  }


}
