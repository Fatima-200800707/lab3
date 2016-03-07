/**
 * Created by Admin on 3/7/2016.
 */
'use strict';

var num = [4,6,7,3,9];
console.log(avgarr(num));

function avgarr( a){

    var sum =0;

    for (let i of a){

        sum +=i;
    }
    return sum/a.length;

}