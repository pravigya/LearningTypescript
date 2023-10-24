"use strict";
//Literal Types
let myName; //only these are accepted
//functions
const add = (a, b) => {
    return a + b;
    //if func does not return anything its return type is void
};
const multiply = function (c, d) {
    return c * d;
};
//optional parameters - required first, optional last
const addAll = (a, b, c) => {
    // type guard
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
