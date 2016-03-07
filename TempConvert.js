/**
 * Created by Admin on 3/7/2016.
 */

//Calculator TempConvert
function TempConvert() {
    this.toCelsius = function(f) {
        return (f - 32) * 5.0/9.0;
    };

    this.toFah = function(c) {
        return (c * 1.8) + 32;
    };


}
