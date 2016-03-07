/**
 * Created by Admin on 3/7/2016.
 */

'use strict';

let index=1;
for (index = 1; index < 10 ; index++) {
    console.log(factorial( index) ) + ' ';
}
    function factorial(n){

       var r=1;
        for (var i=1; i<=n; i++)
        r*=i;
        return r;

    }
