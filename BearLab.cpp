#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

namespace BearLab {
    /*
    * Calculates the light in Lux based on the ADC value passed in. 1 step in adcVal is equal to .488 uA or .976 lux at 5V
    */
    //%
    float getBearLab(int16_t ADCVal) {
        return ADCVal / 1023.0;
    }
}
