/**
 * Created by Admin on 3/7/2016.
 */
"use strict";

var cars = ["Saab", "Volvo", "BMW"];

cars.push('Toyota');

console.log(cars);

cars.unshift('Mercedes');

console.log(cars);
cars.sort();

for(var i=1; i<cars.length;i++)
    console.log(cars[i])

for(let value of cars )
    console.log(value);