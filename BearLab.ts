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

//% color=#0fbc11 icon="\f1b0"
namespace BearLab {

  // Functions for reading light from the BearLab in lux or straight adv value

  /**
  * Reads the number
  */
  //% weight=30 blockId="BearLab" block="Test Bear lab connector %pin | in %BearLabType"
  export function BearLab(pin: AnalogPin, type: BearLabType): number {
    let ADCVal = pins.analogReadPin(pin)
    switch (type) {
      case BearLabType.moisture: return getBearLab(ADCVal)
      case BearLabType.adcVal: return ADCVal
      default: return -11111111
    }
  }


	/**
     * Function used for simulator, actual implementation is in BearLab.cpp
     */
  //% shim=BearLab::getBearLab
  function getBearLab(ADCVal: number) {
    // Fake function for simulator
    return 0
  }


}
